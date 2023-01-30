// Mouseover menu

var btnSer = document.querySelector("#btn-services");
var btnHeal = document.querySelector("#btn-health");

var menuHover = document.querySelector("#div-btn-services");
var menuHover2 = document.querySelector("#div-btn-health");


// BOTÃO 1 SERVICES
btnSer.addEventListener("mouseover", function () {
    menuHover.classList.add("exibe");
});

btnSer.addEventListener("mouseout", function () {
    menuHover.classList.remove("exibe");
});

// BOTÃO 2

btnHeal.addEventListener("mouseover", function () {
    menuHover2.classList.add("exibe");
});

btnHeal.addEventListener("mouseout", function () {
    menuHover2.classList.remove("exibe");
});

// BOX 1 - pra ficar fixo

menuHover.addEventListener("mouseover", function () {
    menuHover.classList.add("exibe");
});

menuHover.addEventListener("mouseout", function () {
    menuHover.classList.remove("exibe");
});

// BOX 2 - pra ficar fixo

menuHover2.addEventListener("mouseover", function () {
    menuHover2.classList.add("exibe");
});

menuHover2.addEventListener("mouseout", function () {
    menuHover2.classList.remove("exibe");
});


// MENU LATERL DIREITO

var btnBec = document.querySelector("#btn-become");
var btnAcc = document.querySelector("#btn-account");

var divBec = document.querySelector("#drop-become");
var divAcc = document.querySelector("#drop-account");

// BOTÃO 1

btnBec.addEventListener("mouseover", function () {
    divBec.classList.add("exibe");
});

btnBec.addEventListener("mouseout", function () {
    divBec.classList.remove("exibe");
});


// FIXAR

divBec.addEventListener("mouseover", function () {
    divBec.classList.add("exibe");
});

divBec.addEventListener("mouseout", function () {
    divBec.classList.remove("exibe");
});


// BOTÃO 2

btnAcc.addEventListener("mouseover", function () {
    divAcc.classList.add("exibe");
});

btnAcc.addEventListener("mouseout", function () {
    divAcc.classList.remove("exibe");
});

// FIXAR

divAcc.addEventListener("mouseover", function () {
    divAcc.classList.add("exibe");
});
divAcc.addEventListener("mouseout", function () {
    divAcc.classList.remove("exibe");
});