import axios from "axios"
const baseUrl = process.env.REACT_APP_BACKEND_URL

class ItemService {

    static getAllItems() {
        return axios.get(`${baseUrl}/items`)
    }

    static getItemById(id) {
        return axios.get(`${baseUrl}/items/${id}`)
    }

    static updateItem(id, item) {
        return axios.put(`${baseUrl}/items/${id}`, item)
    }

    static addItem(item) {
        return axios.post(`${baseUrl}/items`, item)
    }

    static deleteItem(id) {
        return axios.delete(`${baseUrl}/items/${id}`)
    }
}

export default ItemService;