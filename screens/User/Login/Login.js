import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, Alert, TextInput, TouchableOpacity, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import  {login}  from "../../../Redux/apiCalls/userActions";

const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const [isOnline, setIsOnline] = useState(false)
    // useEffect(() => {
    //     if (isOnline) {
    //         navigation.navigate("AuthStack")
    //     }
    // }, [isOnline])

    const loginUser = async() => {
        if (email === '' || password === '') {
            Alert.alert('Please fill in your credentials');
        }
        await login(dispatch, { email, password })
        navigation.navigate("AuthStack")
    }
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
                    onChangeText={(value) => setEmail(value)}
                />
                <TextInput
                    style={styles.userText}
                    placeholder="Type your Password"
                    secureTextEntry={true}
                    onChangeText={(value) => setPassword(value)}
                />
                <TouchableOpacity style={styles.button} onPress={loginUser}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <View style={styles.row}>
                    <Text>
                        Are you a Member? if not ,
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.textRequest}>Signup</Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity style={styles.butn}>
                    <Text style={styles.forgotButton}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Login
