$(document).ready(function () {
    quoteOfTheDay();
});

function quoteOfTheDay() {
    var quote = {
        "async": true,
        "crossDomain": true,
        "url": "https://quotable-quotes.p.rapidapi.com/randomQuotes",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "quotable-quotes.p.rapidapi.com",
            "x-rapidapi-key": "2ba71ae14dmshffb864df9e474b3p120616jsnfbd446ed0b15"
        }
    }

    $.ajax(quote).done(function (response) {
        var qod = response.quote;
        $("#qod").text(qod);
    });



}