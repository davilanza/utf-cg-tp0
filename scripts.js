mensagem = document.querySelector('#botao')
mensagem.addEventListener('click', function() {
    alert('Tenha um ótimo dia!');
});

let alterarCor = document.querySelector('#cor')
alterarCor.addEventListener('click', function() {
    document.body.style.backgroundColor = 'rgb(45, 32, 216)';
});

