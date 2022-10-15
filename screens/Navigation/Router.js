import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeTabNavigator from "./HomeTabNavigator";
import Login from "../User/Login/Login"
import Request from "../User/Request/Request";
import UserProfile from "../User/Profile/UserProfile";

const Stack = createStackNavigator()

const Router = () => {
 return(
    <NavigationContainer>
    <Stack.Navigator>

        <Stack.Screen
            name={"Home"}
            component={HomeTabNavigator}
        />

        <Stack.Screen
            name={"Login"}
            component={Login}
        />

        <Stack.Screen
            name={"Request"}
            component={Request}
            options={{
                title: "Request"
            }}
        />
        
        <Stack.Screen
            name={"Profile"}
            component={UserProfile}
            options={{
                title: "User Dashbord"
            }}
        />

    </Stack.Navigator>
</NavigationContainer>
 )
}

export default Router