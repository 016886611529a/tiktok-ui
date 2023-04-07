import request from '~/utils/request';
export const search = async (a) => {
    try {
        const res = await request.get(`${encodeURIComponent()}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
