// const Sentiment = require('vader-sentiment');

// // Instantiate a Sentiment object
// const analyzer = new Sentiment();

// // Get sentiment scores for a piece of text
// const text = "This is a test sentence.";
// const scores = analyzer.polarity_scores(text);

// // Print the sentiment scores
// console.log(scores);

const vader = require('vader-sentiment');
const input = ' I had an amazing day at the park with my family.';
const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);
if(intensity.compound>0.5){
   console.log("it as positive")
   console.log(intensity.compound)
}
else if(intensity.compound<0.5){
    console.log("it as negative")
    console.log(intensity.compound)
}
else{
    console.log("it as neutral")
    console.log(intensity.compound)
}
console.log(intensity);