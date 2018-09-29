$( document ).ready(function() {


    $(".bricklayer").bricklayer()



    $.getJSON("media.json",function(data){
        for (let i of data.photos){
            console.log(i)

            var card = $("<div>").addClass("portfolio-item story")

            card
                .append($("<div>").addClass("card")
                    .append($("<img>").addClass("card-img-top").attr("src",i.path))
                    .append($("<div>").addClass("card-body")
                        .append($("<p>").css("white-space","pre-line").addClass("card-text").text(i.caption))
                    )
                )

            $(".bricklayer").appendElements(card)

        }
    })


});
