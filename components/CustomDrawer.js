import {View, Text ,Image,ImageBackground ,StyleSheet} from "react-native"
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
const CustomDrawer =(props) =>{
    return(
        <View style={{flex:1}}>
             <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:"green"}}>
                <ImageBackground />
            <DrawerItemList {...props}/>
            </DrawerContentScrollView>
            <View>
                <Text>Our custom text</Text>
            </View>
        </View>
      
    )
}
export default CustomDrawer