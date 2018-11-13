let minimoUsuario = Number(prompt('Escolha o valor minimo do jogo:'));
let maximoUsuario = Number(prompt('Escolha o valor maximo do jogo:'));
let numeroAleatorio = gerarAleatorio(minimoUsuario, maximoUsuario);
let vida = 5;

function avaliarParametro (){
    if(novoPalpite === gerarAleatorio){
        alert('Parabéns! Você ganhou!');
    }
    
    else{
        if (novoPalpite > numeroAleatorio){
            alert('Você errou o numero. Ele é maior que o numero sorteado.');
        }
        else{
            alert('Você errou o numero. Ele é menor que o numero sorteado.');
        }
    }
    pedirPalpite();
}


function pedirPalpite(){
    const novoPalpite = Number(prompt('Você consegue adivinhar qual é seu número?'));
    
    avaliarPalpite(novoPalpite);
}

pedirPalpite();

// console.log(numeroAleatorio);

// let qualSeuNumero = Number(prompt('Você consegue adivinhar qual é seu número?'));

// if(numeroAleatorio === qualSeuNumero){
//     alert('Parabéns!!! Você ganhou!!!');
// }
// else{
//     alert(`Parabéns!!! Você é ruim de chute : )`);
// }