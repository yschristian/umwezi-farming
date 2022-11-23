import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';


const CartItems = () => {
    const [quantity, setQuantity] = useState(0)
    //const image = route.params.image
    //const price = route.params.price
    // console.log(image, price);
    // const total = price * 2
    const handleQuantity =(type)=>{
        if(type==="dec"){
          quantity >= 1 && setQuantity(quantity - 1)
        }else{
            setQuantity(quantity + 1)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.orderTotal}>
                <Text style={styles.total}>You save total of: total on this order</Text>
            </View>
            <View style={styles.preCont}>
                <View style={styles.listItem}>
                    <View style={styles.body}>
                        <View style={styles.rightContainer} >
                            <View style={styles.textComp}>
                                <Text style={styles.text}>apple</Text>
                            </View>
                            <View style={styles.textComp}>
                                <Text style={styles.text}>$ 12</Text>
                            </View>
                            <View style={styles.textComp}>
                                <Text style={styles.text}>size:50kg</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.leftContainer}>
                        <Image
                            resizeMode='contain'
                            style={styles.image}
                            source={{
                                uri: "https://www.collinsdictionary.com/images/full/apple_158989157.jpg"
                            }}
                        />
                    </View>
                </View>
                <View style={styles.iconCont}>
                    <TouchableOpacity onPress={()=> handleQuantity("inc")}>
                        <Entypo name="plus" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{quantity}</Text>
                    <TouchableOpacity onPress={()=> handleQuantity('dec')}>
                    <AntDesign name="minus" size={24} color="black" />
                    </TouchableOpacity>
                    
                </View>
            </View>
            {/* <View style={styles.preCont}>
                <View style={styles.listItem}>
                    <View style={styles.body}>
                        <View style={styles.rightContainer} >
                            <View style={styles.textComp}>
                                <Text style={styles.text}>apple</Text>
                            </View>
                            <View style={styles.textComp}>
                                <Text style={styles.text}>$100</Text>
                            </View>
                            <View style={styles.textComp}>
                                <Text style={styles.text}>size:50kg</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.leftContainer}>
                        <Image
                            resizeMode='contain'
                            style={styles.image}
                            source={{
                                uri: "https://www.collinsdictionary.com/images/full/apple_158989157.jpg"
                            }}
                        />
                    </View>
                </View>
                <View style={styles.iconCont}>
                    <Entypo name="plus" size={24} color="black" />
                    <Text>Quantity </Text>
                    <AntDesign name="minus" size={24} color="black" />
                </View>
            </View> */}
            <View>
                <TouchableOpacity style={styles.checkoutContainer}>
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
    }


})