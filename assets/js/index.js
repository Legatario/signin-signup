if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "./assets/html/signin.html";
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado.nome}`;

document.write (`<h1> Ultima atualização ${userLogado.login}</h1>`)

if(userLogado.logout){
  document.write (`<h2> Ultima atualização ${userLogado.logout}</h2>`)
}

function sair() {
  logoutUpdate()
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "./assets/html/signin.html";
}

function logoutUpdate(){
  dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");
  monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho","agosto","setembro", "outubro", "novembro", "dezembro");
  now = new Date
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  console.log(userLogado)
  console.log(listaUser)
  
  listaUser.forEach((item) => {
    if(userLogado.user == item.userCad && userLogado.senha == item.senhaCad){
      item.logout = dayName[now.getDay() ] + ", " + now.getDate () + " de " + monName[now.getMonth()] + " de "  + now.getFullYear() + " as " + now.getHours() + ":" + minutes()
      localStorage.setItem('listaUser', JSON.stringify(listaUser))
      
    }
  })
}

function minutes(){
  if(now.getMinutes() <=9){
    return "0"+now.getMinutes()
  }
  else{
    return now.getMinutes()
  }
}