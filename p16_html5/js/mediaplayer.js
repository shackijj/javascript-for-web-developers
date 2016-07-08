log_header("mediaplayer.js");

(function () {
    var player = document.getElementById("mediaplayer-player"),
        playBtn = document.getElementById("controls-play"),
        curtime = document.getElementById("controls-curtime"),
        duration = document.getElementById("controls-duration");

   

    EventUtil.addHandler(playBtn, "click", function (event) {
        log("clicked");
        if (player.paused) {
            player.play();
            playBtn.innerHTML = "Pause";
        } else {
            player.pause();
            playBtn.innerHTML = "Play";
        }
    });

    EventUtil.addHandler(player, "loadedmetadata", function () {
         duration.innerHTML = player.duration;
    });

    setInterval(function () {
        curtime.innerHTML = player.currentTime;
    }, 250);

    var audio = new Audio("media/mmt.mp3");

    EventUtil.addHandler(audio, "canplaythrough", function() {
        audio.play();
    })
})();