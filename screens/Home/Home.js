import React from "react";
import { Image, View,Dimensions,StyleSheet } from "react-native";
import Swiper from "react-native-swiper"
const { width } = Dimensions.get('window');


const Home = () =>{
    return(
    <View style={styles.container}>
        <View style={styles.swiper}>
           <Swiper
            style={{ height: width / 2 }}
            showButtons={false}
            autoplay={true}
            autoplayTimeout={5}
           >
            <Image
             style={styles.image}
              source={require("../../assets/images/apple.jpg")}
              resizeMode='contain'
             /> 
             <Image
             style={styles.image}
              source={require("../../assets/images/banana.jpg")}
              resizeMode='contain'
             /> 
             <Image
             style={styles.image}
              source={require("../../assets/images/bell-peppers_1.jpg")}
              resizeMode='contain'
             /> 
           </Swiper>
           
        </View>
    </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
    },
    swiper: {
      width: width,
      alignItems: 'center',
      marginTop: 10,
    },
    image: {
      height: width / 2,
      width: width - 40,
      borderRadius: 10,
      marginHorizontal: 20,
    },
  });