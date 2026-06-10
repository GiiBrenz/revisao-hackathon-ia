// Passo 1: Capturar os elementos da tela que vamos usar e alterar
const botaoBuscar = document.getElementById('btn-buscar');
const painelResultado = document.getElementById('painel');

// Passo 2: Criar o "Ouvinte de Eventos" (O Gatilho)
botaoBuscar.addEventListener('click', async () => {
    
    // Feedback visual imediato para o usuário não achar que travou
    painelResultado.innerText = "Buscando caminhão...";
    
    try {
        // Passo 3: Assincronismo (O 'await' diz: vá lá na API e me espere aqui)
        // (Usando uma API pública de CEP como simulação da Camplog)
        let resposta = await fetch('https://viacep.com.br/ws/01302907/json/');
        
        // Passo 4: Transformar o texto que chegou em Objeto (Desempacotar o JSON)
        let dados = await resposta.json();
        
        // Passo 5: Manipulação do DOM (A Reação)
        painelResultado.innerText = `Caminhão localizado na rua: ${dados.logradouro}, Bairro: ${dados.bairro}`;
        painelResultado.style.color = "green";
        
    } catch (erro) {
        painelResultado.innerText = "Erro na comunicação com a Camplog.";
        painelResultado.style.color = "red";
    }
});