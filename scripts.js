mensagem = document.querySelector('#botao')

mensagem.addEventListener('click', function() {
    alert('Tenha um ótimo dia!');
});

let alterarFundo = document.querySelector('#cor')

alterarFundo.addEventListener('click', function() {
    document.body.classList.toggle('cruzeiro');
});

let i = 0;
function mudarFoto(direcao)
{
    const imagens = document.getElementById('img_car');
    const totalImagens = imagens.children.length;
    const larguraCarrossel = imagens.parentElement.clientWidth;
    
    i = i + direcao;

    if (i >= totalImagens) {
        i = 0;
      } else if (i < 0) {
        i = totalImagens - 1;
    }

    imagens.style.transform = `translateX(${-i * larguraCarrossel}px)`;
}