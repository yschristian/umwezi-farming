import { View ,StyleSheet ,Text} from 'react-native';
import { StripeProvider } from "@stripe/stripe-react-native";
import Checkout from './Checkout';
import {PUBLISHABLE_KEY} from '@env';


const Payment = ({route}) => {
    const amount = route.params.amount
    const products = route.params.cart
    //  console.log(products);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Payment</Text>
            <StripeProvider
                merchantIdentifier={`merchant.com.Native`}
                publishableKey={PUBLISHABLE_KEY}
            >
                <Checkout total={amount} products={products}/>
            </StripeProvider>
        </View>
    );
}

export default Payment

const styles = StyleSheet.create({
    container:{
      paddingHorizontal:20,
      paddingVertical:10
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        paddingBottom:5,
        textAlign:"center",
        color:"#8cd98c"
      }
})