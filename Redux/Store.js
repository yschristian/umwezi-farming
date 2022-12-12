import { configureStore, combineReducers } from "@reduxjs/toolkit";
import CartRedux from "./CartRedux";
import PartnerRedux from "./PartnerRedux";
import userRedux from "./UserRedux"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import AsyncStorage from "@react-native-async-storage/async-storage";

const rootReducer = combineReducers({
    user: userRedux,
    cart: CartRedux
})

// export default configureStore({
//     reducer:{
//         cart:CartRedux,
//         user:userRedux
//     }
// })

const persistConfig = {
    key: 'root',
    version: 1,
    storage:AsyncStorage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
export const persistor = persistStore(store)
