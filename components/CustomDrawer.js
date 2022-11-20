import {View, Text ,Image,ImageBackground ,StyleSheet, TouchableOpacity} from "react-native"
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import { AntDesign,Ionicons } from '@expo/vector-icons';
 
const CustomDrawer =(props) =>{
    return(
        <View style={{flex:1}}>
             <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:"green"}}>
                <ImageBackground
                 source={require("../assets/images/avatar2.jpg")}
                 style={{padding:20}}
                 >
                    <Image 
                        source={require("../assets/images/apple.jpg")}
                        style={{height:80,width:80, borderRadius: 40, marginBottom: 10}}
                        />
                      <Text style={{color:"white", fontSize:18}}>Chris Farmer</Text>  
                </ImageBackground>
                <View style={{flex:1, backgroundColor:"white", paddingTop:10}}>
                <DrawerItemList {...props}/>
                </View>
            </DrawerContentScrollView>
            <View style={{padding:20,borderTopWidth:1, borderTopColor:"#ccc"}}>
                <TouchableOpacity style={{paddingVertical:15}}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                    <AntDesign name="sharealt" size={24} color="black" />
                    <Text style={{fontSize: 15, marginLeft:5}}>Tell a Friend</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingVertical:15}}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Ionicons name="exit-outline" size={24} color="black" />
                    <Text style={{fontSize: 15, marginLeft:5}}>Log Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
      
    )
}
export default CustomDrawer