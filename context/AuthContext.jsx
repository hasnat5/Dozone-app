import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { BASE_URL } from '../config'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    const [userTema, setUserTema] = useState(null)

    const login = (email, password) => {
        setIsLoading(true)

        async function getInfo() {
            try {
                const response = await axios.get(`${BASE_URL}user/`
                )
                setUserInfo(response.data)
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
                console.log(response.data)



            } catch (error) {
                Alert.alert('tolong login ulang')
                console.error(error);
            }
        }

        async function getTema() {
            try {
                const response = await axios.get(`${BASE_URL}tema/aktif`)
                setUserTema(response.data)
                AsyncStorage.setItem('userTema', JSON.stringify(userTema))
                console.log(response.data)
                getInfo()


            } catch (error) {
                Alert.alert('tema gagal di load')
                console.error(error);
            }
        }

        async function getToken() {
            try {
                const response = await axios.post(`${BASE_URL}login/`, {
                    email,
                    password
                })
                setUserToken(response.data.jwt)
                AsyncStorage.setItem('userToken', response.data.jwt)
                console.log(response.data.jwt)
                getTema()


            } catch (error) {
                console.log(`login error ${error}`)
                Alert.alert('email atau pass salah')
            }
        }

        getToken()


        setIsLoading(false)
    }

    const logout = () => {
        setIsLoading(true)
        setUserToken(null)
        setUserTema(null)
        setUserInfo(null)
        AsyncStorage.removeItem('userToken')
        AsyncStorage.removeItem('userTema')
        AsyncStorage.removeItem('userInfo')

        axios.post(`${BASE_URL}logout/`, {})
            .then(res => {
                console.log(res.data.message)

            })
            .catch((error) => {
                console.log(`logout error ${error}`)
                Alert.alert('logout gagal')
            })

        setIsLoading(false)
    }


    const isLoggedIn = async () => {
        try {
            setIsLoading(true)
            let userToken = await AsyncStorage.getItem('userToken')
            let userInfo = await AsyncStorage.getItem('userInfo')
            let userTema = await AsyncStorage.getItem('userTema')

            userInfo = JSON.parse(userInfo)
            userTema = JSON.parse(userTema)

            if (userToken) {
                setUserInfo(userInfo)
                setUserTema(userTema)
                setUserToken(userToken)

            }
            setIsLoading(false)
        } catch (error) {
            console.log(`is logged in error ${error}`)
        }
    }

    useEffect(() => {
        isLoggedIn()
    }, [])


    return (
        <AuthContext.Provider value={{ login, logout, isLoading, userToken, userInfo, userTema }}>
            {children}
        </AuthContext.Provider>
    )
}