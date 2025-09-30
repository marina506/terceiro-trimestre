let numeroSecreto; // O número que o jogador precisa adivinhar 
let contadorDeChances = -1; // Começa na primeira chance
const MAX_CHANCES = 10; // Número máximo de chances

const campoPalpite = document.querySelector('#campoPalpite');
const botãoEnviarPalpite = document.querySelector('#botãoEnviarPalpite');
const botãoReiniciar = document.querySelector('#botãoIniciar');

const menssagemElement = document.querySelector('.menssagem');
const palpitesAnterioresElement = document.querySelector('.palpites-anteriores');
const dicaElement = document.querySelector('.dica');
const chancesRestantesElement = document.querySelector('#chancesRestantes');

let listaDePalpites = []; // Array para guardar os palpites que o jogador já deu

function IniciarJogo(){
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    console.log('Número Secreto (apenas para teste):', numeroSecreto);
} 
// Resetar o contador de chances 
contadorDeChances = 1;
chancesRestantesElement.textContent = MAX_CHANCES; // Mostra o total de chances 

// Limpar as mensagens anteriores
mensagemElement.text = ''
listaDePalpites = [];


mensagemElemen.style.color = '#f0f0f0'; // Cor padrão do texto
dicaElement.style.color = '#ffe3b'; // Cor padrão da dica


// Reativar o campo de palpite e o botão de enviar 
campoPalpite.disabled = false;
botaoEnviarPalpite.disabled = false;
campoPalpite.value = ''; //Limpa o campo de entrada













