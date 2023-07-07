import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api', 
  params: {
    key: '9d140133b5d84795882245def438b6b8'
  }
})