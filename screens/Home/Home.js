import React, { useState,useEffect } from "react";
import { Image, View,Dimensions,StyleSheet ,ScrollView} from "react-native";
import Swiper from "react-native-swiper"
import CardHome from "../../components/CardHome";
import ProductList from "../../components/ProductList";
const { width } = Dimensions.get('window');


const Home = () =>{
  const [images, setImages] =useState([])

  useEffect(() => {
    setImages([
        //  "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
         "https://domf5oio6qrcr.cloudfront.net/medialibrary/6372/202ebeef-6657-44ec-8fff-28352e1f5999.jpg"
    ])
    return () => {
       setImages([])
    }
  }, [])
    return(
    <ScrollView style={styles.container}>
        <View style={styles.swiper}>
           {/* <Swiper
            style={{ height: width / 2 }}
            showButtons={false}
            autoplay={true}
            horizontal={false}
            autoplayTimeout={5}
           > */}
            {images.map((item) => (
             <Image
              style={styles.image}
              key={item}
              source={{ uri: item }}
              resizeMode='contain'
            />
          ))}
           {/* </Swiper> */}
           
        </View>
        <CardHome/>
        <ProductList/>
    </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
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