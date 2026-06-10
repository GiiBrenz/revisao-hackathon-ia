import pandas as pd

# Dicionario
dados_operacoes = {
    'ID_Carga': [1001, 1002, 1003, 1004],
    'Operadora': ['Geovanna', 'Amora', 'Nicolas', 'Mexicooo'],
    'Valor_Frete': [150.00, 620.00, 45.00, 890.00],
    'Status': ['Concluído', 'Pendente', 'Concluído', 'Pendente']
}

# Transformando o dicionário na super planilha do Python
df = pd.DataFrame(dados_operacoes)

print("---Relatório Geral de Logistica---")
print(df)
print("\n" + "="*40 + "\n") #linha de separação

#Verificando fretes maiores de 500 ou encomendas com o status pendentes.
alertas = df[(df['Valor_Frete'] > 500.00) | (df['Status'] == 'Pendente')]

print("⚠️ ALERTA DE ANOMALIAS DETECTADAS ⚠️")
print(alertas)
