import React from "react";
import { Text, View,ScrollView, TextInput, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";


const Login = () => {
    const navigation = useNavigation()
    return (
        <ScrollView style={styles.container}>
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
                        Are you a Member? if not ,
                    </Text>
                    <Pressable onPress={()=> navigation.navigate("Register")}>
                        <Text style={styles.textRequest}>Signup</Text>
                    </Pressable>
                    
                </View>
                <Pressable style={styles.butn}>
                    <Text style={styles.forgotButton}>Forgot Password?</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default Login
