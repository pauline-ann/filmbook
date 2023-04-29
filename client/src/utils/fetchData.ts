import axios, { AxiosRequestConfig } from "axios"

export default async function fetchData(url: string, init?: AxiosRequestConfig) {

    try {
        const response = await axios(url, init)
        return response.data
    }
    catch (error) {
        let errorMessage = 'Failed to fetch data.'
        if (error instanceof Error) {
            errorMessage = error.message
            throw Error(errorMessage)
        }
    }
}