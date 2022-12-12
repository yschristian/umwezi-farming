import { addUserFailled, addUserStart, addUserSuccess, deleteUserFailled, deleteUserStart, deleteUserSuccess, getUserFailled, getUserStart, getUserSuccess, loginFalure, loginStart, loginSuccess } from "../UserRedux"
import { publicRequest, userRequest } from "../../RequestMethod"
import AsyncStorage from "@react-native-async-storage/async-storage";



export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post('/user/login', user)
        const jsonValue = JSON.stringify(res.data);
        console.log(jsonValue);
        await AsyncStorage.setItem("umwezi",jsonValue);
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFalure())
    }
}

export const logout = () => {
    
}
export const getUsers = async (dispatch) => {
    dispatch(getUserStart())
    try {
        const res = await userRequest.get("/user/All")
        dispatch(getUserSuccess(res.data))
    } catch (error) {
        dispatch(getUserFailled())
    }
}

export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserStart())
    try {
        const res = await userRequest.delete(`/user/delete/${id}`)
        dispatch(deleteUserSuccess(res.data))
    } catch (error) {

        dispatch(deleteUserFailled())
    }
}
export const addUser = async (dispatch,user) => {
    dispatch(addUserStart())
    try {
        const res = await publicRequest.post("/user/create", user)
        dispatch(addUserSuccess(res.data))
    } catch (err) {
        dispatch(addUserFailled())
    }
}
