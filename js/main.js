$( document ).ready(function() {
  $(".timeRemaining").append("<h3>Time Remaining:</h3>");

  var question = [ "Which island is the world's biggest island?", "Which country eats the most chocolate equating to 10 kilos per person per year?", "Which continent is the only continent with no active volcanoes?", "Where is croissant first invented?", "Where are French fries originally from?", "Where is the first sailing boats built?", "Which country is named after a tree?", "Where is paper originated from?", "Which country has the most post offices than any other country (over 100,000)?", "Where is Christmas trees originated from?"];
  var answer = ["Greenland", "Switzerland", "Australia", "Austria", "Belgium", "Egypt", "Brazil", "China", "India", "Germany"];
  var counter = 0;
  var remainingQuestion = question[counter].length - 1;
  $(".questionsRemaining").append("<h3>Questions Remaining: </h3>" + remainingQuestion);


  $("#nextQuestion").on("click", function() {
      if(counter < question.length){
        counter++;
      }
      console.log("random question displayed");
      $("#two").html(question[counter]);
  })

  $("#submitButton").on("click", function() {
    if ($('#answerBox').val() === answer[counter]){
      console.log("correct alert activated");
      alert("Correct! Go to the next question.");
      return remainingQuestion;
    } else {
      alert ("Incorrect answer!");
      return remainingQuestion;
    }
  })
});
