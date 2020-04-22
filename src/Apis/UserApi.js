import axios from 'axios'

export default axios.create(
    {
        baseURL: 'https://json-server-heroku-demo.herokuapp.com'
    }
)