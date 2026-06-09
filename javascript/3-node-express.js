// =========================================================================
// HACKATHON CHEATSHEET - SERVIDOR NODE.JS COM EXPRESS
// =========================================================================
// CONCEITO: Node.js tira o JS do navegador e roda no computador.
// Express é a ferramenta para montar rotas (endpoints) em poucos segundos.
// ANALOGIA DO GARÇOM: O Express é o garçom. O Front-end faz o pedido em uma 
// mesa (/api/pagamento), o garçom leva para a cozinha (código) e traz o prato feito (JSON).

// 1. IMPORTAÇÃO (Necessário rodar 'npm install express' no terminal antes)
const express = require('express');
const app = express();

// Middleware essencial: Ensina o Express a ler e entender o formato JSON recebido
app.use(express.json()); 

// 2. DEFINIÇÃO DE ROTAS (Endpoints)
// Rota do Tipo GET (Para buscar informações)
app.get('/api/status', (req, res) => {
    res.json({ status: "Online", mensagem: "Servidor de pagamentos ativo!" });
});

// Rota do Tipo POST (Para receber dados e processar, ex: submeter um pagamento)
app.post('/api/processar-pagamento', (req, res) => {
    let { valor, cartao } = req.body; // Pega os dados enviados pelo front-end
    
    // Regra de negócio rápida simulando aprovação
    let aprovado = valor < 500; 
    
    res.json({ 
        sucesso: aprovado, 
        protocolo: Math.floor(Math.random() * 10000) 
    });
});

// 3. START DO SERVIDOR
const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`Servidor rodando com sucesso em: http://localhost:${PORTA}`);
});