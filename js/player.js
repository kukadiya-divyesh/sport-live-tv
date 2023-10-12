function play_stream() {

    var video = document.getElementById('video');

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource("blob:https://streambtw.com/05a53a1c-fe74-4abe-b357-26f4aa8618d");
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            video.play();
        });

    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = m3u8Url;
        video.addEventListener('loadedmetadata', function () {
            video.play();
        });

    }
}
play_stream();
