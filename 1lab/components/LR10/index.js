import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Cryptos from "./screens/Cryptos";
import Cart from "./screens/Cart";

const Stack = createNativeStackNavigator();

const LR10 = () => {
    return <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Scryptos" component={Cryptos} options={{ headerShown: false }} />
                <Stack.Screen name="Cart" component={Cart} />
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
}



export default LR10;