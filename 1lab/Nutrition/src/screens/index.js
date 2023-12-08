import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "@screens/auth/Login";
import Register from "@screens/auth/Register";
import Main from "@screens/main";
import Extra from "@screens/user/extra";
import useUser from "../hooks/useUser.hook";
import { useSelector } from "react-redux";
import { isAuthenticated, selectUser } from "../features/user/user.selectors";

const Stack = createNativeStackNavigator();

const generateStacks = (isAuthed, user) => {
  const { isUserFull } = useUser();
  const withoutHeader = { headerShown: false };

  const nonAuthedStacks = (<Stack.Group>
    <Stack.Screen name='Login' component={Login} options={withoutHeader} />
    <Stack.Screen name='Register' component={Register} options={withoutHeader} />
  </Stack.Group>)

  if (!isAuthed || !user) return nonAuthedStacks;

  const extraStack = <Stack.Screen name='Extra' component={Extra} options={withoutHeader} />

  const mainStacks = (<Stack.Group>
    <Stack.Screen name='Main' component={Main} options={withoutHeader} />
  </Stack.Group>)

  return (<Stack.Group>{!isUserFull(user) ? (extraStack) : (mainStacks)}</Stack.Group>);
}

const Navigation = () => {
  const isAuthed = useSelector(isAuthenticated);
  const user = useSelector(selectUser);

  const stacks = generateStacks(isAuthed, user)

  return <NavigationContainer>
    <Stack.Navigator>
      {stacks}
    </Stack.Navigator>
  </NavigationContainer>
}

export default Navigation;
