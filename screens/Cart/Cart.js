
import React from "react";
import {View ,Text,FlatList} from "react-native"
import fruits from "../../assets/data/fruits";
import CartItems from "./CartItem";

const Cart = () =>{
    return(
           <View>
            <FlatList 
                data={fruits}
                renderItem={({item})=><CartItems fruit ={item}/>}
            />
        </View>
    )
}
export default Cart
