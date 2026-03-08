from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np

app = Flask(__name__)

model = load_model("plant_disease_model.h5")

@app.route("/predict", methods=["POST"])
def predict():

    file = request.files["image"]
    img = Image.open(file)

    img = img.resize((224,224))
    img = np.array(img)/255
    img = img.reshape(1,224,224,3)

    prediction = model.predict(img)

    result = np.argmax(prediction)

    return jsonify({"disease":str(result)})

if __name__ == "__main__":
    app.run(port=8000)