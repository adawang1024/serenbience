var questionNum = "";

var qCount = 1;

// let currId1 = '#indoors';
// let currId2 = '#outdoors';

function nextQuestion() {
  if (questionNum === 'a') {
    $(".question").text("Do you prefer day or night?");
    // $("#indoors").attr("id", "day").text("Day");
    // $("#outdoors").attr("id", "night").text("Night");
    $("#left").text("Day");
    $("#right").text("Night");
    qCount++;
    $("#qNum").text(qCount);
  }
  if (questionNum === 'b') {
    $(".question").text("Do you prefer the sea or mountain?");
    $("#left").text("Sea");
    $("#right").text("Mountain");
    qCount++;
    $("#qNum").text(qCount);
  }
  if (questionNum === '') {
    $(".question").text("Do you prefer libraries or cafes?");
    $("#left").text("Libraries");
    $("#right").text("Cafes");
    qCount++;
    $("#qNum").text(qCount);
  }
  if (questionNum === 4) {
    $(".question").text("Do you prefer the sound of rain or fire?");
    $("#left").text("Rain");
    $("#right").text("Fire");
    qCount++;
    $("#qNum").text(qCount);
  }
}

$("#left").click(function () {
  questionNum += "a";
  nextQuestion();
});

$("#right").click(function () {
  questionNum += "b";
  nextQuestion();
});
