// const Sentiment = require('vader-sentiment');

// // Instantiate a Sentiment object
// const analyzer = new Sentiment();

// // Get sentiment scores for a piece of text
// const text = "This is a test sentence.";
// const scores = analyzer.polarity_scores(text);

// // Print the sentiment scores
// console.log(scores);

const vader = require('vader-sentiment');
const input = 'VADER is very smart, handsome, and funny';
const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);
console.log(intensity);