import React ,{useState} from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import {Picker as SelectPicker} from '@react-native-picker/picker'

import styles from "./styles";

const Register = () => {
    const [work, setWork] = useState();
    return (
        <View style={styles.container}>
            <Text
                style={styles.text}
            >Partner Register
            </Text>
            <View style={styles.userRequest}>
                <TextInput
                    style={styles.requestText}
                    placeholder="First Name"
                />
                <TextInput
                    style={styles.requestText}
                    placeholder="Second Name"
                />
                 <TextInput
                    style={styles.requestText}
                    placeholder="username"
                />
                <Text style={styles.optionTitle}>Role?</Text>
                <SelectPicker
                selectedValue={work}
                onValueChange={(itemValue, itemIndex) => setWork(itemValue)}
                 style={styles.selectPicker}>
                    <SelectPicker.Item style={styles.item} label="Farmer" value="Farmer" />
                    <SelectPicker.Item style={styles.item} label="SalesPesron" value="SalesPesron" />
                </SelectPicker>
                {/* <TextInput
                    style={styles.requestText}
                    placeholder="Decription"
                /> */}
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>REGESTER</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Register
