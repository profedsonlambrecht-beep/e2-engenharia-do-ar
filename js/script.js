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

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(

"Obrigado! Recebemos sua solicitação. Em breve nossa equipe entrará em contato."

);

form.reset();

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