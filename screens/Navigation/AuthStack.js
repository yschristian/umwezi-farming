import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../../components/CustomDrawer';
import Order from '../MyOrder/Order';
import Product from '../Product/Product';

const Drawer = createDrawerNavigator();

const AuthStack = () =>{
    return(
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>}>
            <Drawer.Screen name="Product" component={Product}  screenOptions={{headerShown:false}}/>
            <Drawer.Screen name="Order" component={Order}  screenOptions={{headerShown:false}}/>
        </Drawer.Navigator>
    )
}
export default AuthStack