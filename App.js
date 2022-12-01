import { StatusBar } from 'expo-status-bar';
import Router from "./screens/Navigation/Router"
import { Provider } from 'react-redux';
import Store from './Redux/Store';


export default function App() {
  return (
    <Provider store={Store}>
      <StatusBar />
      <Router />
    </Provider>
  );
}

