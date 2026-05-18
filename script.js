let  menuOn = true;
let respota =0;
while(menuOn == true){
  resposta = Number(prompt(`1 - Inserir produto
2 - Listar produtos
3 - Sair)`));
  if (resposta == 3) {
    menuOn=false;
}
  if (resposta == 1){
    alert("Você escolheu inserir produto");
    resposta = 0;
  }
  if(resposta ==2){
    alert("Você escolheu listar produto");
    reposta = 0;
  }
}