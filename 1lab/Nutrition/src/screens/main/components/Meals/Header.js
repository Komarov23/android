import { Box, ScrollView } from "native-base";
import HeaderItem from "./HeaderItem";
import { StyleSheet } from "react-native";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectMeals } from "../../../../features/meal/meals.selectors";

const Header = ({ selectedDate, onSelect }) => {
  const meals = useSelector(selectMeals);
  const dates = [...new Set(meals.map(({ date }) => date))];
  const scroll = useRef();

  useEffect(() => {
    scroll.current?.scrollToEnd()
  }, []);

  return <ScrollView
    ref={scroll}
    horizontal={true}
  >
    <Box style={styles.container}>
      {dates.map(value => <HeaderItem
        date={value}
        key={value}
        isSelected={selectedDate === value}
        onSelect={() => onSelect(value)}
      />)}
    </Box>
  </ScrollView>
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 8
  }
})

export default Header;
