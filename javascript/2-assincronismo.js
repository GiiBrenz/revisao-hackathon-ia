// =========================================================================
// HACKATHON CHEATSHEET - ASSINCRONISMO (async / await / fetch)
// =========================================================================
// CONCEITO: O JavaScript executa tudo de forma linear e ultra rápida.
// Se ele fizer um pedido para uma API externa e travar esperando a resposta,
// a tela inteira do seu sistema congela e o usuário acha que quebrou.

// ANALOGIA DO FAST FOOD: 
// fetch() -> É fazer o pedido no caixa do McDonald's. Você pega a senha e vai sentar.
// await   -> É o pager apitando na sua mão. Diz ao código: "Pare aqui e aguarde o lanche chegar".

async function chamarApiCamplog() {
    try {
        // Dispara a requisição (fetch) e o 'await' segura a execução até o servidor responder
        let resposta = await fetch("https://api.camplog.com/rotas/otimizada");
        
        // Pega o corpo do texto que chegou e converte de JSON para Objeto JS
        let rotaPerfeita = await resposta.json(); 
        
        console.log("Rota calculada com sucesso:", rotaPerfeita);
    } catch (erro) {
        // Bloco de segurança: Se o servidor da API cair, seu app não quebra, ele cai aqui.
        console.error("Erro crítico ao consultar o parceiro de logística:", erro);
    }
}

// Executa a função assíncrona
chamarApiCamplog();