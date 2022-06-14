import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '@env';
import axios from 'axios';

const auth = {
    login: async function (forms) {
        return await axios.post(API_URL+'/login', forms, {
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then((res) => {
                const data = res.data.data
                return Promise.resolve(data)
            })
            .catch((err) => {
                return Promise.reject(err.response.data)
            })
    },
    logout: async function () {
        const token = await AsyncStorage.getItem("token");
        return await axios.get(API_URL+'/logout', {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token 
            }})
            .then((res) => {
                const data = res.data.data
                return Promise.resolve(data)
            })
            .catch((err) => {
                return Promise.reject(err.response.data)
            })
    },
    password: async function (form) {
        const token = await AsyncStorage.getItem("token");
        return await axios.post(API_URL+'/password', form, {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token 
            }})
            .then((res) => {
                const data = res.data.data
                return Promise.resolve(data)
            })
            .catch((err) => {
                return Promise.reject(err.response.data)
            })
    },
}

const api = {
    profile: async function () {
        const token = await AsyncStorage.getItem("token");
        return await axios.get(API_URL+'/profile', {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token 
            }})
            .then((res) => {
                const data = res.data.data
                return Promise.resolve(data)
            })
            .catch((err) => {
                return Promise.reject(err.response.data)
            })
    },
    validasi: async function () {
        const token = await AsyncStorage.getItem("token");
        return await axios.get(API_URL+'/validasi', {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token 
            }})
            .then((res) => {
                const data = res.data.data
                return Promise.resolve(data)
            })
            .catch((err) => {
                return Promise.reject(err.response.data)
            })
    },
    show: async function (id) {
        const token = await AsyncStorage.getItem("token");
        return await axios.get(API_URL+'/validasi/show/' + id , {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token 
            }})
            .then((res) => {
                const data = res.data.data
                return Promise.resolve(data)
            })
            .catch((err) => {
                return Promise.reject(err.response.data)
            })
    },
    search: async function (query) {
        const token = await AsyncStorage.getItem("token");
        return await axios.get(API_URL+'/validasi/search', 
        {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token 
            },
            params: {
                query: query.value 
            },
        })
            .then((res) => {
                const data = res.data.data
                return Promise.resolve(data)
            })
            .catch((err) => {
                return Promise.reject(err.response.data)
            })
    },
    lolos: async function (data) {
        const token = await AsyncStorage.getItem("token");
        return await axios.get(API_URL+'/lolos', 
        {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token 
            },
            params: {
                prodi: data
            },
        })
            .then((res) => {
                const data = res.data.data
                return Promise.resolve(data)
            })
            .catch((err) => {
                return Promise.reject(err.response.data)
            })
    },
    pembayaran: async function (data) {
        const token = await AsyncStorage.getItem("token");
        return await axios.get(API_URL+'/pembayaran', 
        {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token 
            },
            params: {
                pembayaran: data
            },
        })
            .then((res) => {
                const data = res.data.data
                return Promise.resolve(data)
            })
            .catch((err) => {
                return Promise.reject(err.response.data)
            })
    },
    rekom: async function (type, data) {
        const token = await AsyncStorage.getItem("token");
        return await axios.get(API_URL+'/rekom-'+type, 
        {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token 
            },
            params: {
                status: data
            },
        })
            .then((res) => {
                const data = res.data.data
                return Promise.resolve(data)
            })
            .catch((err) => {
                return Promise.reject(err.response.data)
            })
    },
    nim: async function () {
        const token = await AsyncStorage.getItem("token");
        return await axios.get(API_URL+'/nim', {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token 
            }})
            .then((res) => {
                const data = res.data.data
                return Promise.resolve(data)
            })
            .catch((err) => {
                return Promise.reject(err.response.data)
            })
    },
    grafik: async function () {
        const token = await AsyncStorage.getItem("token");
        return await axios.get(API_URL+'/grafik', {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token 
            }})
            .then((res) => {
                const data = res.data.data
                return Promise.resolve(data)
            })
            .catch((err) => {
                return Promise.reject(err.response.data)
            })
    },
}


export {auth, api};