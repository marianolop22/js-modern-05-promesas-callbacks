import { buscarHeroe as buscarHeroeCallBack } from "./js/callbacks"; //asigno alias
import { buscarHeroe } from "./js/promesas";
import './styles.css';

const heroeId = 'capi';
const heroeId2 = 'spider';

// a esto de los callbacks anidados le dicen callback hell
// buscarHeroe ( heroeId, (err, heroe) => { //es un estandard que siempre mandes un err
//     if (err) {
//         return console.error(err);
//     }
//     buscarHeroe( heroeId2, (err, heroe2 ) => {
//         if (err) {
//             return console.error(err);
//         }
//         console.log(`enviando a ${heroe.nombre} y a ${heroe2.nombre} a la mision`);
//     });
// });


/* buscarHeroe(heroeId)
    .then( heroe => {
        console.log(`enviando a ${heroe.nombre} a la mision`);
    })
    .catch( reject =>{
        console.error( reject );
    })
    .finally( ()=> {
        console.info('termino el proceso');
    });
     */

Promise.all( [buscarHeroe(heroeId), buscarHeroe(heroeId2)] )
    .then( ([heroe1, heroe2]) => {
        console.log(`enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la mision`);
    })
    .catch( reject => {
        console.error(reject);
    });


console.log('fin del programa');