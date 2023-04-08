import axios from 'axios';

const httprequest = axios.create({
    baseURL: 'http://localhost:3000/',
});

// export const get = async (path, options) => {
//     const reponse = await request.get(path, options);
//     return reponse.data;
// };
export default httprequest;
