import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers : {
        Authorization : 'Client-ID 13vcbPnZPwvJgHQEyv675WDH37ndlygKuTbvl8rxM-0'
    }
})