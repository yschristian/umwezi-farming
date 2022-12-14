import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Dimensions, FlatList, TouchableOpacity, Image, Text } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Recommanded from '../Product/Recommanded';


const Search = () => {
    const navigation = useNavigation()
    const [search, setSearch] = useState('');
    const [masterDataSource, setMasterDataSource] = useState([]);

    // console.log(filteredDataSource);
    // console.log(search);
    useEffect(() => {
        fetch('https://umwezi-farming-api.vercel.app/product/All')
            .then((response) => response.json())
            .then((responseJson) => {
                setMasterDataSource(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const searchFilterFunction = () => {
        if (search) {
            return masterDataSource.filter((product) => {
                const address = product.Address.toLowerCase().includes(search.toLowerCase())
                const title = product.Title.toLowerCase().includes(search.toLowerCase())
                return address || title
            })
        } else {
            return []
        }
    };


    return (
        <View style={styles.searchContainer}>
            <Ionicons name="search" size={24} color="black" style={styles.icon} />
            <TextInput
                style={styles.search}
                placeholder="serch here"
                value={search}
                onChangeText={(text) => setSearch(text)}
                onClear={(text) => setSearch('')}
            />
            <FlatList
                numColumns={2}
                data={searchFilterFunction()}
                keyExtractor={(item, index) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.flatList} >
                        <Recommanded key={item._id} />
                    </View>

                )}
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
        borderRadius: 5
    },
    icon: {
        marginLeft: 10
    },
    flatList: {
        marginTop: 100,
    }
})