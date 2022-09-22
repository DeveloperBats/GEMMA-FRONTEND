import axios from "axios"
import { env } from "process"

axios.defaults.baseURL = env.RUNNDER_API_URL
axios.defaults.validateStatus = () => true

axios.interceptors.request.use(async config => {
    /* if (session?.accessToken?.length > 0 && config.withCredentials !== false) {
        config.headers.Authorization = `Bearer ${session.accessToken}`
    } */

    return config
})

axios.interceptors.response.use(async res => {
    if (res.status >= 500) {
        console.error(res.data)
    }

    return res
})
