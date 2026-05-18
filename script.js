let soma = 0;
let mensagem = "";
for (let i = 1; i <= 10; i++) {
  soma += i;
  mensagem += `${soma-i}+${i} = ${soma}.     `
  }
alert(`${mensagem}`);
alert(`Portanto, o resultado dessas somas no final é ${soma}.`);
