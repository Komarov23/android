import { Box, Icon, Pressable } from "native-base";
import { StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../features/user/user.selectors";
import { selectNutrition } from "../../../../features/nutrition/nutrition.selectors";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { selectMeals } from "../../../../features/meal/meals.selectors";

const Header = ({ selectedDate, openModal }) => {
  const user = useSelector(selectUser),
        nutrition = useSelector(selectNutrition),
        meals = useSelector(selectMeals),
        kk = !meals.length ? 0 : meals
          .filter(({ date }) => date === selectedDate)
          .map(({ kk }) => kk)
          .reduce((acc, value) => acc += parseFloat(value.toFixed(2)), 0);

  return <Box style={styles.header}>
    <Text style={styles.title}>Hello, {user.name}!</Text>
    <Box style={styles.container}>
      <Pressable style={styles.button} onPress={openModal}>
        <Icon color="white" as={<AntDesign name='pluscircleo' size={24} />} />
        <Text style={styles.text}>Add meal</Text>
      </Pressable>
      <Box style={styles.kk_container}>
        <Text style={kk > nutrition.kk ? styles.kk_red : styles.kk_green}>{kk}</Text>
        <Text style={styles.kk}>/{nutrition.kk}</Text>
      </Box>
    </Box>
  </Box>
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "column",
    gap: 16
  },
  container: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    color: "#36454F"
  },
  text: {
    fontSize: 18,
    color: "white"
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#36454F",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8
  },
  kk_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  kk: {
    fontSize: 24,
    color: "#36454F"
  },
  kk_green: {
    fontSize: 24,
    color: "green"
  },
  kk_red: {
    fontSize: 24,
    color: "red"
  }
})

export default Header;
