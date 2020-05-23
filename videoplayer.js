/* global $, YT */
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
  playerDefaults = {
    autoplay: 0,
    autohide: 1,
    modestbranding: 1,
    rel: 0,
    loop: 1,
    showinfo: 0,
    controls: 0,
    disablekb: 1,
    enablejsapi: 0,
    iv_load_policy: 3,
  };
var vid = [
    {
      videoId: "xiFY8dka4as",
      startSeconds: 0,
      suggestedQuality: "hd1080",
    },
  ],
  randomVid = Math.floor(Math.random() * vid.length),
  currVid = randomVid;

$(".hi em:last-of-type").html(vid.length);

// eslint-disable-next-line no-unused-vars
function onYouTubePlayerAPIReady() {
  tv = new YT.Player("tv", {
    events: { onReady: onPlayerReady, onStateChange: onPlayerStateChange },
    playerVars: playerDefaults,
  });
}

function onPlayerReady() {
  tv.loadVideoById(vid[currVid]);
  tv.mute();
}

function onPlayerStateChange(e) {
  console.log("jeje", e);
  if (e.data === 1) {
    $("#tv").addClass("active");
  } else if (e.data === 0) {
    tv.seekTo(vid[currVid].startSeconds);
  }
}

function vidRescale() {
  var w = $(window).width() + 200,
    h = $(window).height();

  if (w / h > 16 / 9) {
    tv.setSize(w, (w / 16) * 9);
    $(".tv .screen").css({ left: "0px" });
  } else {
    tv.setSize((h / 9) * 16, h);
    $(".tv .screen").css({ left: -($(".tv .screen").outerWidth() - w) / 2 });
  }
}

$(window).on("load resize", function () {
  vidRescale();
});

$(".hi span:first-of-type").on("click", function () {
  $("#tv").toggleClass("mute");
  $(".hi em:first-of-type").toggleClass("hidden");
  if ($("#tv").hasClass("mute")) {
    tv.mute();
  } else {
    tv.unMute();
  }
});

$(".hi span:last-of-type").on("click", function () {
  $(".hi em:nth-of-type(2)").html("~");
  tv.pauseVideo();
});
