import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Dimensions, FlatList,TouchableOpacity,Image ,Text} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Recommanded from '../Product/Recommanded';


const Search = () => {
    const navigation = useNavigation()
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
     
    console.log(filteredDataSource);
    console.log(search);
    useEffect(() => {
        fetch('https://umwezi-farming-api.vercel.app/product/All')
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredDataSource(responseJson);
                setMasterDataSource(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };


    return (
        <View style={styles.searchContainer}>
            <Ionicons name="search" size={24} color="black" style={styles.icon} />
            <TextInput
                style={styles.search}
                placeholder="serch here"
                value={search}
                onChangeText={(text) => searchFilterFunction(text)}
                onClear={(text) => searchFilterFunction('')}
            />
             <FlatList
                numColumns={2}
                data={filteredDataSource}
                keyExtractor={(item, index) => item._id}
                renderItem={({ item }) => (
                    <Recommanded />
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
    }
})