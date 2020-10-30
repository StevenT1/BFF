import SafeRequest from '../unitls/safeRequest';

class indexModel {
    getData(url) {
        return SafeRequest.fetch(url);
        // return axios.get(url).then(response => {
        //     return {
        //         data:[2,33,33]
        //     }
        // }).catch(error => {
        //     return {
        //         data:[2,3,3,3],
        //         error:'error'
        //     }
        // })
    }
}
export default indexModel;