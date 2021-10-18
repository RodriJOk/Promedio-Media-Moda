//Promedio o Media Aritmetica

const lista = [
    100, 
    200, 
    300, 
    500
];

let sumaLista = 0;

for(let i = 0; i< lista.length; i++){
    sumaLista = sumaLista + lista[i];
}

function obtenerPromedio(sumaLista, lista){
    const valor = sumaLista / lista.length
    return valor;
}

//Mediana 
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length
    return promedioLista;
}

function calcularMedia(listaMedia){
    const ordenarLista = listaMedia.sort(function(a, b){
        return a - b
    });
    console.log("La lista ordenada, queda de esta manera", ordenarLista);

    const mitadLista1 = parseInt(listaMedia.length / 2); 
    
    function esPar(numerito){
        if(numerito % 2 === 0){
            return true;
        }else{
            return false;
        }
    }
    
    let mediana;
    
    if(esPar(listaMedia.length)){
        console.log("El array es par")
        const elemento1 = listaMedia[mitadLista1 - 1];
        const elemento2 = listaMedia[mitadLista1]; 
        console.log(elemento1)
        console.log(elemento2)

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ])
    
        mediana = promedioElemento1y2;
        console.log("La media del array ingresado es de: ", mediana);
    }else{    
        mediana = listaMedia[mitadLista1];
        console.log("La media del array ingresado es de: ", mediana);
    }
}

calcularMedia([12, 3, 56, 900, 32, 6])

const listaModa = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1, 5, 4];

const listaUnoCount = {};

listaModa.map(function(element){
    if(listaUnoCount [element]){
        listaUnoCount [element] = listaUnoCount [element] + 1;
    }else{
        listaUnoCount [element] = 1;
    }
})

//En el caso de values, solo nos devuelve un array con todos los valores de un objeto
const listaModaArray = Object.entries(listaUnoCount).sort(function(valorAcumulado, nuevoValor){
    return valorAcumulado - nuevoValor
});


//En el caso de entries, lo que nos devuelve son tantos arrays como objetos tengamos. 

//const listaModaArray = Object.entries(listaUnoCount);

const moda = listaModaArray[listaUnoCount.length - 1]