import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeTabNavigator from "./HomeTabNavigator";
import Request from "../User/Request/Request";
import ProfileTabNavigator from "./ProfileTabNavigator";
import AuthStack from "./AuthStack";
import Recommanded from "../Product/Recommanded";

const Stack = createStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
             <Stack.Navigator>
            
                <Stack.Screen
                    name={"Home"}
                    component={HomeTabNavigator}
                    options={{
                        headerShown: false
                    }}
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
                    component={ProfileTabNavigator}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                name={'Recommanded'}
                component={Recommanded}
                 />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router