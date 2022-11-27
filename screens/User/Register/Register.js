import React ,{useState} from "react";
import { Text, View, TextInput, Pressable,ScrollView } from "react-native";
import {Picker as SelectPicker} from '@react-native-picker/picker'
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text
                style={styles.text}
            >SIGNUP
            </Text>
            <View style={styles.userRequest}>
                <TextInput
                    style={styles.requestText}
                    placeholder="Username"
                />
                <TextInput
                    style={styles.requestText}
                    placeholder="Email"
                />
                 <TextInput
                    style={styles.requestText}
                    placeholder="Password"
                />
                {/* <Text style={styles.optionTitle}>Role?</Text>
                <SelectPicker
                selectedValue={work}
                onValueChange={(itemValue, itemIndex) => setWork(itemValue)}
                 style={styles.selectPicker}>
                    <SelectPicker.Item style={styles.item} label="Farmer" value="Farmer" />
                    <SelectPicker.Item style={styles.item} label="SalesPesron" value="SalesPesron" />
                </SelectPicker> */}
                {/* <TextInput
                    style={styles.requestText}
                    placeholder="Decription"
                /> */}
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Signup</Text>
                </Pressable>
                <View style={styles.row}>
                    <Text>
                        Already a Member?
                    </Text>
                    <Pressable onPress={()=> navigation.navigate("Register")}>
                        <Text style={styles.textRequest}>Login</Text>
                    </Pressable>
                    
                </View>
            </View>
        </View>
    )
}

export default Register
