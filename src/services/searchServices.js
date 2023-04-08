import httprequest from '~/utils/httprequest';
export const search = async (a) => {
    try {
        const res = await httprequest.get(`${encodeURIComponent()}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
