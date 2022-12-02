import React from 'react';
import { Text,View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';


const CartIcon = () => {
  const  cartItems  = useSelector(state => state.cart)
  console.log(cartItems.length);
  return (
    <>
      {cartItems.length ? (
        <View style={styles.badge}>
          <Text style={styles.text}>{cartItems.length}</Text>
        </View>
    ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  badge: {
    width: 10,
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    top: -14,
    right: -50,
  },
  text: {
    fontSize: 20,
    width: 100,
    fontWeight: 'bold',
    color:"blue"
  },
});

export default CartIcon;
