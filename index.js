const botaoMenu = document.querySelector('.cabecalhoMenu');
//Coloca que a constante "botaoMenu" vai ser igual a classe "cabecalhoMenu"
const menu = document.querySelector('.menuLateral');
//Coloca que a constante "Menu" vai ser igual a classe "menuLateral"

botaoMenu.addEventListener('click', () => {
    //Quando o botaoMenu "escutar" um click, ele faz o seguinte:
    menu.classList.toggle('menuLateralAtivo')
    //Troca(ou destroca (toggle)) a classe do "menuLateral" para "menuLateralAtivo".
})