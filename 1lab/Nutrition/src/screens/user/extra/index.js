import { StyleSheet, Text } from "react-native";
import { Box, Button } from "native-base";
import React, { useState } from "react";
import Input from "../../../components/Input";
import User from "../../../models/User";
import useUser from "../../../hooks/useUser.hook";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/user/user.selectors"
import useNutrition from "../../../hooks/useNutrition.hook";

const baseForm = () => ({
  gender: '',
  goal: '',
  weight: '',
  height: '',
  age: ''
})

const genderList = [
  {
    value: User.GENDERS.male,
    label: 'Male'
  },
  {
    value: User.GENDERS.female,
    label: 'Female'
  }
]

const goalList = [
  {
    value: User.GOAL_TYPES.gain,
    label: 'Gain weight'
  },
  {
    value: User.GOAL_TYPES.loose,
    label: 'Loose weight'
  }
]

const Extra = () => {
  const { update } = useUser();
  const { create } = useNutrition()
  const user = useSelector(selectUser);

  const [form, setForm] = useState(baseForm());
  const [error, setErrors] = useState(baseForm());
  const [isLoading, setLoading] = useState(false);

  const onChange = (field) => (value) => setForm((prevState) => ({
    ...prevState,
    [field]: value
  }));

  const isValid = () => {
    const createError = (field, error) => {
      setErrors(prevState => ({ ...prevState, [field]: error }))
      return false;
    }

    if (!form.gender) return createError('gender', 'Gender field is required!');
    if (form.weight < 40 || form.weight > 200) return createError('weight', 'Not valid!');
    if (form.height < 120 || form.height > 230) return createError('height', 'Not valid!');
    if (form.age < 14 || form.age > 99) return createError('age', 'Not valid!');
    if (!form.goal) return createError('goal', 'Goal field is required!');

    return true;
  }

  const onSubmit = async () => {
    setErrors(baseForm());
    setLoading(true);
    if (isValid()) {
      const updatedUser = {
        ...user,
        gender: form.gender,
        goal: form.goal,
        weight: parseInt(form.weight),
        height: parseInt(form.height),
        age: parseInt(form.age)
      }
      await update(updatedUser);
      await create(updatedUser);
    }
    setLoading(false);
  }

  return <Box style={styles.container}>
    <Text style={styles.label}>Please, add extra info to continue</Text>
    <Input.Select
      value={form.gender}
      onChange={onChange('gender')}
      label="Select your gender"
      placeholder="Your gender"
      values={genderList}
      style={styles.input}
      error={error.gender}
    />
    <Box style={styles.inputs}>
      <Input
        value={form.weight}
        onChange={onChange('weight')}
        label="Weight"
        placeholder="40-200 kg"
        style={styles.smallInput}
        error={error.weight}
        keyboardType='numeric'
      />
      <Input
        value={form.height}
        onChange={onChange('height')}
        label="Height"
        placeholder="120-230 sm"
        style={styles.smallInput}
        error={error.height}
        keyboardType='numeric'
      />
      <Input
        value={form.age}
        onChange={onChange('age')}
        label="Age"
        placeholder="14-99"
        style={styles.smallInput}
        error={error.age}
        keyboardType='numeric'
      />
    </Box>
    <Input.Select
      value={form.goal}
      onChange={onChange('goal')}
      label="Select your goal"
      placeholder="Your goal"
      values={goalList}
      style={styles.input}
      error={error.goal}
    />
    <Button
      isLoading={isLoading}
      onPress={onSubmit}
      style={styles.button}
    >
      Continue
    </Button>
  </Box>
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    gap: 16
  },
  label: {
    textAlign: "center",
    fontSize: 18
  },
  inputs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    width: "75%"
  },
  smallInput: {
    width: "30%"
  },
  input: {
    width: "75%"
  },
  button: {
    width: "75%"
  }
});


export default Extra;
