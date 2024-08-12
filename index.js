document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === '' || email === '' || mensagem === '') {
        mostrarResultado('Por favor, preencha todos os campos.', 'error');
    } else {
        mostrarResultado(`Obrigado ${nome}, seus dados foram enviados com sucesso!`, 'success');
    }
});

function mostrarResultado(mensagem, tipo) {
    const resultado = document.getElementById('resultado');
    resultado.textContent = mensagem;
    resultado.className = tipo;
    resultado.style.color = tipo === 'success' ? 'green' : 'red';
}