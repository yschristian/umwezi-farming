import React ,{useState}from "react";
import { Text, View,ScrollView, TextInput, TouchableOpacity } from "react-native";
import {Picker as SelectPicker} from '@react-native-picker/picker' 
import styles from "./styles";
import { addPartner } from "../../../Redux/apiCalls/partnerActions";
import { useDispatch } from "react-redux";


const Request = () => {
    const [work, setWork] = useState("");
    
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [desc, setDesc]= useState("")
    const [Email, setEmail] = useState("")
    const dispatch = useDispatch()
    // console.log(Email,work,FirstName,LastName,desc);

    const createPartner = () =>{
        try {
            addPartner(dispatch,work,Email,FirstName,LastName,desc)
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
                    placeholder="First Name"
                    onChangeText={(value) => setFirstName(value)}
                />
                <TextInput
                    style={styles.requestText}
                    placeholder="Last Name"
                    onChangeText={(value) => setLastName(value)}
                />
                <TextInput
                    style={styles.requestText}
                    placeholder="Email"
                    onChangeText={(value) => setEmail(value)}
                />
                <Text style={styles.optionTitle}>What you do?</Text>
                <SelectPicker
                selectedValue={work}
                onValueChange={(itemValue, itemIndex) => setWork(itemValue)}
                 style={styles.selectPicker}>
                    <SelectPicker.Item style={styles.item} label="Farmer" value="farmer" />
                    <SelectPicker.Item style={styles.item} label="SalesPesron" value="salesPerson" />
                </SelectPicker>
                <TextInput
                    style={styles.requestText}
                    placeholder="Decription"
                    onChangeText={(value) => setDesc(value)}
                />
                <TouchableOpacity style={styles.button} onPress={createPartner}>
                    <Text style={styles.buttonText}>REQUEST</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Request
