import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { calcTotal } from "../../utils/total"
import { increment } from "../../Redux/CartRedux";

const CartItems = ({ navigation }) => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const amount = calcTotal(cart.cart)
    //  console.log(amount)
    return (
        <View style={styles.container} >
            <View style={styles.orderTotal}>
                <Text style={styles.total}>You save total of:{amount}  total on this order</Text>
            </View>
            <FlatList
                data={cart.cart}
                keyExtractor={(item, index) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.preCont}>
                        <View style={styles.listItem}>
                            <View style={styles.body}>
                                <View style={styles.rightContainer} >
                                    <View style={styles.textComp}>
                                        <Text style={styles.text}>{item.Title}</Text>
                                    </View>
                                    <View style={styles.textComp}>
                                        <Text style={styles.text}>$ {item.price * item.quantity}</Text>
                                    </View>
                                    <View style={styles.textComp}>
                                        <Text style={styles.text}>{item.Categories}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.leftContainer}>
                                <Image
                                    resizeMode='contain'
                                    style={styles.image}
                                    source={{
                                        uri: item.Image
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.iconCont}>
                            <TouchableOpacity onPress={() => dispatch(increment(item._id))}>
                                <Entypo name="plus" size={24} color="black" />
                            </TouchableOpacity>
                            <Text style={styles.quantity}>{item.quantity}</Text>
                            <TouchableOpacity >
                                <AntDesign name="minus" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
            <View style={styles.checkoutButton}>
                <TouchableOpacity style={styles.checkoutContainer} onPress={() => navigation.navigate("Payment", {amount:amount, cart:cart.cart })}>
                    <Text style={styles.checkout}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartItems

const styles = StyleSheet.create({
    listItem: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    rightContainer: {
        marginRight: 180,
    },
    image: {
        width: 110,
        height: 150,
        backgroundColor: 'transparent',
    },
    listItem: {
        flexDirection: "row",
    },
    body: {
        margin: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    textComp: {
        paddingTop: 10
    },
    iconCont: {
        flexDirection: 'row',
        paddingVertical: 5,
        justifyContent: 'flex-end',
        marginRight: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold"
    },
    container: {
        // backgroundColor:"grey",
        borderRadius: 15,
        marginHorizontal: 12,
        borderHorizontal: 12,

    },
    preCont: {
        borderBottomColor: "green",
        borderBottomWidth: 1,

    },
    checkoutContainer: {
        bottom: 0,
        marginTop: 20,
        borderRadius: 8,
        marginHorizontal: 12,
        backgroundColor: "green",
        width: 100,
        height: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    checkout: {
        left: 2,
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    orderTotal: {
        marginTop: 20,
        marginLeft: 10
    },
    total: {
        fontSize: 15,
        fontWeight: "bold"
    },
    quantity: {
        fontSize: 18,
        justifyContent: "center",
        alignItems: "center"
    },
})