import { buscarHeroeAsync, buscarHeroeParaAawait } from "./promesas";

const heroesIds = [
    'capi',
    'iron',
    'spider'
];

const heroesPromesas = heroesIds.map( id => buscarHeroeParaAawait(id) ); //array de promesas

export const obtenerHeroesArr = async() => { //cuando se pone un await, la funcion debe tener async
    
    const heroesArr = [];

    //esta es la primer forma
/*     for (const id of heroesIds) {
        const heroe = await buscarHeroeParaAawait (id);
        heroesArr.push(heroe);
    } */ 

    for (const id of heroesIds) {
        heroesArr.push( buscarHeroeParaAawait(id));
    }

    return await Promise.all(heroesArr); //esto hace que se llamen todas las promesas de una
};


export const obtenerHeroesArr2 = async() => { //version elegante
    
    return await Promise.all(heroesIds.map ( buscarHeroeParaAawait ));
}

export const obtenerHeroeAwait = async(id) => {
    
    try {
        const heroe =  await buscarHeroeAsync (id);
        return heroe;
    } catch (error) {
        console.log('catch!!');
        return {
            nombre:'sin nombre',
            poder:'sin poder'
        }
    }
};

export const heroesCiclo = async() => {
    
    console.time('ciclo');

    //const heroes = await Promise.all(heroesPromesas);

    for await(const heroe of heroesPromesas) {
        console.log(heroe);
    }


    console.timeEnd('ciclo');
};

export const heroeIfAwait = async(id) => {
    
    if  ( (await buscarHeroeAsync( id )).nombre === 'IronMan') {
        console.log('es el mejor de todos');
    } else {
        console.log('naaaa');
    }
};