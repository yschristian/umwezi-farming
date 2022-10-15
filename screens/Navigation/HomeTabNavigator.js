import {React} from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome,AntDesign,Ionicons} from '@expo/vector-icons';

import Home from "../Home/Home";
import Login from "../User/Login/Login";

const Tab = createBottomTabNavigator()

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator >
            <Tab.Screen
                name={'Home'}
                component={Home}
                options={{
                    tabBarIcon: (color) => (
                        <FontAwesome name="home" size={28} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name={'Cart'}
                component={Home}
                options={{
                    tabBarIcon: (color) => (
                        <AntDesign name="shoppingcart" size={28} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name={'Login'}
                component={Login}
                options={{
                    tabBarIcon: (color) => (
                        <Ionicons name="person" size={28} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeTabNavigator

