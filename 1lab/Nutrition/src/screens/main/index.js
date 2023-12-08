import { StyleSheet } from 'react-native';
import { Box, Button, Icon, Spinner } from "native-base";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/user.selectors"
import useNutrition from "../../hooks/useNutrition.hook";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import AddMealModal from "./components/AddMealModal";
import Meals from "./components/Meals";
import useMeal from "../../hooks/useMeal";

const Main = () => {
  const { find: findNutrition } = useNutrition();
  const { find: findMeals } = useMeal();
  const user = useSelector(selectUser);
  const today = new Date();

  const [isLoading, setLoading] = useState(true);
  const [showAddMealModal, setShowAddMealModal] = useState(false);
  const [date, setDate] = useState(`${today.getDay()}.${today.getMonth()}.${today.getFullYear()}`);

  useEffect(() => {
    findNutrition(user)
      .then((nutrition) => findMeals(nutrition)
        .then(() => setLoading(false)));
  }, []);

  if (isLoading) return <Box style={styles.container}>
    <Spinner size="lg" />
  </Box>

  return <Box style={styles.container}>
    <Header
      selectedDate={date}
      openModal={() => setShowAddMealModal(true)}
    />
    <AddMealModal
      isOpen={showAddMealModal}
      closeModal={() => setShowAddMealModal(false)}
    />
    <Meals
      selectedDate={date}
      onSelect={setDate}
    />
  </Box>
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 24,
    padding: 16,
    gap: 16
  },
  button: {
    backgroundColor: "#36454F",
    fontSize: 18
  }
})

export default Main;
