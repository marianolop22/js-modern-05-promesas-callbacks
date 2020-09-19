const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones'
    },
    iron: {
        nombre: 'IronMan',
        poder: 'Mucha plata'
    },
    spider: {
        nombre: 'SpiderMan',
        poder: 'la mejor reacciona alergica a las picaduras'
    }
};


export const buscarHeroe = (id) => {
    
    const heroe = heroes[id];
    
    return new Promise (( resolve, reject ) => { //puede ir sin parametros, pero se usa normalmente así
        if (heroe) {    
            resolve (heroe); //puedo mandar n parametros
        } else {
            reject (`no existe el heroe con id ${id}`);
        }
    });
};

export const buscarHeroeParaAawait = (id) => {
    
    const heroe = heroes[id];
    
    return new Promise (( resolve, reject ) => { //puede ir sin parametros, pero se usa normalmente así
        if (heroe) {    
            setTimeout(() => {
                resolve (heroe); //puedo mandar n parametros
                
            }, 1000);
        } else {
            reject (`no existe el heroe con id ${id}`);
        }
    });
};

export const buscarHeroeAsync = async (id) => { //el async hace que no necesitemos retornar un new Promise
    
    const heroe = heroes[id];
    
    // return new Promise (( resolve, reject ) => { //puede ir sin parametros, pero se usa normalmente así
        if (heroe) {    
            // resolve (heroe); //puedo mandar n parametros
            return heroe;
        } else {
            // reject (`no existe el heroe con id ${id}`);
            throw Error (`no existe el heroe con id ${id}`);
        }
    // });
};

const promesaLenta = new Promise ( (resolve, reject) => {
    setTimeout( ()=> {
        resolve ('promesa lenta')
    }, 2000);
});
const promesaMedia = new Promise ( (resolve, reject) => {
    setTimeout( ()=> {
        resolve ('promesa media')
    }, 1500);
});
const promesaRapida = new Promise ( (resolve, reject) => {
    setTimeout( ()=> {
        resolve ('promesa rapida')
    }, 1000);
});


export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}


