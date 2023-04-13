const express = require('express');
const bodyParser = require('body-parser');
const tf = require('@tensorflow/tfjs');
const use = require('@tensorflow-models/universal-sentence-encoder');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/analyze', async (req, res) => {
  const { text } = req.body;

  // Load the sentiment analysis model
  const model = await use.load();

  // Perform sentiment analysis on the input text
  const embeddings = await model.embed([text]);
  const prediction = await model.predict(embeddings);
  const score = prediction.arraySync()[0];

  // Determine the predicted sentiment
  let sentiment;
  if (score[0] > score[2]) {
    sentiment = 'positive';
  } else if (score[0] < score[2]) {
    sentiment = 'negative';
  } else {
    sentiment = 'neutral';
  }

  // Calculate the confidence score
  const confidence = Math.abs(score[0] - score[2]) * 100;

  // Return the sentiment and confidence score as JSON
  res.json({ sentiment, confidence });
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
