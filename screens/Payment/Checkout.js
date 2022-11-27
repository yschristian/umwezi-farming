import {View, Text ,Image ,StyleSheet,TextInput,ScrollView,Pressable} from "react-native"
import {Dimensions} from "react-native"
const Checkout =()=>{
    return(

        <ScrollView>
            {/* <Text
                style={styles.text}
            >Login To Your Account
            </Text> */}
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
        </ScrollView>
    )
}
export default Checkout

const styles = StyleSheet.create({
    container:{
       // backgroundColor: "#8cd98c",
        width:"100%",
        height:"100%"
    },
    userRequest:{
        marginVertical:100,
        justifyContent:'center',
        alignItems:"center", 
        borderRadius:23,
        marginHorizontal:10,
        width:Dimensions.get('screen').width - 20,
    },
    requestText:{
        width: '80%',
        height: 60,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
        padding: 10,
        borderWidth: 2,
        borderColor: '#8cd98c',
    },
    button:{
        width:"80%",
        height:40,
        margin:20,
        borderRadius:15,
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:"#8cd98c"
    },
    buttonText:{
        color:"white",
        fontWeight:"bold",
        fontSize:20
    },
    text:{
        color: "#8cd98c",
        textAlign:"center",
        marginTop:100,
        fontWeight:"bold",
        fontSize:30,
        },
    selectPicker:{
        width: 100,
        height:50
        },
    optionTitle:{
        color:"#8cd98c",
        fontWeight:"bold",
        fontSize:30,
    },
    item:{
       padding: 12 
    }
})


