import {View, Text ,Image,ImageBackground ,StyleSheet, TouchableOpacity} from "react-native"
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
 
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
                    <View>
                    <Text>Our custom text</Text>
                    </View>
                </TouchableOpacity>
               
            </View>
        </View>
      
    )
}
export default CustomDrawer