/* ==========================================
E² ENGENHARIA DO AR
SCRIPT.JS
========================================== */

/* ===========================
MENU AO ROLAR
=========================== */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("scroll");

}else{

header.classList.remove("scroll");

}

});


/* ===========================
ROLAGEM SUAVE
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const alvo=document.querySelector(this.getAttribute("href"));

if(alvo){

alvo.scrollIntoView({

behavior:"smooth"

});

}

});

});


/* ===========================
BOTÃO VOLTAR AO TOPO
=========================== */

const topo=document.createElement("button");

topo.innerHTML="↑";

topo.className="topo";

document.body.appendChild(topo);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topo.classList.add("mostrar");

}else{

topo.classList.remove("mostrar");

}

});

topo.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/* ===========================
REVELAR ELEMENTOS
=========================== */

const revelar=document.querySelectorAll(

".card,.grid div,.engenheiros div,.beneficios li"

);

const aparecer=()=>{

const altura=window.innerHeight;

revelar.forEach(el=>{

const pos=el.getBoundingClientRect().top;

if(pos<altura-100){

el.classList.add("ativo");

}

});

};

window.addEventListener("scroll",aparecer);

aparecer();


/* ===========================
CONTADOR
=========================== */

const numeros=document.querySelectorAll(".numero");

const animar=()=>{

numeros.forEach(numero=>{

const alvo=+numero.dataset.numero;

let atual=0;

const incremento=alvo/80;

const atualizar=()=>{

atual+=incremento;

if(atual<alvo){

numero.innerText=Math.floor(atual);

requestAnimationFrame(atualizar);

}else{

numero.innerText=alvo;

}

};

atualizar();

});

};

const secao=document.querySelector(".numeros");

if(secao){

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animar();

observer.disconnect();

}

});

});

observer.observe(secao);

}


/* ===========================
EFEITO PARALLAX
=========================== */

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const y=window.pageYOffset;

if(hero){

hero.style.backgroundPositionY=y*0.4+"px";

}

});


/* ===========================
FORMULÁRIO
=========================== */

const form = document.querySelector("#contato-form") || document.querySelector("form");
const statusMsg = document.querySelector("#form-status");

if(form){

form.addEventListener("submit", async (e) => {

e.preventDefault();

const btn = form.querySelector("button");

const textoOriginal = btn.textContent;

btn.disabled = true;

btn.textContent = "Enviando...";

if (statusMsg) {

statusMsg.style.display = "block";

statusMsg.style.color = "#003C78";

statusMsg.textContent = "Enviando sua mensagem...";

}

try {

const formData = new FormData(form);

const response = await fetch("https://formsubmit.co/ajax/e2.engenhariadoar@gmail.com", {

method: "POST",

headers: {

'Accept': 'application/json'

},

body: formData

});

const result = await response.json();

if (response.ok) {

if (statusMsg) {

statusMsg.style.color = "#28a745";

statusMsg.textContent = "✔ Mensagem enviada com sucesso! Em breve entraremos em contato.";

} else {

alert("✔ Mensagem enviada com sucesso! Em breve entraremos em contato.");

}

form.reset();

} else {

throw new Error(result.message || "Erro no envio");

}

} catch (err) {

console.error("Erro ao enviar formulário:", err);

if (statusMsg) {

statusMsg.style.color = "#dc3545";

statusMsg.textContent = "✖ Ocorreu um erro ao enviar. Por favor, tente novamente ou entre em contato pelo WhatsApp.";

} else {

alert("✖ Ocorreu um erro ao enviar. Por favor, tente novamente ou entre em contato pelo WhatsApp.");

}

} finally {

btn.disabled = false;

btn.textContent = textoOriginal;

}

});

}


/* ===========================
MENU MOBILE
=========================== */

const menu=document.querySelector("nav");

const botao=document.createElement("div");

botao.className="menuMobile";

botao.innerHTML='<i class="fa-solid fa-bars"></i>';

header.querySelector(".container").prepend(botao);

botao.onclick=()=>{

menu.classList.toggle("abrir");

};


/* ===========================
ANO AUTOMÁTICO
=========================== */

const rodape=document.querySelector("footer");

if(rodape){

const ano=document.createElement("p");

ano.innerHTML="© "+new Date().getFullYear()+" E² Engenharia do Ar";

rodape.appendChild(ano);

}