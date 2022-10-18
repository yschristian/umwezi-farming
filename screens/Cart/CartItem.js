import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import fruits from "../../assets/data/fruits";

const CartItems = ({props}) => {
    const fruit = props
    console.log(fruit);
    return (
        <View style={styles.container}>
            <View style={styles.preCont}>
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
                            {/* <View style={styles.textComp}>
                            <Text>money</Text>
                        </View> */}
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
            </View>
            <View style={styles.preCont}>
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
                            {/* <View style={styles.textComp}>
                            <Text>money</Text>
                        </View> */}
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

    }


})