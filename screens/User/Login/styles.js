import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#8cd98c",
        width:"100%",
        height:"100%"
    },
    userLogin:{
        marginVertical:100,
        justifyContent:'center',
        alignItems:"center"
    },
    userText:{
        width:"60%",
        height:40,
        margin:20,
        borderRadius:15,
        backgroundColor: "white",
        color: "black",
        paddingLeft:10,
        fontSize: 16,
        fontWeight:"bold"
    },
    text:{
        color: "white",
        textAlign:"center",
        marginTop:100,
        fontWeight:"bold",
        fontSize:30
    },
    button:{
        width:"60%",
        height:30,
        margin:20,
        borderRadius:15,
        alignItems:'center',
        backgroundColor:"#66cc66"
    },
    buttonText:{
        color:"white",
        fontWeight:"bold",
        fontSize:20
    },
    row:{
        flexDirection:'row',
        fontSize: 12
    },
    textRequest:{
        color:"white",
        fontWeight:"bold"
    },
    butn:{
        marginTop: 150,
        fontSize:20,
        fontWeight:"bold"
    },
    forgotButton:{
        fontSize:20,
        fontWeight:"bold"
    }
})

export default styles
