import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/CartRedux";
import { publicRequest } from "../../RequestMethod";

const ProductItem = ({ route,navigation }) => {
    const id = route.params.id
    const [item, setitem] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const getOne = async () => {
            try {
                const res = await publicRequest.get(`/product/get/${id}`)
                setitem(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getOne()
    }, [])
    //  console.log(item);
    const handleClick = () =>{
     dispatch(addProduct(item))
     navigation.navigate("Cart")
    //  console.log(v);
    }
    // console.log(item);
    return (
        <View style={styles.container} key={item?._id}>
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: item?.Image }}
                />
                <View style={styles.card}>
                    <Text style={styles.text1}>{item?.Address}</Text>
                    <Text style={styles.text1}>{item?.Title}</Text>
                    <Text style={styles.text}>$ {item?.price}</Text>
                    <Text style={styles.text2}>{item?.inStock}</Text>
                </View>
                <View style={styles.desc}>
                    <Text style={styles.text1}>{item?.Description}</Text>
                </View>
                <View style={styles.addtocart}>
                    <TouchableOpacity onPress={handleClick}>
                        <Text style={styles.textadd}>AddToCart</Text>
                    </TouchableOpacity>
                </View>
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
        flexDirection: "row"
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
        marginLeft: 100
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
    text2: {
        marginLeft: 30,
        fontSize: 15,
        color: "green"
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
    },
    desc: {
        marginTop: 20
    },
    addtocart: {
        backgroundColor: "darkgreen",
        marginTop: 30,
        alignItems:"center",
        justifyContent:"center",
        width:100,
        height:50,
        marginLeft: 20,
    },
    textadd:{
        color:"white",
        fontSize: 18,
    }
})
