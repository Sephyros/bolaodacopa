import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.63.106:3333'
})