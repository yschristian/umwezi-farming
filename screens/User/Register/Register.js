import React from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import styles from "./styles";

const Register = () => {
    return (
        <View style={styles.container}>
            <Text
                style={styles.text}
            >Register New Partner
            </Text>
            <View style={styles.userLogin}>
                <TextInput
                    style={styles.userText}
                    placeholder="UserName"
                />
                <TextInput
                    style={styles.userText}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.userText}
                    placeholder="Password"
                />
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </Pressable>
                <View style={styles.row}>
                    <Text>
                        Are you Our Patner? if not ,
                    </Text>
                    <Text style={styles.textRequest}>Request</Text>
                </View>
                <Pressable style={styles.butn}>
                    <Text style={styles.forgotButton}>Forgot Password?</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Register
