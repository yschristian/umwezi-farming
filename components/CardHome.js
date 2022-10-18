import React from "react";
import {Text, View, StyleSheet} from "react-native"
import { AntDesign ,Entypo,MaterialCommunityIcons} from '@expo/vector-icons';

const CardHome = () =>{
    return(
        <View style={styles.container}>
             <View style ={ [styles.wrapper,styles.shadowProp]}>
                 <AntDesign style={styles.icon} name="shoppingcart" size={30} color="green" />
                 <Text style={styles.text}>Shop</Text>
             </View>
             <View style ={ [styles.wrapper,styles.shadowProp]}>
                 <AntDesign style={styles.icon} name="shoppingcart" size={30} color="green" />
                 <Text style={styles.text}>Shop</Text>
             </View>
             <View style ={ [styles.wrapper,styles.shadowProp]}>
                 <MaterialCommunityIcons style={styles.icon} name="weather-fog" size={30} color="green" />
                 <Text style={styles.text}>Weather</Text>
             </View>
             <View style ={ [styles.wrapper,styles.shadowProp]}>
                 <Entypo style={styles.icon} name="news" size={30} color="green" />
                 <Text style={styles.text}>news</Text>
             </View>
             <View style ={ [styles.wrapper,styles.shadowProp]}>
                 <Entypo style={styles.icon} name="news" size={30} color="green" />
                 <Text style={styles.text}>news</Text>
             </View>
             <View style ={ [styles.wrapper,styles.shadowProp]}>
                 <Entypo style={styles.icon} name="news" size={30} color="green" />
                 <Text style={styles.text}>news</Text>
             </View>
             
             
             
        </View>
    )
}
export default CardHome

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        marginHorizontal: 20,
        flexDirection:"row",
        flexWrap:"wrap"
    },
    wrapper:{
        backgroundColor:"white",
        width:100,
        height:70,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:12,
        paddingVertical: 8,
        paddingHorizontal:8,
        marginVertical: 10,
        marginHorizontal: 10

    },
    text:{
        fontSize:15,
        fontWeight:"600",
    },
    shadowProp: {
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
})