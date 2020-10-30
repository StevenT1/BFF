import axios from 'axios';
class safeRequest {
    static fetch(url) {
        let response = {
            status: 0,
            message: '',
            data: null
        }
        return new Promise((resolve, reject) => {
            axios.get(url).then((data) => {
                response.data = data.data
                resolve(response)
            }).catch((error) => {
                response.status = 500;
                response.message = '访问错误',
                    response.data = {
                        mm: 'cuowu ',
                        cc: [1, 23, 4, 5],
                        // error: error
                    }
                // reject(response);
                resolve(response)
            })
        })
    }
}
export default safeRequest;
