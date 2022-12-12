import { useStripe } from '@stripe/stripe-react-native';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { publicRequest } from '../../RequestMethod';


const Checkout = ({total,products}) => {
    const [name, setName] = useState('');
    const [amount] = useState(total);
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    // console.log("gs",products);
    const subscribe = async () => {
        try {
            const res = await publicRequest.post("/checkout/pay", { name, amount })
            const data = await res.data;
            // console.log(data)
            const { clientSecret } = data;
            // console.log(clientSecret)
            const initSheet = await initPaymentSheet({
                merchantDisplayName: "Umwezi Farms",
                paymentIntentClientSecret: clientSecret,
                defaultBillingDetails: {
                    name: 'chris yuba',
                }
            });
            if (initSheet.error) return Alert.alert(initSheet.error.message);
            const openPaymentSheet = await presentPaymentSheet({ clientSecret });
            if (openPaymentSheet.error) return Alert.alert(openPaymentSheet.error.message);
            const order = await axios.post("https://umwezi-farming-api.vercel.app/order/create",
                {
                    products: products,
                    Amount: amount
                }
            );
            // const ordersData = order.data;
            console.log(order)
        } catch (error) {
            // console.log(error.message);
        }
    }
    return (
        <View>
            <TextInput
                style={styles.userText}
                placeholder="name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <Button style={styles.btn} title="Checkout" variant="primary" onPress={subscribe} />
        </View>
    );
}

export default Checkout

const styles = StyleSheet.create({
    userText: {
        width: '90%',
        height: 60,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
        padding: 10,
        borderWidth: 2,
        borderColor: '#8cd98c',
    },
    btn:{
        width: 80,
    }
})

