import { useSelector } from "react-redux";
import { Box, ScrollView } from "native-base";
import Header from "./Header";
import { selectMeals } from "../../../../features/meal/meals.selectors";
import { StyleSheet } from "react-native";
import Meal from "./Meal";

const Meals = ({ selectedDate, onSelect }) => {
  const meals = useSelector(selectMeals),
        selectedMeals = meals.filter(({ date }) => date === selectedDate);

  return <Box style={styles.container}>
    <Header
      selectedDate={selectedDate}
      onSelect={(value) => onSelect(value)}
    />
    <ScrollView>
      <Box style={styles.meals_container}>
        {selectedMeals.map(({ name, kk, description }, index) => <Meal key={index} name={name} kk={kk} description={description} />)}
      </Box>
    </ScrollView>
  </Box>
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 16
  },
  meals_container: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  }
})

export default Meals;
