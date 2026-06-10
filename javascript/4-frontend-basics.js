// =========================================================================
// JS FRONT-END: MANIPULAÇÃO DE DOM E EVENTOS
// =========================================================================

// 1. CAPTURANDO ELEMENTOS DA TELA
// Imagine que no seu HTML existe um botão (<button id="btn-pagar">) e um texto (<p id="status">)
const botao = document.getElementById('btn-pagar');
const statusTexto = document.getElementById('status');

// 2. ESCUTANDO EVENTOS (Quando o usuário interage)
// .addEventListener() fica vigiando o elemento. Quando o usuário clica, ele roda a função.
botao.addEventListener('click', async () => {
    
    // Mudando o texto e a cor usando JS direto na tela
    statusTexto.innerText = "Processando pagamento com IA...";
    statusTexto.style.color = "orange";
    
    // Simulando o que aprendemos: buscando dados de uma API real enquanto o usuário espera
    try {
        let resposta = await fetch("http://localhost:3000/api/status");
        let dados = await resposta.json();
        
        // Atualiza o Front-end com o resultado que veio do servidor
        statusTexto.innerText = "Pagamento Aprovado via " + dados.mensagem;
        statusTexto.style.color = "green";
    } catch (erro) {
        statusTexto.innerText = "Erro na transação.";
        statusTexto.style.color = "red";
    }
});