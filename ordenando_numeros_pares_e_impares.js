// Ordenando Números Pares e Ímpares

/* Crie um programa onde você receberá valores inteiros não negativos como
entrada.
Ordene estes valores de acordo com o seguinte critério:

- Primeiro os Pares
- Depois os Ímpares
- Você deve exibir os pares em ordem crescente e na sequência os ímpares em
ordem decrescente.

- Entrada
A primeira linha de entrada contém um único inteiro positivo N (1 < N < 10000)
Este é o número de linhas de entrada que vem logo a seguir. As próximas N
linhas terão, cada uma delas, um valor inteiro não negativo.

- Saída
Exiba todos os valores lidos na entrada segundo a ordem apresentada acima. Cada
número deve ser impresso em uma linha, conforme exemplo de saída abaixo.

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

let totalItems = parseInt(gets());
let pares = [];
let impares = [];

for (let i = 0; i <          ; i++) {
  let number = parseInt(gets());
  if (              ){
    pares.push(number);
  }
  else {
    impares.push(number);
  }
}
pares.sort((a, b) =>       );
impares.sort((a, b) =>        );

for(let i = 0; i < pares.length;i++){
  print(        )
}
for(let i = 0; i < impares.length;i++){
  print(          )
}
