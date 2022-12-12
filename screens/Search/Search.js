import React ,{useState}from 'react';
import { View, TextInput, StyleSheet, Dimensions } from "react-native"
import { Ionicons } from '@expo/vector-icons';

const Search = () => {
    const [products ,setProducts] = useState('')
    
    return (
        <View style={styles.searchContainer}>
            <Ionicons name="search" size={24} color="black" style={styles.icon}/>
            <TextInput
                style={styles.search}
                placeholder="serch here"
            />
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    search: {
        paddingHorizontal: 10,
    },
    searchContainer: {
        borderWidth: 2,
        borderColor: '#8cd98c',
        marginTop: 50,
        width: "100%",
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: 20,
        zIndex: 100,
        width: Dimensions.get('screen').width - 20,
        marginLeft: 10,
        borderRadius:5
    },
    icon:{
        marginLeft:10
    }
})