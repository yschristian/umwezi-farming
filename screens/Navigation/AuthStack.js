import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../../components/CustomDrawer';
import Order from '../MyOrder/Order';
import Product from '../Product/Product';
import HomeTabNavigator from './HomeTabNavigator';
import { FontAwesome, AntDesign, Ionicons, Feather } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const AuthStack = () => {
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
            <Drawer.Screen name="My order" component={Order}
                options={{
                    drawerIcon: ({ color }) => (
                        <Feather name="package" size={24} color={color} />
                    ),
                }}
            />
            <Drawer.Screen name="Product" component={Product}
                options={{
                    drawerIcon: ({ color }) => (
                        <FontAwesome name="product-hunt" size={24} color={color} />

                    )
                        
                }}
                screenOptions={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}
export default AuthStack