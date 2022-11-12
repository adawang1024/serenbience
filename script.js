let questionNum = 0;

function nextQuestion() {
  if(questionNum = 1) {
    $(".question").text("Do you prefer day or night?");
    $("#indoors").attr("id", "day");
    $("#outdoors").attr("id", "night");
  }
    if(questionNum = 2) {
    $(".question").text("Do you prefer day or night?");
    $("#indoors").attr("id", "day");
    $("#outdoors").attr("id", "night");
  }
}

$("#indoors").click(function() {
  questionNum = 1;
  nextQuestion();
});

$("#outdoors").click(function() {
  questionNum = 2;
  nextQuestion();
});


