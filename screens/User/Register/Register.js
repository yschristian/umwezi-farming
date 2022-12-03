import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addUser } from "../../../Redux/apiCalls/userActions";

const Register = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()

    const createUser = () => {
        addUser(dispatch, {username, email, password})
        setUsername("")
        setEmail("")
        setPassword("")
    }
    return (
        <ScrollView style={styles.container}>
            <Text
                style={styles.text}
            >SIGNUP
            </Text>
            <View style={styles.userRequest}>
                <TextInput
                    style={styles.requestText}
                    placeholder="Username"
                    onChangeText={(value) => setUsername(value)}
                />
                <TextInput
                    style={styles.requestText}
                    placeholder="Email"
                    onChangeText={(value) => setEmail(value)}
                />
                <TextInput
                    style={styles.requestText}
                    placeholder="Password"
                    onChangeText={(value) => setPassword(value)}
                />
                <TouchableOpacity style={styles.button} onPress={createUser}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
                <View style={styles.row}>
                    <Text>
                        Already a Member?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.textRequest}>Login</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    )
}

export default Register
