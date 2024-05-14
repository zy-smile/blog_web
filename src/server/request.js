import axios from 'axios'

// axios.defaults.baseURL = ""

// axios.defaults.headers

const instance = axios.create({
  baseURL: '/',
  timeout: 6000,
  headers: {
    "Content-Type": "appliction/json"
  },
  withCredentials: false,
})

instance.interceptors.request.use(function(config) {
  return config
},function(error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function(response) {
  return response
},function(error) {
    return Promise.reject(error)
})

export default instance