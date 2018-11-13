// parametro: quando você digita entre parênteses
// argumento: quando você chama
// '>'entrada '<'saida
// 2=(==) compara o conteúdo
// 3= (===) compara o TIPO
// Arrow Functions = Atribuir funções. No primeiro momento é uma forma diferente de escrever uma "function"



// function gerarAleatorio(minimo, maximo){

//     console.log(minimo);
//     console.log(maximo);

//     return minimo;
// }

// let valorAleatorio = gerarAleatorio(1,10);

function gerarAleatorio(minimo, maximo = 0){
    return Math.floor(Math.random()*(maximo - minimo + 1)) + minimo;
}

function rodarD20(){
    return gerarAleatorio(1, 20);
}