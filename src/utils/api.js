import axios from 'axios'

export default axios.create({
  baseURL: 'http://laravel.test',
  timeout: 5000,
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
})