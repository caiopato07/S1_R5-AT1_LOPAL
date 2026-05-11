let num = Number(prompt("Digite um número e eu direi a tabuada dele de 1 a 10:"));
while (isNaN(num)) {
  num = parseInt(Number(prompt("Resposta inválida! Digite um número e eu direi a tabuada dele de 1 a 10:")));
}

let mensagem = "";

for (let i = 1; i <= 10; i++) {
  mensagem += `${num*i} `;
  }

  

alert(`${mensagem}`);
