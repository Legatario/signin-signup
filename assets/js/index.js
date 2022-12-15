if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "./assets/html/signin.html";
}

const naviMenu = document.querySelector('#naviMenu')

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado.nome}`;

const infologin = document.querySelector("#infologin");
infologin.innerHTML = `Ultima atualização ${userLogado.login}`;


if(userLogado.logout){
  const infologout = document.querySelector("#infologout");
  infologout.innerHTML = `Ultima vez que deslogou ${userLogado.logout}`;
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

function toggleMenu(){
  naviMenu.classList.toggle("active")
}


// OSM mapa

var map = L.map('map').setView([ -23.45977527464902, -46.67661666870117], 14);

var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 16,
    minZoom: 2 
});

osm.addTo(map);

// fim OSM map