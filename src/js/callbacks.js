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

export const buscarHeroe = (heroeId, callback) => {
    
    const heroe = heroes[heroeId];

    if (heroe) {
        callback( null, heroe );
    } else {
        //error
        callback(`no existe un heroe con el id ${heroeId}`);
    }
};