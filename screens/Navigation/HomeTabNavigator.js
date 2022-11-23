import { React } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
import Home from "../Home/Home";
import Login from "../User/Login/Login";
import { StyleSheet } from "react-native";
import CartItems from "../Cart/CartItem";

const Tab = createBottomTabNavigator()

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={'Home'}
                component={Home}
                options={{
                    tabBarIcon: (color) => (
                        <FontAwesome style={styles.icon} name="home" size={28} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name={'Cart'}
                component={CartItems}
                options={{
                    tabBarIcon: (color) => (
                        <AntDesign style={styles.icon} name="shoppingcart" size={28} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name={'Login'}
                component={Login}
                options={{
                    tabBarIcon: (color) => (
                        <Ionicons style={styles.icon} name="person" size={28} color={color} />
                    )
                }}
            />
            
        </Tab.Navigator>
    )
}

export default HomeTabNavigator

const styles = StyleSheet.create({
    icon: {
        color: "green"
    }
})