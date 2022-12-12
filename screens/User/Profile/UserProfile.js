import React, { useState } from "react";
import { Text, View, Image,ScrollView, Pressable, StyleSheet, Modal, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


const UserProfile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [ email, setEmail] = useState("yubahwesc@gmail.com")
  const [ username, setUsername] = useState("yubahwe")
 const handleUpdate = () =>{}

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
              <TextInput onChangeText={()=> setEmail(email)} style={styles.userText} placeholder="email" />
              <TextInput onChangeText={()=> setUsername(username)} style={styles.userText} placeholder="username" />
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
        <Text
          style={styles.text}
        >Welcome Yubahwe
        </Text>
      </View>
      <View style={styles.userDetails}>
        <Image
          style={styles.image}
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
        />
        <View>
          <Text style={styles.userdata} >Email:{email}</Text>
          <Text style={styles.userdata}>Username:{username}</Text>
        </View>
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
    flex:1
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
    backgroundColor: "green",
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
    flexDirection:'row'
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

