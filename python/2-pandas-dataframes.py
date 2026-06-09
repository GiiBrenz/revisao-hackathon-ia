# =========================================================================
# HACKATHON CHEATSHEET - PANDAS & DATAFRAMES
# =========================================================================
# CONCEITO: Python puro lê arquivos linha por linha de forma lenta. 
# O Pandas é o "Excel dentro do Código". Ele cria um DataFrame (uma tabela).
# Se o desafio da Camplog trouxer 10.000 linhas de histórico de rotas,
# você manipula, limpa e filtra tudo isso com comandos de uma linha.

import pandas as pd

# 1. CRIANDO UM DATAFRAME NA MÃO (A partir de um Dicionário de Listas)
dados_grupo = {
    'Nome': ['Grazielle', 'Isabela', 'Luana', 'GiiBrenz'],
    'Especialidade': ['Front-end', 'Back-end', 'Dados/IA', 'Full-stack'],
    'Horas_Logadas': [14, 16, 12, 18]
}
df = pd.DataFrame(dados_grupo)

# NOTA DE OURO PARA O EVENTO: Para abrir a planilha que os jurados fornecerem:
# df = pd.read_csv('historico_entregas_camplog.csv')


# -------------------------------------------------------------------------
# 2. INSPEÇÃO RÁPIDA (Bater o olho nos dados para entender o problema)
# -------------------------------------------------------------------------
print(df.head(2))     # Mostra apenas as 2 primeiras linhas para checar se abriu certo
print(df.shape)       # Retorna o tamanho da tabela em formato (linhas, colunas)
print(df.info())      # Informa os tipos de dados e se tem campos nulos/vazios
print(df.describe())  # Faz cálculo estatístico automático de colunas numéricas (Média, Máx, Mín)


# -------------------------------------------------------------------------
# 3. SELEÇÃO E FILTRAGEM (Achar anomalias, fraudes ou rotas específicas)
# -------------------------------------------------------------------------
# Selecionar apenas uma coluna isolada:
print(df['Especialidade'])

# Filtrar: Criar uma tabela nova contendo apenas registros específicos
# Exemplo 1: Apenas integrantes com mais de 13 horas logadas
hard_workers = df[df['Horas_Logadas'] > 13]

# Exemplo 2: Múltiplas condições (Condição 1) & (Condição 2)
# IMPORTANTE: Use o símbolo '&' para 'E', o símbolo '|' para 'OU', e use parênteses.
filtro_especifico = df[(df['Horas_Logadas'] >= 12) & (df['Especialidade'] == 'Full-stack')]


# -------------------------------------------------------------------------
# 4. TRATAMENTO DE VALORES NULOS/VAZIOS (Garante que a IA não quebre)
# -------------------------------------------------------------------------
# df.isnull().sum() -> Conta quantos campos em branco existem por coluna
# df_limpo = df.dropna() -> Deleta todas as linhas que possuem campos vazios
# df_preenchido = df.fillna(0) -> Substitui campos vazios pelo número 0