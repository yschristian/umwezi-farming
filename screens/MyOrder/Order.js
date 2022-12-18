import { useNavigation } from "@react-navigation/native"
import axios from "axios"
import { useState,useEffect } from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useSelector } from "react-redux"
const Order = () => {
    const Navigation = useNavigation()
    const user = useSelector((user)=> state.user)
    const [order, setOrder] = useState([])


    const getOrder = async() =>{
        try {
            const res = await axios.get("")
        } catch (error) {
            
        }
    }
    useEffect(() => {
        getOrder()
    }, [])
    return (
        <View style={styles.container}>

            <View>
                <View style={styles.viewCont}>
                    <Text>My Order</Text>
                </View>


                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.text1}>apple</Text>
                        <Text style={styles.text1}>Quantity</Text>
                        <Text style={styles.text1}>Status</Text>
                        <Text style={styles.text}>$23 </Text>

                    </View>
                </View>

            </View>
            <View style={styles.ordermessage}>
                <Text style={{ fontSize: 15 }}>no Records Found!</Text>
                <TouchableOpacity onPress={() => Navigation.navigate("Recommanded")}>
                    <Text style={styles.textbutton}>Shop Now</Text>
                </TouchableOpacity>
            </View>
        </View>
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
        marginTop: 15,
        // marginBottom: 50,
        backgroundColor: "white",
        width: "100%",
        height: 200,
        marginHorizontal: 12,
        borderRadius: 15,
        // marginVertical: 50,
    },
    viewCont: {
        width: "100%",
        marginBottom: 50,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        marginTop: 50,
    },
})