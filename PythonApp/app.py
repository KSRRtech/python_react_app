from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # To allow cross-origin requests from the React frontend

# Sample data to serve
data = [
    {"id": 1, "name": "Alice", "age": 30, "country": "USA"},
    {"id": 2, "name": "Stodtmann", "age": 37, "country": "Germany"},
    {"id": 3, "name": "Charlie", "age": 35, "country": "UK"},
]

@app.route('/data', methods=['GET'])
def get_data():
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
