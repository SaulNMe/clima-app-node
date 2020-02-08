const axios = require('axios');



const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f648fd4be328e59f48cd6db4c639120e&units=metric`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
}