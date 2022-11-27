import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
const Product = () => {
    return (
        <ScrollView>
            <View style={styles.textCont}>
                <Text style={styles.textHeader}>Add Product</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../../assets/images/banana.jpg")} />
                <TouchableOpacity style={styles.imagePicker}>
                    <Icon style={{ color: 'white' }} name='camera' />
                </TouchableOpacity>
            </View>
            <View style={styles.label}>
                <Text style={{ textDecorationLine: 'underline' }}>Title</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder='Title'
                name='title'
            />
            <View style={styles.label}>
                <Text style={{ textDecorationLine: 'underline' }}>Descriptions</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder='Title'
                name='title'
            />
            <View style={styles.label}>
                <Text style={{ textDecorationLine: 'underline' }}>Categories</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder='Title'
                name='title'
            />
            <View style={styles.label}>
                <Text style={{ textDecorationLine: 'underline' }}>CountInStock</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder='CountInStock'
                name='CountInStock'
                keyboardType={'numeric'}
            />
            <View style={styles.label}>
                <Text style={{ textDecorationLine: 'underline' }}>Price</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder='Price'
                name='price'
                keyboardType={'numeric'}
            />
            <View style={styles.label}>
                <Text style={{ textDecorationLine: 'underline' }}>Address</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder='Address'
                name='Address'
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity >
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default Product

const styles = StyleSheet.create({
    textCont: {
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "green",
        marginTop: 15
    },
    textHeader: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderStyle: 'solid',
        borderWidth: 8,
        padding: 0,
        justifyContent: 'center',
        borderRadius: 100,
        borderColor: '#E0E0E0',
        elevation: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    imagePicker: {
        position: 'absolute',
        right: 5,
        bottom: 5,
        backgroundColor: 'grey',
        padding: 8,
        borderRadius: 100,
        elevation: 20,
    },
    input: {
        width: '80%',
        height: 60,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
        padding: 10,
        borderWidth: 2,
        borderColor: '#8cd98c',
    },
    label: {
        width: '80%',
        marginTop: 10,
        marginLeft: 20
    },
    buttonContainer: {
        width: '80%',
        marginBottom: 80,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#8cd98c',
        fontSize:18,
        fontWeight:"bold"
    },
})