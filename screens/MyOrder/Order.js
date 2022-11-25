import {View, Text ,Image ,StyleSheet} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
const Order =()=>{
    return(
        <View style={styles.container}>
            <Text>no Records Found</Text>
            <TouchableOpacity>
                <Text>Shop Now</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Order

const styles = StyleSheet.create({

})