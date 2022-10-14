import { StyleSheet ,Dimensions} from "react-native"

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#8cd98c",
        width:"100%",
        height:"100%"
    },
    userRequest:{
        marginVertical:100,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:"#339933", 
        borderRadius:23,
        marginHorizontal:10,
        width:Dimensions.get('screen').width - 20,
        
    },
    requestText:{
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
    text:{
        color: "white",
        textAlign:"center",
        marginTop:100,
        fontWeight:"bold",
        fontSize:30,
        },
})

export default styles