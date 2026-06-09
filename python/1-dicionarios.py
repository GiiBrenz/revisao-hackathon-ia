# =========================================================================
# HACKATHON CHEATSHEET - DICIONÁRIOS PYTHON
# =========================================================================
# CONCEITO: É o primo direto do Objeto do JavaScript e do JSON. Organiza os 
# dados através de pares de "Chave" e "Valor". Essencial para estruturar 
# dados rápidos antes de enviá-los para um DataFrame ou API.

# 1. CRIAÇÃO DE UM DICIONÁRIO
transacao = {
    "estabelecimento": "Hackathon Payment Shift",
    "valor": 249.90,
    "status": "Aprovado",
    "tags": ["tecnologia", "educação"]
}

# 2. ACESSANDO OS VALORES
print(transacao["estabelecimento"])  # Saída: Hackathon Payment Shift
# Dica de segurança: .get() evita que o código estoure erro caso a chave não exista
print(transacao.get("cliente", "Não Informado"))  # Saída: Não Informado

# 3. MODIFICANDO E ADICIONANDO CHAVES
transacao["status"] = "Estornado"  # Altera o valor existente
transacao["fraude_detectada"] = False  # Cria uma chave nova direto