import { createDrawerNavigator } from '@react-navigation/drawer';
import Product from '../Product/Product';

const Drawer = createDrawerNavigator();

const AuthStack = () =>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Product" component={Product}/>
        </Drawer.Navigator>
    )
}
export default AuthStack