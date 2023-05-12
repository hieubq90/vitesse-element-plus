import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import showCodeMessage from '~/api/errorCode'
import type { ErrorData } from '~/types'
import type { instanceObject } from '~/utils/format'
import { formatJsonToUrlParams } from '~/utils/format'

const BASE_URL = import.meta.env.VITE_API_BASEURL

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders
}
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000 * 30,
  headers: {
    'Content-Type': 'application/json',
  },
})

function onRequest(config: AdaptAxiosRequestConfig): AdaptAxiosRequestConfig {
  return config
}

function onRequestError(error: AxiosError): Promise<AxiosError> {
  console.error(`[request error] [${JSON.stringify(error)}]`)
  return Promise.reject(error)
}
axiosInstance.interceptors.request.use(onRequest, onRequestError)

async function onResponse(response: AxiosResponse) {
  if (response.status === 200)
    return response.data

  ElMessage.info(JSON.stringify(response.status))
  return response
}

async function onResponseError(error: AxiosError) {
  const { response } = error
  if (response) {
    const { detail } = response.data as ErrorData
    if (detail)
      ElMessage.error(detail)
    else
      ElMessage.error(showCodeMessage(response.status))

    return Promise.reject(response.data)
  }
  ElMessage.warning('The network connection is abnormal, please try again later!')
  return Promise.reject(error)
}
axiosInstance.interceptors.response.use(onResponse, onResponseError)

export function setRequestHeader(header: string, value: string) {
  axiosInstance.defaults.headers.common[header] = value
}

const service = {
  get<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.get(url, { params: data })
  },

  post<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.post(url, data)
  },

  put<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.put(url, data)
  },

  delete<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.delete(url, data)
  },

  upload: (url: string, file: FormData | File) =>
    axiosInstance.post(url, file, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  download: (url: string, data: instanceObject) => {
    window.location.href = `${BASE_URL}/${url}?${formatJsonToUrlParams(data)}`
  },
}

export default service
