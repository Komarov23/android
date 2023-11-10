import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contacts from "./Contacts";
import Gallery from "../../LR8/Gallery";

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Contacts' component={Contacts} />
            <Tab.Screen name='Gallery' component={Gallery} />
        </Tab.Navigator>
    )
}

export default Home;