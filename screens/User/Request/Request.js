import React, { useState } from "react";
import { Text, View, ScrollView, TextInput, TouchableOpacity,Alert } from "react-native";
import { Picker as SelectPicker } from '@react-native-picker/picker'
import styles from "./styles";
import { addPartner } from "../../../Redux/apiCalls/partnerActions";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";


const Request = () => {

    const [Firstname, setFirstname] = useState("")
    const [Lastname, setLastname] = useState("")
    const [Description, setDescription] = useState("")
    const [Email, setEmail] = useState("")
    const [Option, setOption] = useState("");
    const dispatch = useDispatch()
    const navigation = useNavigation()
    // console.log(Email,work,FirstName,LastName,desc);

    const createPartner = () => {
        
        try {
            if(Option==='', Email==='', Firstname==='', Lastname==='', Description===''){
                Alert.alert('Please Provide All fields')
            }
            addPartner(dispatch, { Option, Email, Firstname, Lastname, Description })
            alert('Your Request submitted',navigation.navigate("Home"))
            
            setFirstname("")
            setLastname("")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <ScrollView style={styles.container}>
            <Text
                style={styles.text}
            >Partner Request
            </Text>
            <View style={styles.userRequest}>
                <TextInput
                    style={styles.requestText}
                    placeholder="FirstName"
                    onChangeText={(value) => setFirstname(value)}
                />
                <TextInput
                    style={styles.requestText}
                    placeholder="LastName"
                    onChangeText={(value) => setLastname(value)}
                />
                <TextInput
                    style={styles.requestText}
                    placeholder="Email"
                    onChangeText={(value) => setEmail(value)}
                />
                <TextInput
                    style={styles.requestText}
                    placeholder="Option"
                    onChangeText={(value) => setOption(value)}
                />
                {/* <Text style={styles.optionTitle}>What you do?</Text>
                <SelectPicker
                    selectedValue={Option}
                    // ChangeText={(itemValue, itemIndex) => setOption(itemValue)}
                    onChangeText={(value) => setOption(value)}
                    style={styles.selectPicker}>
                    <SelectPicker.Item onChangeText={(value) => setOption(value)} style={styles.item} label="farmer" value={Option} />
                    <SelectPicker.Item onChangeText={(value) => setOption(value)} style={styles.item} label="salesPerson" value={Option} />
                </SelectPicker> */}
                <TextInput
                    style={styles.requestText}
                    placeholder="Decription"
                    onChangeText={(value) => setDescription(value)}
                />
                <TouchableOpacity style={styles.button} onPress={createPartner}>
                    <Text style={styles.buttonText}>REQUEST</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Request
