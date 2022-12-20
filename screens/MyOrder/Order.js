import { useNavigation } from "@react-navigation/native"
import axios from "axios"
import { useState, useEffect } from "react"
import { View, Text, Image, StyleSheet,ScrollView } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useSelector } from "react-redux"
import AsyncStorage from "@react-native-async-storage/async-storage"
const Order = () => {
    const Navigation = useNavigation()
    // const user = useSelector((state) => state.user.currentUser)
    const [order, setOrder] = useState([])
    
    //  console.log(user);

    const getOrder = async () => {
        try {
            const data = await AsyncStorage.getItem("umwezi")
            const user = JSON.parse(data)
            // console.log(user.token);
            const config = {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": user.token
                }
            }
            const res = await axios.get(`https://umwezi-farming-api.vercel.app/order/user/${user.user._id}`, config)
            // console.log(res.data);
            setOrder(res.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        getOrder()
    }, [order])
    return (
        <ScrollView style={styles.container}>

            <View>
                <View style={styles.viewCont}>
                    <Text style={styles.title}>My Order</Text>
                    {/* <Text style={styles.title}>{order.length}</Text> */}
                </View>


                {order ? order.map((item) => (
                    // <View style={styles.cardContainer} key={item._id}>
                        <View style={styles.card} key={item._id}>
                            {/* <Text style={styles.text1}>apple</Text> */}
                            <Text style={styles.text1}>{item.Products.map((pro) => (
                                <View key={item._id}>
                                    <Text style={styles.text}>Product: {pro.productId}</Text>
                                    <Text style={styles.text}>Quantity: {pro.Quantity}</Text>
                                </View>
                            ))}</Text>
                            <Text style={styles.text}>Status: {item.Status}</Text>
                            <Text style={styles.text}>Amount: $ {item.Amount} </Text>

                        </View>
                    // </View>
                    )) :
                    <View style={styles.ordermessage}>
                        <Text style={{ fontSize: 15 }}>no Records Found!</Text>
                        <TouchableOpacity onPress={() => Navigation.navigate("Recommanded")}>
                            <Text style={styles.textbutton}>Shop Now</Text>
                        </TouchableOpacity>
                    </View>
                }

            </View>
        </ScrollView>
    )
}
export default Order

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    },
    ordermessage: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: "100%"
    },
    textbutton: {
        color: "red",
        marginTop: 12,
        fontWeight: "bold"
    },
    cardContainer: {
        flex: 1,
    },
    card: {
        marginTop: 10,
        marginRight: 50,
        backgroundColor: "white",
        width: "90%",
        height: 150,
        marginHorizontal: 12,
        borderRadius: 15,
        textAlign: "center",
        justifyContent:"center",
        paddingHorizontal:10,
        marginVertical: 50,
    },
    viewCont: {
        width: "100%",
        marginBottom: 50,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        marginTop: 50,
    },
    text:{
        fontSize: 18,
    },
    title:{
        fontSize: 18,
        color:"green"
    }
})