from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route("/")
def home():
    return "AgriSage AI Server Running"

@app.route("/predict", methods=["POST"])
def predict():
    file = request.files["image"]

    disease = "Leaf Spot"
    confidence = "92%"

    return jsonify({
        "disease": disease,
        "confidence": confidence
    })

if __name__ == "__main__":
    app.run(debug=True)