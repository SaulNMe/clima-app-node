const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'b3a794a567msh64f79dd35ae5c93p166ac9jsnf9c383205d08' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay respuestas para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const { lat, lon } = data;

    return {
        direccion,
        lat,
        lon
    }
};

module.exports = {
    getLugarLatLng
};