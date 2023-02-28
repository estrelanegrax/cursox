const slideContainer = document.getElementById('slide-container');
const slideItems = document.querySelectorAll('.slide-item');
const arrowPrev = document.querySelector('.slide-arrow.prev');
const arrowNext = document.querySelector('.slide-arrow.next');
const slideButtons = document.querySelectorAll('.slide-button');

let currentSlide = 0;
let slideInterval;

function nextSlide() {
  slideItems[currentSlide].classList.remove('active');
  slideButtons[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slideItems.length;
  slideItems[currentSlide].classList.add('active');
  slideButtons[currentSlide].classList.add('active');
}

function prevSlide() {
  slideItems[currentSlide].classList.remove('active');
  slideButtons[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slideItems.length) % slideItems.length;
  slideItems[currentSlide].classList.add('active');
  slideButtons[currentSlide].classList.add('active');
}

arrowNext.addEventListener('click', () => {
  nextSlide();
});

arrowPrev.addEventListener('click', () => {
  prevSlide();
});

for (let i = 0; i < slideButtons.length; i++) {
  slideButtons[i].addEventListener('click', () => {
    slideItems[currentSlide].classList.remove('active');
    slideButtons[currentSlide].classList.remove('active');
    currentSlide = i;
    slideItems[currentSlide].classList.add('active');
    slideButtons[currentSlide].classList.add('active');
  });
}

slideInterval = setInterval(nextSlide, 5000);
slideContainer.addEventListener('mouseover', () => {
  clearInterval(slideInterval);
  slideContainer.classList.add('draggable');
});
slideContainer.addEventListener('mouseout', () => {
  slideInterval = setInterval(nextSlide, 5000);
  slideContainer.classList.remove('draggable');
});


function salvarCookies() {
  var data_expiracao = new Date();
  data_expiracao.setTime(data_expiracao.getTime() + (24 * 60 * 60 * 1000)); // expiração em 24 horas
  document.cookie = "nome_do_cookie=valor_do_cookie; expires=" + data_expiracao.toUTCString() + "; path=caminho_do_cookie";
  document.getElementById("cookie-overlay").style.display = "none";
}

function recusarCookies() {
  var data_expiracao = new Date();
  data_expiracao.setTime(data_expiracao.getTime() + (24 * 60 * 60 * 1000)); // expiração em 24 horas
  document.cookie = "nome_do_cookie_recusado=" + data_expiracao.toUTCString() + "; expires=" + data_expiracao.toUTCString() + "; path=caminho_do_cookie";
  document.getElementById("cookie-overlay").style.display = "none";
}

var cookie_aceito = false;
if (document.cookie.indexOf("nome_do_cookie") != -1) {
  cookie_aceito = true;
}

if (!cookie_aceito) {
  var cookie_recusado = false;
  if (document.cookie.indexOf("nome_do_cookie_recusado") != -1) {
    var data_cookie_recusado = new Date(document.cookie.match('nome_do_cookie_recusado=([^;]+)')[1]);
    var data_atual = new Date();
    var tempo_decorrido = (data_atual - data_cookie_recusado) / (60 * 60 * 1000);
    if (tempo_decorrido >= 24) {
      cookie_recusado = true;
    }
  } else {
    cookie_recusado = true;
  }

  if (cookie_recusado) {
    document.getElementById("cookie-overlay").style.display = "block";
  }
}



 // Configurações do WhatsApp
  var whatsapp_number = "5521980479665";
  var whatsapp_text = "";
  
  // Ao enviar o formulário, abre o WhatsApp com a mensagem preenchida
  document.getElementById("whatsapp-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var empresa = document.getElementById("empresa").value;
    var mensagem = document.getElementById("mensagem").value;
    var texto = encodeURIComponent(whatsapp_text + "\n\n" + "Nome: " + nome + "\n" + "Empresa: " + empresa + "\n" + " " + mensagem);
    var whatsapp_url = "https://wa.me/" + whatsapp_number + "?text=" + texto;
    window.open(whatsapp_url, "_blank");
  });
  
  // Abre e fecha o widget do WhatsApp
  document.querySelector(".chat-icon").addEventListener("click", function() {
    document.querySelector(".chat-widget").classList.add("open");
  });
  
  document.querySelector(".chat-close").addEventListener("click", function() {
    document.querySelector(".chat-widget").classList.remove("open");
  });
  
   const chatIcon = document.querySelector('.chat-icon');
  const chatWidget = document.querySelector('.chat-widget');
  const chatClose = document.querySelector('.chat-close');

  chatIcon.addEventListener('click', () => {
    chatWidget.classList.add('open');
  });

  chatClose.addEventListener('click', () => {
    chatWidget.classList.remove('open');
  });