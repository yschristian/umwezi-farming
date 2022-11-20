import React from "react";
import {View, Text ,Image ,StyleSheet} from "react-native"
import { Ionicons } from '@expo/vector-icons';



const ProductList = () =>{
    return(
        <View style={styles.container}>
            {/* <Text>Recommended Products</Text> */}
             <View style={styles.card}>
                <Image 
                style={styles.image}
                 source={{uri:"https://static.vecteezy.com/system/resources/previews/001/937/723/original/rice-package-mockup-thailand-food-products-illustration-vector.jpg"}}
                 />
                 <Text style={styles.text1}>Rice</Text>
                 <Text style={styles.text}>$ 100</Text>
                 <Ionicons name="add-circle-outline" style={styles.icon} size={30} color="green" />
             </View>
             <View style={styles.card}>
                <Image 
                style={styles.image}
                 source={{uri:"https://www.collinsdictionary.com/images/full/apple_158989157.jpg"}}
                 />
                 <Text style={styles.text1}>Fruits</Text>
                 <Text style={styles.text}>$ 20</Text>
                 <Ionicons name="add-circle-outline" style={styles.icon} size={30} color="green" />
             </View>
             <View style={styles.card}>
                <Image 
                style={styles.image}
                 source={{uri:"https://www.wheafree.com/wp-content/uploads/2020/11/maize-floor-1.jpg"}}
                 />
                 <Text style={styles.text1}>Fruits</Text>
                 <Text style={styles.text}>$ 20</Text>
                 <Ionicons name="add-circle-outline" style={styles.icon} size={30} color="green" />
             </View>
             <View style={styles.card}>
                <Image 
                style={styles.image}
                 source={{uri:"https://www.barrypackaging.com/media/wysiwyg/custom-paper-potato-bags-ireland.jpg"}}
                 />
                 <Text style={styles.text1}>Irish Potato</Text>
                 <Text style={styles.text}>$ 20</Text>
                 <Ionicons name="add-circle-outline" style={styles.icon} size={30} color="green" />
             </View>
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:50,
        // marginHorizontal: 20,
        flexDirection:"row",
        flexWrap:"wrap"
    },
    card:{
        marginTop:15,
        marginBottom:50,
        backgroundColor:"white",
        width:172,
        height:200,
        marginHorizontal: 12,
        borderRadius:15,
        // marginVertical: 50,
    },
    image:{
        width:100,
        height:100,
        top: -30,
        marginHorizontal:40,
        
    },
    text:{
        marginLeft:30,
        fontSize:18,
        fontWeight:"bold"
    },
    text1:{
        marginLeft:30,
        fontSize:18,
    },
    icon:{
        left:130,
        top: 0
    },


})
