# =========================================================================
# PYTHON FRONT-END: INTERFACE RÁPIDA COM STREAMLIT
# =========================================================================
# NOTA DE HACKATHON: Para rodar essa tela no seu PC, você precisará instalar 
# no terminal: pip install streamlit
# E para rodar o arquivo você digita: streamlit run nome_do_arquivo.py

import streamlit as st
import pandas as pd

# 1. CRIANDO ELEMENTOS VISUAIS (Eles viram HTML automaticamente na tela)
st.title("Painel de Controle - IA Camplog & Payment Shift")
st.subheader("Transforme suas ideias em inovações")

# 2. CAPTURANDO INPUT DO USUÁRIO
# Cria uma caixinha de texto e guarda o que o usuário digitou na variável
usuario_nome = st.text_input("Digite o nome do integrante do grupo:")

# 3. INTERAÇÃO (Botão)
if st.button("Analisar Desempenho"):
    st.write(f"Analisando dados de {usuario_nome}...")
    
    # Usando o Pandas que revisamos para exibir uma tabela linda na tela
    dados_ficticios = {
        'Métricas': ['Commits', 'Entregas', 'Alertas de Fraude'],
        'Valores': [18, 5, 0]
    }
    df = pd.DataFrame(dados_ficticios)
    
    # Com um único comando, o Streamlit renderiza uma tabela interativa no Front-end!
    st.dataframe(df)
    st.success("Análise concluída com sucesso pela Inteligência Artificial!")