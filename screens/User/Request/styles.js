import { StyleSheet ,Dimensions} from "react-native"

const styles = StyleSheet.create({
    container:{
        //backgroundColor: "#8cd98c",
        width:"100%",
        height:"100%",
        flex:1
    },
    userRequest:{
        marginVertical:100,
        justifyContent:'center',
        alignItems:"center",
        // backgroundColor:"#339933", 
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

export default styles