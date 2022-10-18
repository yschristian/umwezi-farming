import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView, ScreenView } from 'react-native';
import Home from './screens/Home/Home';
import Login from './screens/User/Login/Login';
import UserProfile from './screens/User/Profile/UserProfile';
import Register from './screens/User/Register/Register';
import Request from './screens/User/Request/Request';
import Router from "./screens/Navigation/Router"
import CartItems from './screens/Cart/CartItem';


export default function App() {
  return (
    <>
      <StatusBar/>
      <Router/>
        
      {/* <Home/> */}
      {/* <Register/> */}
      {/* <UserProfile/> */}
      {/* <Request/> */}
    </>
  );
}

