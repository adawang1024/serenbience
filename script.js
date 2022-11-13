//global variables
let questionNum = "";
let qCount = 1;

/**
 * function nextQuestion moves the quiz on to the next question when an answer is
 * selected.
 */
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

/**
 * function audioPage brings the user to the final audio when the last question of the
 * quiz is answered.
 */
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
    $("#finalGif")
      .attr(
        "src",
        "https://cdn.glitch.global/16f8327a-2616-43f1-a676-cb78424240ed/library.gif?v=1668290619146"
      )
      .attr("alt", "A library.");
  }
  if (questionNum === "aab") {
    $("#sound").attr(
      "src",
      "https://cdn.glitch.me/16f8327a-2616-43f1-a676-cb78424240ed/cafe.wav?v=1668294218990"
    );
    $("#finalGif")
      .attr(
        "src",
        "https://cdn.glitch.global/16f8327a-2616-43f1-a676-cb78424240ed/cafe.gif?v=1668290454278"
      )
      .attr("alt", "A steaming coffee cup on a table.");
  }
  if (questionNum === "aba") {
    $("#sound").attr(
      "src",
      "https://cdn.glitch.me/16f8327a-2616-43f1-a676-cb78424240ed/rain.wav?v=1668322829968"
    );
    $("#finalGif")
      .attr(
        "src",
        "https://cdn.glitch.global/16f8327a-2616-43f1-a676-cb78424240ed/Rain.gif?v=1668292491892"
      )
      .attr("alt", "Rain falling down on a rushing river.");
  }
  if (questionNum === "abb") {
    $("#sound").attr(
      "src",
      "https://cdn.glitch.me/16f8327a-2616-43f1-a676-cb78424240ed/fire.wav?v=1668322823019"
    );
    $("#finalGif")
      .attr(
        "src",
        "https://cdn.glitch.global/16f8327a-2616-43f1-a676-cb78424240ed/fire.gif?v=1668290129360"
      )
      .attr("alt", "A cartoon fire creature.");
  }
  if (questionNum === "baa") {
    $("#sound").attr(
      "src",
      "https://cdn.glitch.me/16f8327a-2616-43f1-a676-cb78424240ed/beach.wav?v=1668294608803"
    );
    $("#finalGif")
      .attr(
        "src",
        "https://cdn.glitch.global/16f8327a-2616-43f1-a676-cb78424240ed/beach.webp?v=1668290085900"
      )
      .attr("alt", "A tropical beach at sunset.");
  }

  if (questionNum === "bab") {
    $("#sound").attr(
      "src",
      "https://cdn.glitch.global/16f8327a-2616-43f1-a676-cb78424240ed/water.wav?v=1668322833550"
    );
    $("#finalGif")
      .attr(
        "src",
        "https://cdn.glitch.global/16f8327a-2616-43f1-a676-cb78424240ed/water.gif?v=1668289959260"
      )
      .attr("alt", "A rolling ocean.");
  }

  if (questionNum === "bba") {
    $("#sound").attr(
      "src",
      "https://cdn.glitch.me/16f8327a-2616-43f1-a676-cb78424240ed/birds.wav?v=1668322811650"
    );
    $("#finalGif")
      .attr(
        "src",
        "https://cdn.glitch.global/16f8327a-2616-43f1-a676-cb78424240ed/day%20mountain.gif?v=1668290557294"
      )
      .attr("alt", "A green forest with sunshine.");
  }
  if (questionNum === "bbb") {
    $("#sound").attr(
      "src",
      "https://cdn.glitch.me/16f8327a-2616-43f1-a676-cb78424240ed/crickets.wav?v=1668322820041"
    );
    $("#finalGif")
      .attr(
        "src",
        "https://cdn.glitch.global/16f8327a-2616-43f1-a676-cb78424240ed/mountain.gif?v=1668289994704"
      )
      .attr("alt", "A mountain at night with a moon over it.");
  }
}

// Moves onto the next question under the left answer in the quiz.
$("#left").click(function () {
  if (questionNum.length < 3) {
    questionNum += "a";
    nextQuestion();
  }
});

// Moves onto the next question under the right answer in the quiz.
$("#right").click(function () {
  if (questionNum.length < 3) {
    questionNum += "b";
    nextQuestion();
  }
});

// resets the quiz when the startButton is clicked.
$("#startButton").click(function () {
  questionNum = 0;
  qCount = 1;
  $(".question").text("Do you prefer being indoors or outdoors?");
  $("#qNum").text(qCount);
  $("#left").text("Indoors");
  $("#right").text("Outdoors");
});
