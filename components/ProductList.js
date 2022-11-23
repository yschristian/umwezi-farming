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
                    <Text style={styles.recommanded}>View All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={fruits}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=> navigation.navigate('ProductItem',{title:item.title,price:item.price,image:item.image})}>
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

            {/* <View style={styles.card}>
                <Image 
                style={styles.image}
                 source={{uri:"https://www.collinsdictionary.com/images/full/apple_158989157.jpg"}}
                 />
                 <Text style={styles.text1}>Fruits</Text>
                 <Text style={styles.text}>$ 20</Text>
                 <Ionicons name="add-circle-outline" style={styles.icon} size={30} color="green" />
             </View> */}
            {/* <View style={styles.card}>
                <Image 
                style={styles.image}
                 source={{uri:"https://www.wheafree.com/wp-content/uploads/2020/11/maize-floor-1.jpg"}}
                 />
                 <Text style={styles.text1}>Fruits</Text>
                 <Text style={styles.text}>$ 20</Text>
                 <Ionicons name="add-circle-outline" style={styles.icon} size={30} color="green" />
             </View> */}
            {/* <View style={styles.card}>
                <Image 
                style={styles.image}
                 source={{uri:"https://www.barrypackaging.com/media/wysiwyg/custom-paper-potato-bags-ireland.jpg"}}
                 />
                 <Text style={styles.text1}>Irish Potato</Text>
                 <Text style={styles.text}>$ 20</Text>
                 <Ionicons name="add-circle-outline" style={styles.icon} size={30} color="green" />
             </View> */}
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
