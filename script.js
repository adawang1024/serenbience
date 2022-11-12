var questionNum = "";

var qCount = 1;

// let currId1 = '#indoors';
// let currId2 = '#outdoors';

function nextQuestion() {
  if (questionNum === "a") {
    $(".question").text("Do you prefer day or night?");
    // $("#indoors").attr("id", "day").text("Day");
    // $("#outdoors").attr("id", "night").text("Night");
    $("#left").text("Day");
    $("#right").text("Night");
    qCount++;
    $("#qNum").text(qCount);
  }
  if (questionNum === "b") {
    $(".question").text("Do you prefer the sea or mountain?");
    $("#left").text("Sea");
    $("#right").text("Mountain");
    qCount++;
    $("#qNum").text(qCount);
  }
  if (questionNum === "aa") {
    $(".question").text("Do you prefer libraries or cafes?");
    $("#left").text("Libraries");
    $("#right").text("Cafes");
    qCount++;
    $("#qNum").text(qCount);
  }
  if (questionNum === "ab") {
    $(".question").text("Do you prefer the sound of rain or fire?");
    $("#left").text("Rain");
    $("#right").text("Fire");
    qCount++;
    $("#qNum").text(qCount);
  }
  if (questionNum === "ba") {
    $(".question").text("Do you prefer being on the beach or in the water?");
    $("#left").text("Beach");
    $("#right").text("Water");
    qCount++;
    $("#qNum").text(qCount);
  }
  if (questionNum === "bb") {
    $(".question").text("Do you prefer the mountain in the day or at night?");
    $("#left").text("Day");
    $("#right").text("Night");
    qCount++;
    $("#qNum").text(qCount);
  }
  if (questionNum === "aaa") {
    $(".question").text("Final result for library");
    
    qCount++;
    $("#qNum").text(qCount);
  }
  if (questionNum === "aab") {
    $(".question").text("Final result for cafe");
    // $("#left").text("Day");
    // $("#right").text("Night");
    // $("#left").style.display = "none";
    // $("#right").style.display = "none";
    qCount++;
    $("#qNum").text(qCount);
  }
  if (questionNum === "aba") {
    $(".question").text("Final result for rain");
    // $("#left").text("Day");
    // $("#right").text("Night");
    // $("#left").style.display = "none";
    // $("#right").style.display = "none";
    qCount++;
    $("#qNum").text(qCount);
  }
  if (questionNum === "abb") {
    $(".question").text("Final result for fire");
    // $("#left").text("Day");
    // $("#right").text("Night");
    // $("#left").style.display = "none";
    // $("#right").style.display = "none";
    qCount++;
    $("#qNum").text(qCount);
  }
  if (questionNum === "bba") {
    $(".question").text("Final result for mountain in the day");
    // $("#left").text("Day");
    // $("#right").text("Night");
    // $("#left").style.display = "none";
    // $("#right").style.display = "none";
    qCount++;
    $("#qNum").text(qCount);
  }
  if (questionNum === "bbb") {
    $(".question").text("Final result for mountain in the night");
    // $("#left").text("Day");
    // $("#right").text("Night");
    // $("#left").style.display = "none";
    // $("#right").style.display = "none";
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

//audio codes

// 'aaa' = library
// 'aab' = cafe
// 'aba' = rain

// var player = document.getElementById('playButton');
// player.pause();
// player.src = player.src;