// Criação da lista inicial de participantes
let listaInscritos = [];

// Adicionando participantes com push()
listaInscritos.push("João Silva");
listaInscritos.push("Maria Santos");
listaInscritos.push("Pedro Almeida");

// Exibindo a lista atual e a quantidade de inscritos
console.log("Lista inicial:", listaInscritos);
console.log("Quantidade de inscritos:", listaInscritos.length);

// Adicionando nova participante: Ana Pereira
console.log("Antes de adicionar Ana Pereira:", listaInscritos);
listaInscritos.push("Ana Pereira");
console.log("Depois de adicionar Ana Pereira:", listaInscritos);

// Adicionando participante VIP no início: Carlos Mendes
console.log("Antes de adicionar Carlos Mendes:", listaInscritos);
listaInscritos.unshift("Carlos Mendes");
console.log("Depois de adicionar Carlos Mendes:", listaInscritos);

// Removendo o último participante (simulando saída de Pedro Almeida)
let removidoUltimo = listaInscritos.pop();
console.log("Participante removido (último):", removidoUltimo);
console.log("Lista após remoção do último:", listaInscritos);

// Removendo o primeiro participante (Carlos Mendes para lista especial)
let removidoPrimeiro = listaInscritos.shift();
console.log("Participante removido (primeiro):", removidoPrimeiro);
console.log("Lista após remoção do primeiro:", listaInscritos);

// Ordenando a lista em ordem alfabética
console.log("Antes da ordenação alfabética:", listaInscritos);
listaInscritos.sort();
console.log("Depois da ordenação alfabética:", listaInscritos);