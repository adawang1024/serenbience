let questionNum = 0;

let qCount = 1;

function nextQuestion() {
  if(questionNum = 1) {
    $(".question").text("Do you prefer day or night?");
    $("#indoors").attr("id", "day");
    $("#outdoors").attr("id", "night");
    qCount++;
    $("#qNum").text(qCount);
  }
    if(questionNum = 2) {
    $(".question").text("Do you prefer the sea or mountain?");
    $("#indoors").attr("id", "sea");
    $("#outdoors").attr("id", "mountain");
  }
      if(questionNum = 3) {
    $(".question").text("Do you prefer libraries or cafes?");
    $("#indoors").attr("id", "sea");
    $("#outdoors").attr("id", "mountain");
  }
      if(questionNum = 4) {
    $(".question").text("Do you prefer the sound of rain or fire?");
    $("#indoors").attr("id", "sea");
    $("#outdoors").attr("id", "mountain");
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

$("#day").click(function() {
  questionNum = 3;
  nextQuestion();
});

$("#night").click(function() {
  questionNum = 4;
  nextQuestion();
});

$("#sea").click(function() {
  questionNum = 5;
  nextQuestion();
});

$("#mountains").click(function() {
  questionNum = 6;
  nextQuestion();
});
