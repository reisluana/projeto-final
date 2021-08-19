var nome2 = prompt("Digite seu nome")
    
alert("Olá" + " " +nome2+ "!");

function Submit(){
    var numeroDoUsuario = prompt("Digite sua escolha")
    while (numeroDoUsuario != "1" && numeroDoUsuario != "2" ){
        numeroDoUsuario = prompt("Digite sua escolha")
    }
    if ( numeroDoUsuario === "1" ){
        location.href = '../final/index3.html'
    }
    else {
        location.href = './kemi2.html'
    }
}