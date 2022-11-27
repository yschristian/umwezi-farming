import { useNavigation } from "@react-navigation/native"
import { View, Text, Image, StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
const Order = () => {
    const Navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.ordermessage}>

                <Text style={{ fontSize: 15 }}>no Records Found!</Text>
                <TouchableOpacity onPress={Navigation.navigate("Recommanded")}>
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
    }
})