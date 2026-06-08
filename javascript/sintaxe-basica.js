/*
==============================================================
                    Revisão Basica JavaScript
==============================================================
*/


// ====== Declaração de variavel ======
let name = "Hackathon";   // pode ser reatribuida;
const ano = 2026;         //não pode ser reatribuida;
// ano = 2027 -> daria erro!

// ====== Strings e Concatenações ======
let tech = "IA";         
console.log(`Vamos usar ${tech} no projeto`);

// ====== Arrays ======
let linguagens = ["JS", "Python", "Java"];

// Adicionar ao final
linguagens.push("C++");

//Tamanho do Array
console.log(linguagens.length);

//Pegar o primeiro item
console.log(linguagens[0]);

// Retirar do final
linguagem_removida = linguagens.pop(); // retirou C++ e guardou na variavel.

// Retirar o primeiro
linguagens.shift();

// ====== Condicionais ======
let nota = 8;

if (nota >= 9){
    console.log("Excelente!");
}else if(nota >= 6){
    console.log("Bom");
}else{
    console.log("Reprovado!");
}

// ====== Loops ======
let nomes = ["Geovanna", "Amora", "Nicolas", "Messi"];

// Loop for classico
for( let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

//Loop for moderno
for( let nome of nomes){
    console.log(nome);
}

// While
let contador = 0;
while(contador < 3){
    console.log(contador);
    contador ++;
}

// ====== Funções ======

// função tradicional;
function somar (a,b){
    return a + b;
}

// Arrow Function
const multiplicar = (a,b) => a * b;

console.log(somar(2,3));

