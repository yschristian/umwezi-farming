import React from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text
                style={styles.text}
            >Login To Your Account
            </Text>
            <View style={styles.userLogin}>
                <TextInput
                    style={styles.userText}
                    placeholder="Your Email"
                />
                <TextInput
                    style={styles.userText}
                    placeholder="Type your Password"
                />
                <Pressable style={styles.button} onPress={()=> navigation.navigate("Profile") }>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </Pressable>
                <View style={styles.row}>
                    <Text>
                        Are you Our Patner? if not ,
                    </Text>
                    <Pressable onPress={()=> navigation.navigate("Request")}>
                        <Text style={styles.textRequest}>Request</Text>
                    </Pressable>
                    
                </View>
                <Pressable style={styles.butn}>
                    <Text style={styles.forgotButton}>Forgot Password?</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login
