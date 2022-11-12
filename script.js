let questionNum = 0;

let qCount = 1;

// let currId1 = '#indoors';
// let currId2 = '#outdoors';

function nextQuestion() {
  if(questionNum === 1) {
    $(".question").text("Do you prefer day or night?");
    $("#indoors").attr("id", "day").text("Day");
    $("#outdoors").attr("id", "night").text("Night");
    qCount++;
    $("#qNum").text(qCount);
  }
    if(questionNum === 2) {
    $(".question").text("Do you prefer the sea or mountain?");
    $("#indoors").attr("id", "sea").text("Sea");
    $("#outdoors").attr("id", "mountain").text("Mountain");
  }
      if(questionNum === 3) {
    $(".question").text("Do you prefer libraries or cafes?");
    $("#day").attr("id", "libraries").text("Libraries");
    $("#night").attr("id", "cafes").text("Cafes");
  }
      if(questionNum === 4) {
    $(".question").text("Do you prefer the sound of rain or fire?");
    $("#day").attr("id", "rain").text("Rain");
    $("#night").attr("id", "fire").text("Fire");
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
