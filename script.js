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
    // .attr("onclick", "window.location='/audio.html'");
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
    $("#sound").attr(
      "src",
      "https://cdn.glitch.me/16f8327a-2616-43f1-a676-cb78424240ed/library.wav?v=1668289725921"
    );
    window.location = "/audio.html";
  }
  if (questionNum === "aab") {
    $("#sound").attr("src", "");
    window.location = "/audio.html";
  }
  if (questionNum === "aba") {
    $("#sound").attr("src", "https://cdn.glitch.global/16f8327a-2616-43f1-a676-cb78424240ed/Rain.gif?v=1668292491892");
    window.location = "/audio.html";
  }
  if (questionNum === "abb") {
    $("#sound").attr("src", "");
    window.location = "/audio.html";
  }
  if (questionNum === "bba") {
    $("#sound").attr("src", "");
    window.location = "/audio.html";
  }
  if (questionNum === "bbb") {
    $("#sound").attr("src", "");
    window.location = "/audio.html";
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
