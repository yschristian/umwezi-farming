import { StatusBar } from 'expo-status-bar';
import Router from "./screens/Navigation/Router"
import { Provider } from 'react-redux';
import store from './Redux/store';


export default function App() {
  return (
    <Provider store={store}>
      <StatusBar />
      <Router />
    </Provider>
  );
}

