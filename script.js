let  menuOn = true;
let respota =0;
while(menuOn == true){
  resposta = Number(prompt(`1 - Inserir produto
2 - Listar produtos
3 - Sair)`));
switch (resposta) {
  case 3:
    menuOn=false;
    break;
  case 2:
    alert("Você escolheu listar produto");
    resposta = 0;
    break;
  case 1:
    alert("Você escolheu inserir produto");
    resposta = 0;
    break;
  default:
    alert("Você não escolheu uma opção válida");
    break;
}
}