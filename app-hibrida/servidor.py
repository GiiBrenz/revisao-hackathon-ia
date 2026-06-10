from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
# O CORS é a "credencial" que libera o JavaScript para acessar essa porta
CORS(app) 

# Criamos o Endpoint (A porta de atendimento)
@app.route('/api/analise-ia', methods=['GET'])
def analise_ia():
    # Aqui entraria a lógica complexa do Pandas ou IA.
    # Vamos simular o resultado pronto em um dicionário:
    resultado = {
        "status": "sucesso",
        "nivel_risco": "Baixo",
        "acao": "Aprovar Rota e Pagamento",
        "tecnologia": "API Python da Equipe"
    }
    
    # O jsonify empacota o dicionário Python no formato universal JSON
    return jsonify(resultado)

if __name__ == '__main__':
    # Ligamos o servidor na porta 5000 do seu computador
    app.run(port=5000, debug=True)