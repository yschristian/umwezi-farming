import React from "react";
import {Text} from "react-native"

const SearchedProduct = ({ item }) => {
    const getItem = (item) => {
        // Function for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.title);
    };
    return (
        // Flat List Item
        <Text
            style={styles.itemStyle}
            onPress={() => getItem(item)}>
            {item.id}
            {'.'}
            {item.title.toUpperCase()}
        </Text>
    )
}