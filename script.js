let menuOn = true;
let num;
let média;
let quantidade = 0;
let soma = 0;
while (menuOn == true) {
  num = Number(prompt(`Digite números:`));
  while (isNaN(num)) {
    num = Number(
      prompt(`Resposta inválida! [somente números]. Digite novamente:`),
    );
  }
  if (num == 0) {
    menuOn = false;
  } else {
    soma += num;
    quantidade += 1;
  }
}

alert(`A quantidade de números digitados é ${quantidade}, a soma total é ${soma} e a média é ${soma/quantidade}`);