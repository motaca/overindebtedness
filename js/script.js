

// ---FUNÇÃO DE TRANSIÇÃO ENTRE SEÇÕES A PARTIR DO MUNU HORIZONTAL---
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// ---FIM---

// FORM CONTATO
  var formularioContato = document.querySelector(".formularioContato");
  var nomeContato =  document.querySelector(".formularioContato input.nome");
  var emailContato =  document.querySelector(".formularioContato input.email");
  var mensagemContato = document.querySelector(".formularioContato textarea.mensagem")
  
  function ficarVemelhoContato() {
    nomeContato.classList.add("formErrado");
    emailContato.classList.add("formErrado");
    mensagemContato.classList.add("formErrado");
  }

  function mostrarErroContato() {
    
    if (nomeContato.value == "" || emailContato.value == "" || mensagemContato.value == "") {

        ficarVemelhoContato();
        return true;
    }

    return false;
  }

  formularioContato.addEventListener("submit", function(event) {
    event.preventDefault();

    // event.stopPropagation();
    if(mostrarErroContato()) {
      return;
    }

    nomeContato.value = "";
    emailContato.value = "";
    mensagemContato.value = "";

  })


 // FIM FORM CONTATO 
