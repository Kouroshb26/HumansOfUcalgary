$( document ).ready(function() {
    // $("#stories")

    $.getJSON("stories.json",function(data){
        for (let i of data){
            console.log(i)
            var card = $("<div>").addClass("col-lg-6 portfolio-item story")
                .append($("<div>").addClass("card h-100")
                    .append($("<img>").addClass("card-img-top img-fluid").css("background-image", "url("+i.image+")").height("500px"))
                    .append($("<div>").addClass("card-body")
                        .append($("<p>").addClass("card-text").text(i.text))))

            $("#stories").append(card)

        }
    })

});
