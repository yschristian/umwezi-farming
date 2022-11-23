import React from "react";
import { View, Text, Image, StyleSheet } from "react-native"

const ProductItem = ({route}) => {

    const image = route.params.image
    const price = route.params.price
    const title = route.params.title
    // console.log(image,price,title);

    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                 source={{uri: image}}
                 />
            <View style={styles.card}>
                 <Text style={styles.text1}>{title}</Text>
                 <Text style={styles.text}>$ {price}</Text>
                 <Text style={styles.text1}>available Quantity: 12kg</Text>
             </View>
        </View>
    )
}

export default ProductItem

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
        marginTop: 20,
        flexDirection:"row"
        // marginBottom: 50,
        // backgroundColor: "white",
        // width: "100%",
        // height: 200,
        // marginLeft:10,
        // marginRight:3,
        // borderRadius: 15,
        // // marginVertical: 50,
    },
    image: {
        width: 200,
        height: 200,
        // alignContent:"center",
        // justifyContent:"center",
        marginLeft:100
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
