let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar(){
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []

  dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");
  monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho","agosto","setembro", "outubro", "novembro", "dezembro");
  now = new Date
  
  let userValid = {
    nome: null,
    user: null,
    senha: null,
    login: '',
    logout: ''
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser?.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){

      item.login = dayName[now.getDay() ] + ", " + now.getDate () + " de " + monName[now.getMonth()] + " de "  + now.getFullYear() + " as " + now.getHours() + ":" + minutes()

      localStorage.setItem('listaUser', JSON.stringify(listaUser))

      userValid = {
         nome: item.nomeCad,
         user: item.userCad,
         senha: item.senhaCad,
         login: item.login,
         logout: item.logout
       }
      
    }
  })
   
  if(usuario.value == userValid.user && senha.value == userValid.senha){
    window.location.href = '../../index.html'
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
  } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  }
  
}

function minutes(){
  if(now.getMinutes() <=9){
    return "0"+now.getMinutes()
  }
  else{
    return now.getMinutes()
  }
}


