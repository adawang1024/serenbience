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
  }
  if (questionNum === "b") {
    $(".question").text("Do you prefer the sea or mountain?");
    $("#left").text("Sea");
    $("#right").text("Mountain");
  }
  if (questionNum === "aa") {
    $(".question").text("Do you prefer libraries or cafes?");
    $("#left").text("Libraries");
    $("#right").text("Cafes");
  }
  if (questionNum === "ab") {
    $(".question").text("Do you prefer the sound of rain or fire?");
    $("#left").text("Rain");
    $("#right").text("Fire");
  }
  if (questionNum === "ba") {
    $(".question").text("Do you prefer being on the beach or in the water?");
    $("#left").text("Beach");
    $("#right").text("Water");
  }
  if (questionNum === "bb") {
    $(".question").text("Do you prefer the day or night?");
    $("#left").text("Day");
    $("#right").text("Night");
  }
  if (questionNum.length >= 3) {
    $("#left").attr("onclick", "sound.play()").text("Play");
    $("#right").attr("onclick", "sound.pause()").text("Pause");
    $("#play").addClass("fa-play");
    $("#pause").addClass("fa-pause");
    $("h1").text("Enjoy your ambience!");
    $(".question").css("visibility", "hidden");
  }
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
    $("#sound").attr("src", "");
    $("#finalGif").attr(
      "src",
      "https://cdn.glitch.global/16f8327a-2616-43f1-a676-cb78424240ed/Rain.gif?v=1668292491892"
    );
  }
  if (questionNum === "abb") {
    $("#sound").attr("src", "");
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
    $("#sound").attr("src", "");
    $("#finalGif").attr("src", "");
  }

  if (questionNum === "bba") {
    $("#sound").attr("src", "");
    $("#finalGif").attr(
      "src",
      "https://cdn.glitch.global/16f8327a-2616-43f1-a676-cb78424240ed/day%20mountain.gif?v=1668290557294"
    );
  }
  if (questionNum === "bbb") {
    $("#sound").attr("src", "");
    $("#finalGif").attr(
      "src",
      "https://cdn.glitch.global/16f8327a-2616-43f1-a676-cb78424240ed/mountain.gif?v=1668289994704"
    );
  }
  qCount++;
  $("#qNum").text(qCount);
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
