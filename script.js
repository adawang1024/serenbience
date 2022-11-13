$("body").fadeIn("slow");

var questionNum = "";

var qCount = 1;

function nextQuestion() {
  if (questionNum === "a") {
    $(".question").text("Are you a morning person, or a night owl?");
    $("#left").text("Morning Person");
    $("#right").text("Night Owl");
  }
  if (questionNum === "b") {
    $(".question").text("Sea or mountain?");
    $("#left").text("Sea");
    $("#right").text("Mountain");
  }
  if (questionNum === "aa") {
    $(".question").text("Would you rather study in a library or a cafe?");
    $("#left").text("Library");
    $("#right").text("Cafe");
  }
  if (questionNum === "ab") {
    $(".question").text("Water or fire?");
    $("#left").text("Water");
    $("#right").text("Fire");
  }
  if (questionNum === "ba") {
    $(".question").text(
      "Would you rather stay on the beach, or get in the water?"
    );
    $("#left").text("Beach");
    $("#right").text("Water");
  }
  if (questionNum === "bb") {
    $(".question").text("Are you a morning person, or a night owl?");
    $("#left").text("Morning Person");
    $("#right").text("Night Owl");
  }
  if (questionNum.length >= 3) {
    audioPage();
  }
  qCount++;
  $("#qNum").text(qCount);
}

function audioPage() {
  $("#left").attr("onclick", "sound.play()").text("Play");
  $("#right").attr("onclick", "sound.pause()").text("Pause");
  $("#play").addClass("fa-play");
  $("#pause").addClass("fa-pause");
  $("h1").text("Enjoy your ambience!");
  $(".question").css("display", "none");
  $("#startButton").text("Find another sound");

  if (questionNum === "aaa") {
    $("#sound").attr(
      "src",
      "https://cdn.glitch.me/16f8327a-2616-43f1-a676-cb78424240ed/library.wav?v=1668289725921"
    );
    $("#finalGif").attr(
      "src",
      "https://cdn.glitch.global/16f8327a-2616-43f1-a676-cb78424240ed/library.gif?v=1668290619146"
    );
  }
  if (questionNum === "aab") {
    $("#sound").attr(
      "src",
      "https://cdn.glitch.me/16f8327a-2616-43f1-a676-cb78424240ed/cafe.wav?v=1668294218990"
    );
    $("#finalGif").attr(
      "src",
      "https://cdn.glitch.global/16f8327a-2616-43f1-a676-cb78424240ed/cafe.gif?v=1668290454278"
    );
  }
  if (questionNum === "aba") {
    $("#sound").attr(
      "src",
      "https://cdn.glitch.me/16f8327a-2616-43f1-a676-cb78424240ed/rain.wav?v=1668322829968"
    );
    $("#finalGif").attr(
      "src",
      "https://cdn.glitch.global/16f8327a-2616-43f1-a676-cb78424240ed/Rain.gif?v=1668292491892"
    );
  }
  if (questionNum === "abb") {
    $("#sound").attr(
      "src",
      "https://cdn.glitch.me/16f8327a-2616-43f1-a676-cb78424240ed/fire.wav?v=1668322823019"
    );
    $("#finalGif").attr(
      "src",
      "https://cdn.glitch.global/16f8327a-2616-43f1-a676-cb78424240ed/fire.gif?v=1668290129360"
    );
  }
  if (questionNum === "baa") {
    $("#sound").attr(
      "src",
      "https://cdn.glitch.me/16f8327a-2616-43f1-a676-cb78424240ed/beach.wav?v=1668294608803"
    );
    $("#finalGif").attr(
      "src",
      "https://cdn.glitch.global/16f8327a-2616-43f1-a676-cb78424240ed/beach.webp?v=1668290085900"
    );
  }

  if (questionNum === "bab") {
    $("#sound").attr(
      "src",
      "https://cdn.glitch.global/16f8327a-2616-43f1-a676-cb78424240ed/water.wav?v=1668322833550"
    );
    $("#finalGif").attr(
      "src",
      "https://cdn.glitch.global/16f8327a-2616-43f1-a676-cb78424240ed/water.gif?v=1668289959260"
    );
  }

  if (questionNum === "bba") {
    $("#sound").attr(
      "src",
      "https://cdn.glitch.me/16f8327a-2616-43f1-a676-cb78424240ed/birds.wav?v=1668322811650"
    );
    $("#finalGif").attr(
      "src",
      "https://cdn.glitch.global/16f8327a-2616-43f1-a676-cb78424240ed/day%20mountain.gif?v=1668290557294"
    );
  }
  if (questionNum === "bbb") {
    $("#sound").attr(
      "src",
      "https://cdn.glitch.me/16f8327a-2616-43f1-a676-cb78424240ed/crickets.wav?v=1668322820041"
    );
    $("#finalGif").attr(
      "src",
      "https://cdn.glitch.global/16f8327a-2616-43f1-a676-cb78424240ed/mountain.gif?v=1668289994704"
    );
  }
}

$("#left").click(function () {
  if (questionNum.length < 3) {
    questionNum += "a";
    nextQuestion();
  }
});

$("#right").click(function () {
  if (questionNum.length < 3) {
    questionNum += "b";
    nextQuestion();
  }
});

$("#startButton").click(function () {
  questionNum = 0;
  $(".question").text("Do you prefer being indoors or outdoors?");
  $("#left").text("Indoors");
  $("#right").text("Outdoors");
});
