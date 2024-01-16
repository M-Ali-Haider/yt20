import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_BASE_URL

const axiosInstance = axios.create({
    baseURL: `${API_URL}/api`,
})

export async function get(url, config = {}) {
    return axiosInstance
        .get(
            url,
            { ...config },
            {
                method: 'GET',
            }
        )
        .then((response) => response.data)
}
