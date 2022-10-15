// import React,{useState} from "react";
// import { FontAwesome } from '@expo/vector-icons';
// import  {Modal, TextInput, TouchableOpacity} from 'react-native'

// const UserModalProfile = () =>{
//     const [modalVisible, setModalVisible] = useState(false);
//     return(
//         <View style={styles.centeredView}>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => {
//             Alert.alert("Modal has been closed.");
//             setModalVisible(!modalVisible);
//           }}
//         >
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//               <Text style={styles.modalText}>Update Profile</Text>
//               <View  class={styles.imageContainer}>
//               <Image
//                   style={styles.image}
//                   source={{uri:"https://cdn-icons-png.flaticon.com/512/149/149071.png"}}
//                  />
//                  <TouchableOpacity style={styles.imagePicker}>
//                   <FontAwesome name="upload" size={24} color="white" />
//                 </TouchableOpacity>
//               </View>
//               <TextInput style={styles.userText} placeholder="email" />
//               <TextInput style={styles.userText} placeholder="username" />
//               <View class={styles.modalButn}>
//                 <Pressable
//                   style={[styles.button, styles.buttonClose]}
//                   onPress={() => setModalVisible(!modalVisible)}
//                 >
//                   <Text style={styles.textStyle}>Close</Text>
//                 </Pressable>
//                 <Pressable
//                   style={styles.buttonClose}
//                 >
//                   <Text style={styles.textStyle}>Update</Text>
//                 </Pressable>
//               </View>
//             </View>
//           </View>
//         </Modal>
//         </View>
//     )
// }

// export default UserModalProfile

// const styles = StyleSheet.create({
//     centeredView: {
//         marginTop: 22,
//         borderRadius:30,
        
//       },
//       modalView: {
//         margin: 20,
//         backgroundColor: "green",
//         borderRadius: 20,
//         padding: 35,
//         alignItems: "center",
//         shadowColor: "#000",
//         shadowOffset: {
//           width: 0,
//           height: 2
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5
//       },
//       buttonClose: {
//         backgroundColor: "grey",
//         flexDirection: "row",
//         marginBottom:20
//       },
//       textStyle: {
//         color: "white",
//         fontWeight:"bold",
//         flexDirection:"row"
//       },
//       modalButn:{
//         flexDirection:"row"
//       },
//       userText:{
//         width:"100%",
//         height:40,
//         margin:20,
//         borderRadius:15,
//         backgroundColor: "white",
//         color: "black",
//         paddingLeft:10,
//         fontSize: 16,
//         fontWeight:"bold"
//     },
//     modalText:{
//       fontSize:20,
//       fontFamily:"bold",
//       marginBottom:20,
//       color:"white"
//     }
// })