import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import axios from "axios";


const Recommanded = () => {
    const navigation = useNavigation()
    const [products, setProducts] = useState([])
    
    const getProduct = async () => {
        try {
            const res = await axios.get("https://umwezi-farming-api.vercel.app/product/All")
            setProducts(res.data);
        } catch (error) {
            console.log({ "error": error });
        }
    }
    useEffect(() => {
        getProduct()
    }, [])
    // console.log(products);
    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                data={products}
                keyExtractor={(item, index) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        <TouchableOpacity onPress={
                            () => navigation.navigate('ProductItem', { 
                            id:item._id
                            })}>
                            <View style={styles.card} key={item._id}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: item.Image }}
                                />
                                <Text style={styles.text1}>{item.Title}</Text>
                                <Text style={styles.text}>$ {item.price}</Text>
                                {/* <Text style={styles.text}>{item.inStock}</Text> */}
                                <TouchableOpacity onPress={() => navigation.navigate("Cart", { id: item.id, image: item.Image, price: item.price })}>
                                    <Ionicons name="add-circle-outline" style={styles.icon} size={30} color="green" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

export default Recommanded

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        // marginHorizontal: 20,
        // flexDirection: "row",
        // flexWrap: "wrap",
        // backgroundColor:"blue"
    },
    cardContainer: {
        flex: 1,
        flexDirection: "row",
    },
    card: {
        marginTop: 15,
        marginBottom: 50,
        backgroundColor: "white",
        width: 170,
        height: 200,
        marginHorizontal: 12,
        borderRadius: 15,
        // marginVertical: 50,
    },
    image: {
        width: 100,
        height: 100,
        top: -30,
        marginHorizontal: 40,

    },
    text: {
        marginLeft: 30,
        fontSize: 18,
        fontWeight: "bold"
    },
    text1: {
        marginLeft: 30,
        fontSize: 18,
    },
    icon: {
        left: 130,
        top: 0
    },

    viewCont: {

        width: 200,
        marginBottom: 50,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    recommanded: {
        fontSize: 15,
        color: "green",
        marginRight: 60
    }
})
