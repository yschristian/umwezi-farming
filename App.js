import { StatusBar } from 'expo-status-bar';
import Router from "./screens/Navigation/Router"
import { Provider } from 'react-redux';
import {store,persistor} from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <StatusBar /> */}
        <Router />
      </PersistGate>
    </Provider>
  );
}

