import { buscarHeroeAsync, promesaLenta, promesaMedia, promesaRapida } from "./js/promesas";
import { heroeIfAwait, heroesCiclo, obtenerHeroeAwait, obtenerHeroesArr, obtenerHeroesArr2 } from "./js/await";


import './styles.css';

// obtenerHeroesArr().then(console.log);
// obtenerHeroesArr2().then(console.log);

// obtenerHeroeAwait('capi2')
//     .then( console.log)
//     .catch( console.warn);

// heroesCiclo();

heroeIfAwait('iron');


// promesaLenta.then( console.log );
// promesaMedia.then( console.log );
// promesaRapida.then( console.log );


// Promise.all([promesaLenta, promesaMedia, promesaRapida  ])
//     .then( ()=>{
//         console.log('terminaron todas');
//     });

/* Promise.race( [promesaLenta, promesaMedia, promesaRapida  ] )
    .then( console.log )
    .catch( reject => {
        console.error(reject);
    }); */

/* buscarHeroeAsync('capi')
    .then( heroe =>  {
        console.log(heroe);
    })
    .catch( reject => {
        console.log(reject);
    }); */




