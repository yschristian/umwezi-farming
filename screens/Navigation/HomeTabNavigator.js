import { React } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, AntDesign, Ionicons,Feather } from '@expo/vector-icons';
import Home from "../Home/Home";
import { StyleSheet } from "react-native";
import CartItems from "../Cart/CartItem";
import Request from "../User/Request/Request";
import {View} from "react-native"
import CartIcon from "../Cart/CartIcon.js";

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
                    ),
                }}
            />

            <Tab.Screen
                name={'Cart'}
                component={CartItems}
                options={{
                    tabBarIcon: (color) => (
                    <View>
                        <CartIcon/>
                        <AntDesign style={styles.icon} name="shoppingcart" size={28} color={color} />
                    </View>
                    )
                }}
            />

            <Tab.Screen
                name={'Request'}
                component={Request}
                options={{
                    tabBarIcon: (color) => (
                        <Ionicons style={styles.icon} name="person" size={28} color={color} />
                    )
                }}
            />
             <Tab.Screen
                name={'Settings'}
                component={Home}
                options={{
                    tabBarIcon: (color) => (
                        <Feather name="settings" style={styles.icon} size={28} color={color} />
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