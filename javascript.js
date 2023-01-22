
var x = document.getElementById("barradenavegacao")


function barradenavegacao() {

  var x = document.getElementById("barradenavegacao")

    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
}



function login() {
    
    document.getElementById("removerscroll").style.overflow= "hidden";
    document.getElementById('displaylogin').style.display = "block";

    x.classList.remove("responsive");
}


function fecharlogin() {
    document.getElementById("removerscroll").style.overflow= "visible";
    document.getElementById('displaylogin').style.display = "none";
    document.getElementById('dadosincorretos').style.visibility = "hidden";
}


function alerta1() {
alert("Obrigado pela sua doação!");
}


function alerta2() {
alert("As incrições ainda não estão abertas!");
}


function sugestao() {
  alert("Obrigado pela sua sugestão!");
  window.location = "Eventos.html";
}


function subscricao() {
  alert("Subscrição efetuada com sucesso!");
}


function candidatura() {
    alert("Candidatura enviada com sucesso!")
    window.location = " Quemsomos.html";
}


/*--------------------------------------------------------------------------------------*/
/*Login e Registro*/



function validarlogin(){
    
    var username = document.querySelector('#email');
    var password = document.querySelector('#password');
  
    if(username.value == "utilizador1@gmail.com" && password.value == "utilizador1"){
      alert("Login com sucesso!")
      window.location = "WWF.html";
    }
        else{
          document.querySelector('#dadosincorretos').style.visibility = "visible";
    }
}

function registro() {
    alert("Registado com sucesso!")
    window.location = "WWF.html";
}



/*--------------------------------------------------------------------------------------*/
/*Slideshow*/



var slide= 0;
mostrarSlides();

function mostrarSlides() {

    var i;
    var slides = document.getElementsByClassName("Slides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slide++;

    if (slide > slides.length) {
        slide = 1
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dotativo", "");
    }

    slides[slide - 1].style.display = "block";
    dots[slide - 1].className += " dotativo";
    setTimeout(mostrarSlides, 3500);
    
}