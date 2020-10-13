console.log('hola')

function foo() {

}

function bar(delay) {
    setTimeout(foo, delay);
}


const baz = (delay) => {
    return new Promise ((resolve,reject) => {
        
        if (delay > 100) {
            setTimeout( ()=>{
                foo();
                resolve (`demoré ${delay}`);
            },delay)
        } else {
            reject ('hubo un error');
        }
    })
};

baz(500)
    .then( resp=> console.log(resp))
    .catch( err => console.log(err));