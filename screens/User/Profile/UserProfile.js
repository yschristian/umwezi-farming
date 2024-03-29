import React, { useEffect, useState } from "react";
import {FlatList, Text, View, Image, ScrollView, Pressable, StyleSheet, Modal, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";



const UserProfile = () => {
  const [u, setU] = useState([])
  const getUser = async () => {
    const data = await AsyncStorage.getItem("umwezi")
    const user = JSON.parse(data)
    setU(JSON.parse(user))
  }
  const [modalVisible, setModalVisible] = useState(false);
  const [email1, setEmail1] = useState("yubahwesc@gmail.com")
  const [username1, setUsername1] = useState("yubahwe")
  const handleUpdate = () => { }

  useEffect(() => {
    getUser()
  }, [])
  console.log(u);
  return (

    <ScrollView style={styles.container}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Update Profile</Text>
              <View class={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{ uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
                />
                <TouchableOpacity style={styles.imagePicker}>
                  <FontAwesome name="upload" size={24} color="white" />
                </TouchableOpacity>
              </View>
              <TextInput onChangeText={() => setEmail1(email1)} style={styles.userText} placeholder="email" />
              <TextInput onChangeText={() => setUsername1(username1)} style={styles.userText} placeholder="username" />
              <View class={styles.modalButn}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
                <Pressable
                  onPress={handleUpdate}
                  style={styles.buttonClose}
                >
                  <Text style={styles.textStyle}>Update</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.title}>
        {/* <Text
          style={styles.text}
        >Welcome Yubahwe
        </Text> */}
      </View>
      <View style={styles.userDetails}>
        <Image
          style={styles.image}
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
        />
        <FlatList 
        data={u}
        keyExtractor={(item, index) => item._id}
        renderItem={({ item }) => (
          <View>
          <Text style={styles.userdata} >Email:{item.user.email}</Text>
          <Text style={styles.userdata}>Username:{item.user.username}</Text>
          <Text style={styles.userdata}>role:{item.user.role}</Text>
        </View>
        )}
        />
       
        <Pressable style={styles.butn} onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.changeButton}>Change profile</Text>
        </Pressable>
        {/* <Pressable style={styles.button}>
          <Text style={styles.changeButton}>LOG OUT</Text>
        </Pressable> */}
      </View>
    </ScrollView>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#8cd98c",
    width: "100%",
    height: "100%",
    flex: 1
  },
  text: {
    marginTop: 50,
    marginLeft: 50,
    marginBottom: 50,
    color: "#8cd98c",
    fontSize: 20,
    fontWeight: "bold"
  },
  imagePicker: {
    position: 'absolute',
    right: 1,
    bottom: 5,
    backgroundColor: 'grey',
    padding: 8,
    borderRadius: 100,
    elevation: 20,
  },
  imageContainer: {
    flexDirection: 'column'

  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 78,
    marginBottom: 40
  },
  userDetails: {
    justifyContent: "center",
    alignItems: 'center'
  },
  userdata: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "bold"
  },
  butn: {
    marginTop: 30,
    backgroundColor: "grey",
    borderRadius: 20,
    padding: 10
  },
  changeButton: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  },
  imageContainer: {

  },
  button: {
    marginTop: 100,
    backgroundColor: "grey",
    borderRadius: 20,
    padding: 10
  },
  centeredView: {
    marginTop: 22,
    borderRadius: 30,

  },
  modalView: {
    margin: 20,
    backgroundColor: "#8cd98c",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonClose: {
    backgroundColor: "grey",
    marginBottom: 20,
    backgroundColor: "grey",
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    flexDirection: "row"
  },
  modalButn: {
    flexDirection: "row"
  },
  userText: {
    width: "100%",
    height: 40,
    margin: 20,
    borderRadius: 15,
    backgroundColor: "white",
    color: "black",
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: "bold"
  },
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white"
  }
})

