import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView, ScreenView } from 'react-native';
import Home from './screens/Home/Home';
import Login from './screens/User/Login/Login';
import Register from './screens/User/Register/Register';
import Request from './screens/User/Request/Request';

export default function App() {
  return (
    
    <SafeAreaView>
      {/* <Home/> */}
      <Login/>
      {/* <Request/> */}
  </SafeAreaView>
  );
}

