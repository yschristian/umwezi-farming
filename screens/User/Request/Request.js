import React, { useState } from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import styles from "./styles";

const Request = () => {
    const [options, setOptions] = useState('')
    return (
        <View style={styles.container}>
            <Text
                style={styles.text}
            >Partner Request
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

                {/* <RNPickerSelect
                 onValueChange={(options) => setOptions(options)}
                    items={[
                        { label: "SalesPerson", value: "SalesPerson" },
                        { label: "Farmer", value: "Farmer" },
                    ]}
                  style={styles.pickerSelectStyles}
                /> */}
                <TextInput
                    style={styles.requestText}
                    placeholder="Password"
                />
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>REQUEST</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Request
