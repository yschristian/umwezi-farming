import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import fruits from "../assets/data/fruits"
import { useNavigation } from "@react-navigation/native";

const ProductList = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.viewCont}>
                <Text style={styles.recommanded}>Recommended Products</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Recommanded")}>
                    <Text style={styles.recommanded1}>View All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                numColumns={2}
                data={fruits}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Recommanded")}>
                        <View style={styles.cardContainer}>
                            <View style={styles.card} key={item.id}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: item.image }}
                                />
                                <Text style={styles.text1}>{item.title}</Text>
                                <Text style={styles.text}>$ {item.price}</Text>
                                <Ionicons name="add-circle-outline" style={styles.icon} size={30} color="green" />
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default ProductList

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
        width: "100%",
        marginBottom: 50,
        flexDirection: "row",
        justifyContent: "space-between",  
        paddingHorizontal:10,
    },
    recommanded: {
        fontSize: 18,
        color: "black",
        fontWeight:"bold"
    },
    recommanded1:{
        fontSize: 16,
        color: "green",
        fontWeight:"bold",
        textDecorationLine:'underline'
    }
})
