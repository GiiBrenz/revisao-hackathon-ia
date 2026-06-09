// =========================================================================
// HACKATHON CHEATSHEET - OPERADORES AVANÇADOS & JSON
// =========================================================================

// -------------------------------------------------------------------------
// 1. OPERADOR TERNÁRIO (If/Else de uma única linha)
// -------------------------------------------------------------------------
// Uso rápido: Para tomar decisões simples de atribuição sem abrir um bloco enorme.
let idade = 20;
let status = (idade >= 18) ? "Aprovado" : "Negado"; // (condição) ? se_verdadeiro : se_falso


// -------------------------------------------------------------------------
// 2. DESESTRUTURAÇÃO (Destructuring)
// -------------------------------------------------------------------------
// Uso rápido: Para "extrair" dados de dentro de um objeto da API sem criar várias linhas.
let apiResponse = { statusPagamento: "OK", valor: 150.00, idTransacao: 9942 };

// Em vez de fazer 'let valor = apiResponse.valor', fazemos direto:
let { statusPagamento, valor } = apiResponse; 
// Pronto! Agora você tem as variáveis 'statusPagamento' e 'valor' soltas para usar.


// -------------------------------------------------------------------------
// 3. OPERADOR SPREAD (...)
// -------------------------------------------------------------------------
// Uso rápido: Para "esparramar" ou clonar os itens de um array/objeto dentro de outro.
let rotasZonaleste = ["Itaquera", "Tatuapé"];
let todasAsRotas = [...rotasZonaleste, "Consolação", "Caieiras"]; 
// Resultado final: ["Itaquera", "Tatuapé", "Consolação", "Caieiras"]


// -------------------------------------------------------------------------
// 4. JSON (JavaScript Object Notation) - O "Inglês" da Internet
// -------------------------------------------------------------------------
// CONCEITO: O Front-end só fala Português e o Back-end do banco só fala Japonês.
// O JSON é o formato universal de texto que as duas pontas conseguem decifrar.

let entrega = { id: 101, destino: "PUC-SP" }; // Isso é um OBJETO (Só o JS entende)

// JSON.stringify() -> Transforma o Objeto em TEXTO string para poder enviar na rede.
let pacoteTextoJSON = JSON.stringify(entrega); 

// JSON.parse() -> Pega o TEXTO string enviado pela API e transforma de volta em Objeto JS.
let dadosFinais = JSON.parse('{"status":"Em andamento", "motoca":"Carlos"}');
console.log(dadosFinais.motoca); // Saída: Carlos