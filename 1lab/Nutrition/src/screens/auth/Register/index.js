import AuthLayout from "@screens/auth/layout/auth";
import { StyleSheet, Text } from "react-native";
import Input from "@components/Input";

import { useEffect, useState } from "react";
import useUser from "../../../hooks/useUser.hook";

const baseForm = () => ({
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
});

const Register = ({ navigation }) => {
  const { register, validateEmail } = useUser();

  const [isLoading, setLoading] = useState(false)
  const [form, setForm] = useState(baseForm());
  const [errors, setErrors] = useState(baseForm());

  const createError = (field, error) => {
    setErrors((prevState) => ({ ...prevState, [field]: error }));
    return false;
  }

  const isValid = () => {
    if (!form.name) return createError('name', 'Name field is required');
    if (!form.email) return createError('email', 'Email field is required');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return createError('email', 'Email field is invalid');
    if (!validateEmail(form.email)) return createError('email', 'Email already exists!');
    if (!form.password) return createError('password', 'Password field is required');
    if (form.password.length < 6) return createError('password', 'Password should be more than 6 characters');
    if (form.password.length > 16) return createError('password', 'Password should be less tha 16 characters');
    if (form.confirmPassword.length < 6) return createError('confirmPassword', 'Password should be more than 6 characters');
    if (form.confirmPassword.length > 16) return createError('confirmPassword', 'Password should be less tha 16 characters');
    if (form.confirmPassword !== form.password) return createError('confirmPassword', 'Password and Confirm password doesnt match');

    return true;
  }

  useEffect(() => {
    if (form.email && !validateEmail(form.email)) createError('email', 'Email already exists!');
    else  createError('email', '');
  }, [form]);

  const onSubmit = () => {
    setErrors(baseForm());
    if (!isValid()) return;
    register(form);
  }
  const onRedirect = () => navigation.navigate('Login');
  const onChange = (field) => (value) => setForm((prevForm) => ({
    ...prevForm,
    [field]: value
  }));

  return <AuthLayout
    onSubmit={onSubmit}
    onRedirect={onRedirect}
    isLoading={isLoading}
  >
    <Text style={styles.label}>Nutrition</Text>
    <Text style={styles.description}>Register</Text>

    <Input
      label={'Name'}
      value={form.name}
      onChange={onChange('name')}
      placeholder={'Enter name'}
      style={styles.input}
      error={errors.name}
    />

    <Input
      label={'Email'}
      value={form.email}
      onChange={onChange('email')}
      placeholder={'Enter email'}
      style={styles.input}
      error={errors.email}
    />

    <Input
      label={'Password'}
      value={form.password}
      onChange={onChange('password')}
      placeholder={'Enter password'}
      style={styles.input}
      error={errors.password}
      type='password'
    />

    <Input
      label={'Confirm Password'}
      value={form.confirmPassword}
      onChange={onChange('confirmPassword')}
      placeholder={'Enter password confirmation'}
      style={styles.input}
      error={errors.confirmPassword}
      type='password'
    />
  </AuthLayout>
}

const styles = StyleSheet.create({
  label: {
    textAlign: "center",
    fontSize: 36,
    fontWeight: "bold"
  },
  description: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold"
  },
  input: {
    width: "75%"
  }
});

export default Register;
