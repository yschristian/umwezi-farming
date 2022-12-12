import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeTabNavigator from "./HomeTabNavigator";
import Register from "../User/Register/Register"
import ProfileTabNavigator from "./ProfileTabNavigator";
import AuthStack from "./AuthStack";
import Recommanded from "../Product/Recommanded";
import ProductItem from "../Product/ProductItem";
import Checkout from "../Payment/Checkout";
import Login from "../User/Login/Login";
import UserProfile from "../User/Profile/UserProfile";
import Search from "../Search/Search";
import Payment from "../Payment/Payment";

const Stack = createStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen
                    name={'AuthStack'}
                    component={AuthStack}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name={"Register"}
                    component={Register}
                    options={{
                        title: "Signup"
                    }}
                />

                <Stack.Screen
                    name={"Login"}
                    component={Login}
                    options={{
                        title: "Login"
                    }}
                />
                <Stack.Screen
                    name={"Search"}
                    component={Search}
                    options={{
                        title: "Search"
                    }}
                />
                <Stack.Screen
                    name={"Profile"}
                    component={UserProfile}
                // options={{
                //     headerShown: false
                // }}
                />
                <Stack.Screen
                    name={'Recommanded'}
                    component={Recommanded}
                />
                <Stack.Screen
                    name={'ProductItem'}
                    component={ProductItem}
                />
                <Stack.Screen
                    name={'checkout'}
                    component={Checkout}
                />
                <Stack.Screen
                    name={'Payment'}
                    component={Payment}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router