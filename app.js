const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Descripción del lugar para obtener el clima',
        demand: true
    }
}).argv;


const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');


const getInfo = async(dir) => {
    try {
        const coords = await getLugarLatLng(dir);
        console.log(coords);
        const temp = await getClima(coords.lat, coords.lon);
        return `El clima de ${coords.direccion} es de ${temp}`;

    } catch (err) {
        return `No se pudo determinar el clima de ${dir}`;
    }
}

getInfo(argv.direccion).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})