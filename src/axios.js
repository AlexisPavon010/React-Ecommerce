import axios from 'axios'

const instace = axios.create({
    baseURL: 'http://localhost:5001/tienda-react-717ce/us-central1/api'
})


export default instace;