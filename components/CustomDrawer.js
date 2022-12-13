import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from "react-native"
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Redux/apiCalls/userActions";



const CustomDrawer = (props) => {
    const user = useSelector((state)=> state.user.currentUser)
     console.log(user);
     const dispatch = useDispatch()
    const navigation= useNavigation()
    const logout = ()=>{
        logoutUser(dispatch)
        navigation.navigate("Login")
    }
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: "green" }}>
                <ImageBackground
                    source={require("../assets/images/avatar2.jpg")}
                    style={{ padding: 20 }}
                >
                    <Image
                        source={{ uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
                        style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
                    />
                     {user ? <Text style={{color:"blue",fontSize: 18}}>Welcome: {user.user.username} </Text> : <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                        <Text style={{ color: "black", fontSize: 18 }}>Login/Register</Text>
                    </TouchableOpacity>} 
                    {/* <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                        <Text style={{ color: "black", fontSize: 18 }}>Login/Register</Text>
                    </TouchableOpacity> */}

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
                
                <TouchableOpacity style={{ paddingVertical: 15 }} onPress={logout}>
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
