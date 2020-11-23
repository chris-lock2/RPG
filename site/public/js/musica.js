audioPlay();
function audioPlay(){
    var currentSong = 0;
    $("#audioPlay")[0].src = $("#playlist li a")[0];
    $("#audioPlay")[0].play();
    $("#playlist li a").click(function(e){
        e.preventDefault();
        $("#audioPlay")[0].src = this;
        $("#audioPlay")[0].play();
        $("#playlist li a").removeClass("current-song");
        currentSong = $(this).parent().index();
        $(this).parent().addClass("current-song");
    });
    $("#audioPlay")[0].addEventListener("ended", function(){
        currentSong++;
        if(currentSong == $("#playlist li a").lenght)
        currentSong = 0;
        $("#playlist li").removeClass("current-song");
    });
};