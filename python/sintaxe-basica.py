
#==============================================================
#                    Revisão Basica Python
#==============================================================

# ====== Declaração de Variavel ======
nome = "Hackathon" # Cria e já atribui
ano = 2026         # Python não tem "constantes" reais, mas por convenção usamos MAIÚSCULAS para indicar (ex: ANO = 2026)

# ====== Strings e Concatenação ======
tech = "IA"
print(f"Vamos usar {tech} no projeto!")

# ====== Listas (Python) ======
linguagens = ["JS", "Python", "Java"]

# Adicionar ao final
linguagens.append("C++")

# Tamanho da lista
print(len(linguagens))

# Pegar o primeiro item
print(linguagens[0])

# Remover Ultimo
linguagens = ["JS", "Python", "Java", "C++"]

# Remove o último item ("C++") e guarda na variável
linguagem_removida = linguagens.pop()

print(linguagens)         # Resultado: ['JS', 'Python', 'Java']
print(linguagem_removida) # Resultado: C++

# ====== Condicionais ======
nota = 8

if nota >= 9:
    print("Excelente")
elif nota >= 7:
    print("Bom")
else:
    print("Precisa melhorar")

# ====== Loops ======
nomes = ["Grazielle", "Isabela", "Luana"]

# Loop For (muito mais direto)
for nome in nomes:
    print(nome)

# Se precisar do índice, use range() ou enumerate()
for i in range(len(nomes)):
    print(nomes[i])

# While
contador = 0
while contador < 3:
    print(contador)
    contador += 1 # Python não tem "++"

# ====== Funções ======
# Função tradicional
def somar(a, b):
    return a + b

print(somar(2, 3))