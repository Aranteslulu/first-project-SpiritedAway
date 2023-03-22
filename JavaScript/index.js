//Pegando o elemento button (do carrosel).
const buttonsCarousel = document.querySelectorAll('.button');
const images = document.querySelectorAll('.image')


//Identificando o click do usuário no botao.
buttonsCarousel.forEach((button, index) => {
    button.addEventListener('click', () => {

        DesmarcarBotaoEclicar();

        SelecionarBotao(button);

        EsconderImagemActivate();

        ImagemDeAcordoComBotao(index);
    })
})


function ImagemDeAcordoComBotao(index) {
    images[index].classList.add('activate');
}

function SelecionarBotao(button) {
    button.classList.add('selected');
}

function EsconderImagemActivate() {
    const activateImage = document.querySelector('.activate');
    activateImage.classList.remove('activate');
}

function DesmarcarBotaoEclicar() {
    const selectedButton = document.querySelector('.selected');
    selectedButton.classList.remove('selected');
}
//index (indice) mostra o número dos elementos!!