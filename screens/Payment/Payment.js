import { View } from 'react-native';
import { StripeProvider } from "@stripe/stripe-react-native";
import Checkout from './Checkout';
import {PUBLISHABLE_KEY} from '@env';


const Payment = ({route}) => {
    const amount = route.params.amount
     console.log(amount);
    return (
        <View>
            <StripeProvider
                merchantIdentifier={`merchant.com.Native`}
                publishableKey={PUBLISHABLE_KEY}
            >
                <Checkout total={amount}/>
            </StripeProvider>
        </View>
    );
}

export default Payment