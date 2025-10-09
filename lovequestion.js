const botaoSim = document.getElementById('sim');
const botaoNao = document.getElementById('nao');
const Mensagem = document.getElementById('mensagem');

//Quando clicar em sim
botaoSim.addEventListener('click', () => {
    Mensagem.TextContent = "Aaaawn 💞 Obrigada! Você fez a escolha certa 😍!"
});
//Quando tentar clicar em Não
botaoNao.addEventListener('mouseover', ()=> {
    //Gera posições aleatórias dentro da janela
    const x = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
     const y = Math.random() * (window.innerHeight - botaoNao.offsetHeight);

botaoNao.style.position = 'absolute';
botaoNao.style.left = `${x}px`;
botaoNao.style.top = ` ${x}px `
})
