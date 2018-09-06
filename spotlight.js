$( document ).ready(function() {

    $.getJSON("Stories/stories.json",function(data){
        let i = data[0]

        $("#spotlightText").text(i.text)
        $("#spotlightImage").attr("src","Stories/"+i.image)

    })

});