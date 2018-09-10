$( document ).ready(function() {

    $.getJSON("Stories/stories.json",function(data){
        let i = data[0]

        $("#spotlightText").text(i.text).css("white-space","pre-line")
        $("#spotlightImage").attr("src","Stories/"+i.image)

    })

});