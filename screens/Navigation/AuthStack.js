import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../../components/CustomDrawer';
import Order from '../MyOrder/Order';
import Product from '../Product/Product';
import HomeTabNavigator from './HomeTabNavigator';
import { FontAwesome, AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

const AuthStack = () => {
    const navigation = useNavigation()

    const handlerCheckOut = async()=>{
        try {
            const res = await AsyncStorage.getItem("umwezi")
            if(res){
                navigation.navigate("Myorder")
            }else{
                alert("Login first")
            }
        } catch (error) {
            console.log(error);
        }
     }
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}

        // screenOptions={{
        //     headerShown: false,
        // }}
        >
            <Drawer.Screen name="Home" component={HomeTabNavigator} options={{
                drawerIcon: ({ color }) => (
                    <FontAwesome name="home" size={28} color={color} />
                ),
                headerShown: false,

            }}

            />

            <Drawer.Screen name="Myorder" component={Order}
                options={{
                    drawerIcon: ({ color }) => (
                        <TouchableOpacity onPress={handlerCheckOut}>
                            <Feather name="package" size={24} color={color} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Drawer.Screen name="Product" component={Product}
                options={{
                    drawerIcon: ({ color }) => (
                        <TouchableOpacity>
                            <FontAwesome name="product-hunt" size={24} color={color} />
                        </TouchableOpacity>
                    )

                }}
                screenOptions={{ headerShown: false }} />

        </Drawer.Navigator>
    )
}
export default AuthStack