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

const Tab = createBottomTabNavigator()

const HomeTabNavigator = () => {
    const navigation = useNavigation()
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
                                <Ionicons name="search" size={24} color="black" onPress={() => navigation.navigate('Search')}/>
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
                                <Ionicons name="search" size={24} color="black" onPress={() => navigation.navigate('Search')}/>
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
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="settings" style={styles.icon} size={28} color={color} />
                    ),
                    headerLeft: () => (
                        <View>
                            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => <AuthStack />}>
                                <FontAwesome name="bars" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                    ),
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