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


// BOTOES SERVICOS

var divServices = document.querySelector(".box_services");

var arrayServices = document.querySelectorAll(".link-icons"); //link

    // console.log(arrayServices);

    arrayServices.forEach(link => {
   
        link.addEventListener("click", (e) => {
            e.preventDefault();
            
            divServ = link.textContent;  // pega somente o conteúdo em texto
            divServ = divServ.toLowerCase();  // converte o texto para minustulo
            var nomeServ = divServ.replace(/([^\w]+|\s+)/g, '-'); //remove caracteres especiais e espaços
                     
            var arrayDiv = document.querySelectorAll("." + nomeServ);

            // console.log(nomeServ);

            if(nomeServ == "Walk"){

                document.querySelector(".walkdefaul1").classList.remove("oculta");
                document.querySelector(".walkdefaul2").classList.remove("oculta");        
    
            }else{
                
                arrayServices.forEach(linkClass => {           // Borda nos links services
                    linkClass.classList.remove("link-active"); // Borda nos links services
                })
                    link.classList.add("link-active");         // Borda nos links services


            var boxOcu = document.querySelectorAll(".boxOculto");
            boxOcu.forEach(boxOculto => {

                boxOculto.classList.add("oculta");

                // console.log(boxOculto);
            })
            
            arrayDiv.forEach(divClass => {    
                
                divClass.classList.remove("oculta");

                });               
                
            }

         });
     
    });

