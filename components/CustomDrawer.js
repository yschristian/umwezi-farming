import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from "react-native"
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const CustomDrawer = (props) => {
    const navigation= useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: "green" }}>
                <ImageBackground
                    source={require("../assets/images/avatar2.jpg")}
                    style={{ padding: 20 }}
                >
                    <Image
                        source={require("../assets/images/apple.jpg")}
                        style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
                    />
                    <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                        <Text style={{ color: "black", fontSize: 18 }}>Login/Register</Text>
                    </TouchableOpacity>

                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: "white", paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
                <TouchableOpacity style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <AntDesign name="sharealt" size={24} color="black" />
                        <Text style={{ fontSize: 15, marginLeft: 5 }}>Tell a Friend</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Ionicons name="exit-outline" size={24} color="black" />
                        <Text style={{ fontSize: 15, marginLeft: 5 }}>Log Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    )
}
export default CustomDrawer