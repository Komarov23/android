import AuthLayout from "@screens/auth/layout/auth";
import { StyleSheet, Text } from "react-native";
import Input from "../../../components/Input";
import { useEffect, useState } from "react";
import { useRealm } from "../../../context/realm.context";
import useUser from "../../../hooks/useUser.hook";

const baseForm = () => ({
  email: "",
  password: ""
})

const Login = ({ navigation }) => {
  const realm = useRealm();
  const { login } = useUser();
  const [form, setForm] = useState(baseForm());
  const [errors, setErrors] = useState(baseForm());
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => setUser(realm.objects('User').filtered('email == $0', form.email)[0]), [form.email]);
  const onChange = (field) => (value) => setForm((prevState) => ({
    ...prevState,
      [field]: value
  }));

  const isValid = () => {
    const createError = (field, error) => {
      setErrors(prevState => ({ ...prevState, [field]: error }))
      return false;
    }

    if (!form.email) return createError('email', 'Email field is required');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return createError('email', 'Email field is invalid');
    if (!form.password) return createError('password', 'Password field is required');

    if (!user || user.password !== form.password) return createError('email', 'Email or password is invalid');
    return true;
  }

  const onSubmit = () => {
    setErrors(baseForm());
    if (!isValid()) return;
    setLoading(true);
    login(user);
  };
  const onRedirect = () => navigation.navigate('Register');

  return <AuthLayout
    isLogin
    onSubmit={onSubmit}
    onRedirect={onRedirect}
    isLoading={isLoading}
  >
    <Text style={styles.label}>Nutrition</Text>
    <Text style={styles.description}>Login</Text>
    <Input
      label={'Email'}
      placeholder={'Enter email'}
      value={form.email}
      onChange={onChange('email')}
      style={styles.input}
      error={errors.email}
    />
    <Input
      label={'Password'}
      placeholder={'Enter password'}
      value={form.password}
      onChange={onChange('password')}
      style={styles.input}
      error={errors.password}
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

export default Login;
