var name = alert("Escolha correta! Você conseguiu avançar para a próxima fase!");

function Submit(){
  var numeroDoUsuario = prompt("Digite sua escolha")
  while (numeroDoUsuario != "1" && numeroDoUsuario != "2" ){
    numeroDoUsuario = prompt("Digite sua escolha")
  }
  if ( numeroDoUsuario === "1" ){
    location.href = './kemi3.html'
  }
  else {
    location.href = '../final/index3.html'
  }
}