import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/DmitrijsNau/mockDB',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getExamples() {
    return apiClient.get('/examples')
  },
  getExample(id) {
    return apiClient.get('/examples/' + id)
  },
}