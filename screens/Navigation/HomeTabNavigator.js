import { React } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import Home from "../Home/Home";
import { StyleSheet } from "react-native";
import CartItems from "../Cart/CartItem";
import Request from "../User/Request/Request";
import { View, TouchableOpacity } from "react-native"
import CartIcon from "../Cart/CartIcon.js";
import AuthStack from "./AuthStack";
import { useNavigation } from "@react-navigation/native";
import UserProfile from "../User/Profile/UserProfile";
import ProfileTabNavigator from "./ProfileTabNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator()

const HomeTabNavigator = () => {
    const navigation = useNavigation()
    const handlerCheckOut = async () => {
        try {
            const res = await AsyncStorage.getItem("umwezi")
            if (res) {
                navigation.navigate("Profile")
            } else {
                navigation.navigate("Login")
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Tab.Navigator style={styles.icons}>
            <Tab.Screen
                name={'Home'}
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome style={styles.icon} name="home" size={28} color={color} />
                    ),
                    title: 'UMWEZI',
                    headerLeft: () => (
                        <View>
                            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => <AuthStack />}>
                                <FontAwesome name="bars" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerRight: () => (
                        <View style={styles.multipleIcon}>
                            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.navigate('Search')}>
                                <Ionicons name="search" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 10 }} >
                                <Ionicons name="notifications-outline" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.navigate('Cart')}>
                                <View>
                                    <CartIcon />
                                    <AntDesign name="shoppingcart" size={24} color="black" />
                                </View>
                            </TouchableOpacity>

                        </View>
                    )
                }}


            />

            <Tab.Screen
                name={'Cart'}
                component={CartItems}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View>
                            <CartIcon />
                            <AntDesign style={styles.icon} name="shoppingcart" size={28} color={color} />
                        </View>
                    ),
                    headerLeft: () => (
                        <View>
                            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => <AuthStack />}>
                                <FontAwesome name="bars" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerRight: () => (
                        <View style={styles.multipleIcon}>
                            <TouchableOpacity style={{ marginLeft: 10 }} >
                                <Ionicons name="search" size={24} color="black" onPress={() => navigation.navigate('Search')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 10 }} >
                                <Ionicons name="notifications-outline" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.navigate('Cart')}>
                                <View>
                                    <CartIcon />
                                    <AntDesign name="shoppingcart" size={24} color="black" />
                                </View>
                            </TouchableOpacity>

                        </View>
                    )
                }}
            />

            <Tab.Screen
                name={'Request'}
                component={Request}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons style={styles.icon} name="person" size={28} color={color} />
                    ),
                    headerLeft: () => (
                        <View>
                            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => <AuthStack />}>
                                <FontAwesome name="bars" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerRight: () => (
                        <View style={styles.multipleIcon}>
                            <TouchableOpacity style={{ marginLeft: 10 }} >
                                <Ionicons name="search" size={24} color="black" onPress={() => navigation.navigate('Search')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 10 }} >
                                <Ionicons name="notifications-outline" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.navigate('Cart')}>
                                <View>
                                    <CartIcon />
                                    <AntDesign name="shoppingcart" size={24} color="black" />
                                </View>
                            </TouchableOpacity>

                        </View>
                    )
                }}
            />

            <Tab.Screen

                name={'Settings'}
                style={styles.icons}
                component={ProfileTabNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TouchableOpacity onPress={handlerCheckOut}>
                            <Feather name="settings" style={styles.icon} size={28} color={color} />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => (
                        <View>
                            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => <AuthStack />}>
                                <FontAwesome name="bars" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerShown: false,
                }}
            />


        </Tab.Navigator>
    )
}

export default HomeTabNavigator

const styles = StyleSheet.create({
    icon: {
        color: "green",
    },
    multipleIcon: {
        flexDirection: "row",
        paddingHorizontal: 12,
        flex: 1,
        alignItems: "center"
    }
})