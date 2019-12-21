$( document ).ready(function() {

    $.getJSON("Stories/media.json",function(data){
        let i = data[0];

        $("#spotlightText").text(i.caption).css("white-space","pre-line")
        $("#spotlightImage").attr("src","Stories/"+i.image)

    })

});