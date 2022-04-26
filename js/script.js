
// Dropdown menu
btnFeatures = document.querySelector(".btn-features");
btnCompany = document.querySelector(".btn-company");

dropdownFeatures = document.querySelector(".dropdown-features");
dropdownCompany = document.querySelector(".dropdown-company");


btnFeatures.onclick = () => {
    // Verifica o tamanho da tela. Se a tela for <= 850px, a classe "active" será adicionada as respectivas tags.
    if(window.screen.width <= 850) {
        btnFeatures.classList.toggle("active");
        dropdownFeatures.classList.toggle("active");
    }
}

btnCompany.onclick = () => {
    if(window.screen.width <= 850) {
        btnCompany.classList.toggle("active");
        dropdownCompany.classList.toggle("active");
    }
}


// ===== MENU HAMBURGER ===== //
menuHamburger = document.querySelector(".menu-hamburger");
navbar = document.querySelector(".navbar");
background = document.querySelector(".background");


// Função adicionada ao menu hamburger quando o clicamos.
menuHamburger.onclick = () => {
    menuHamburger.classList.toggle("active");
    navbar.classList.toggle("active");
    background.classList.toggle("active");
}


// Função adicionada ao background que aparece ao clicarmos no menu hamburger.
// Quando clicamos no background, o menu automaticamente fecha.
background.onclick = () => {
    menuHamburger.classList.remove("active");
    navbar.classList.remove("active");
    background.classList.remove("active");
}


// Esta função faz com que o menu hamburger desapareça da tela quando esta tem mais de 850px de largura.
window.onresize = () => {
    if(window.screen.width >= 850) {
        btnFeatures.classList.remove("active");
        btnCompany.classList.remove("active");

        dropdownFeatures.classList.remove("active");
        dropdownCompany.classList.remove("active");

        menuHamburger.classList.remove("active");
        navbar.classList.remove("active");
        background.classList.remove("active");
    }
}


// Esta função fecha o menu hamburger (se estiver aberto) quando deslizamos a tela 
// (usando o scroll do mouse) para baixo ou para cima.
window.onscroll = () => {
    btnFeatures.classList.remove("active");
    btnCompany.classList.remove("active");

    dropdownFeatures.classList.remove("active");
    dropdownCompany.classList.remove("active");

    menuHamburger.classList.remove("active");
    navbar.classList.remove("active");
    background.classList.remove("active");
}
