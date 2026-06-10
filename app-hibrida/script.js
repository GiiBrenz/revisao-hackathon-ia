const botaoAnalise = document.getElementById("btn-analisar");
const painel = document.getElementById("painel-resultado");

botaoAnalise.addEventListener("click", async () => {
    // Feedback visual imediato
    painel.innerText = "Conectando com o servidor Python...";
    painel.style.color = "orange";
    
    try {
        // Faz o pedido na porta exata onde o servidor.py está rodando
        let resposta = await fetch("http://localhost:5000/api/analise-ia");
        
        // Desempacota o JSON recebido
        let dados = await resposta.json();
        
        // Atualiza a tela com os dados formatados
        painel.innerText = `[${dados.tecnologia}] Risco: ${dados.nivel_risco} -> Decisão: ${dados.acao}`;
        painel.style.color = dados.nivel_risco === "Baixo" ? "green" : "red";
        
    } catch (erro) {
        painel.innerText = "Erro de conexão: O servidor Python está rodando no terminal?";
        painel.style.color = "red";
    }
});