$( document ).ready(function() {


    $(".bricklayer").bricklayer();



    $.getJSON("media.json",function(data){
        for (let post of data){
            console.log(post);

            var card = $("<div>").addClass("portfolio-item story")

            card
                .append($("<div>").addClass("card")
                    .append($("<img>").addClass("card-img-top").attr("src",post.image))
                    .append($("<div>").addClass("card-body")
                        .append($("<p>").css("white-space","pre-line").addClass("card-text").text(post.caption))
                    )
                )

            $(".bricklayer").appendElements(card)

        }
    })


});
