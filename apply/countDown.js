
var applicationStart = new Date("Sept 2 2019 9:00:00 GMT-0600");
var applicationEnd = new Date("Sept 18 2019 22:00:00 GMT-0600");


var timer = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    if(now > applicationStart && now < applicationEnd ) {
        document.getElementById("PhotoJournalistForm").innerHTML = " <iframe  src=\"https://docs.google.com/forms/d/e/1FAIpQLSc2N5g0RPqsSOleS7enxNhMNMtAcgeAk7hxavxFgtw-RsJE_g/viewform?embedded=true\" width=\"100%\" height=\"1000\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>";
        clearInterval(timer);
    }

}, 1000);
