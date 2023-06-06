import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/DmitrijsNau/mockDB2',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getGames() {
    return apiClient.get('/games')
  },
  getGame(id:string) {
    return apiClient.get('/games/' + id)
  },
}