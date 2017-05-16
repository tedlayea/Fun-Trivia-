var countryQuestions = []
countryQuestions[0] = "Which country is only continent with no active volcanoes?";
countryQuestions[1] = "Where is croissant first invented?";
countryQuestions[2] = "Where are French fries originally from?";
countryQuestions[3] = "Where is the first sailing boats built?";
countryQuestions[4] = "Which country is named after a tree?";
countryQuestions[5] = "Where is paper originated from?";
countryQuestions[6] = "Which country has the most post offices than any other country (over 100,000)?";
countryQuestions[7] = "Where is Christmas trees originated from?";
countryQuestions[8] = "Which country is the world's largest consumer of coffee?";
countryQuestions[9] = "Which country eats the most chocolate equating to 10 kilos per person per year?";

function countryQuestion() {
  var randomQuestion = Math.floor(Math.random()*(countryQuestions.length));
  document.getElementById("displayQuestion").innerHTML = countryQuestions[randomQuestion];
}
