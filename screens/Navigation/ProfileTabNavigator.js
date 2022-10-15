import { React } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Feather, Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import Home from "../Home/Home";
import { StyleSheet } from "react-native";
import Register from "../User/Register/Register"
import UserProfile from "../User/Profile/UserProfile";

const Tab = createBottomTabNavigator()

const ProfileTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={'Home'}
                component={Home}
                options={{
                    tabBarIcon: (color) => (
                        <FontAwesome name="home" style={styles.icon} size={28} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name={'Cart'}
                component={UserProfile}
                options={{
                    tabBarIcon: (color) => (
                        <AntDesign name="shoppingcart" style={styles.icon} size={28} color={color} />
                    )
                }}
            />
            
            <Tab.Screen
                name={'Profile'}
                component={UserProfile}
                options={{
                    tabBarIcon: (color) => (
                        <Ionicons style={styles.icon} name="person" size={28} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name={'Settings'}
                component={UserProfile}
                options={{
                    tabBarIcon: (color) => (
                        <Feather name="settings" style={styles.icon} size={28} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name={'Add User'}
                component={Register}
                options={{
                    tabBarIcon: (color) => (
                        <Entypo name="add-user" style={styles.icon} size={28} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default ProfileTabNavigator

const styles = StyleSheet.create({
    icon: {
        color: "green"
    }
})
