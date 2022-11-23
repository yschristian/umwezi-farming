import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        flex:1,
    },
    userLogin:{
        marginVertical:100,
        justifyContent:'center',
        alignItems:"center",
        
    },
    userText:{
        width: '80%',
        height: 60,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
        padding: 10,
        borderWidth: 2,
        borderColor: '#8cd98c',
    },
    text:{
        color: "#8cd98c",
        textAlign:"center",
        marginTop:100,
        fontWeight:"bold",
        fontSize:30
    },
    button:{
        width:"80%",
        height:40,
        margin:20,
        borderRadius:15,
        alignItems:'center',
        backgroundColor:"#8cd98c",
        justifyContent:"center"
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
        color:"#8cd98c",
        fontWeight:"bold",
        
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
