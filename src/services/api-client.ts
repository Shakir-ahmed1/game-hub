import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ba1755f18abc4ede8b2ef483388033e8'
    }
})