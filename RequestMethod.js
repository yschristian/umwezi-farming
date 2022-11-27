import axios from "axios";

const BASE_URL = "https://umwezi-farming-api.vercel.app/product/All"
//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
const TOKEN='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjM4MjJhOWIyYWQ1NmIwZGU2MDUxOWI4IiwiZW1haWwiOiJydXJlbWVzaGFAZ21haWwuY29tIiwicm9sZSI6ImNsaWVudCJ9LCJpYXQiOjE2Njk1NTU3NDIsImV4cCI6MTY2OTgxNDk0Mn0.6ff74r3G5ED81F0Q90A1j9A7D9ICxm__k_yzECg2Yy8'


export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token: `Bearer ${TOKEN}`}
})

