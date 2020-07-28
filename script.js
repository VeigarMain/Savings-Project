$(document).ready(function() {
    
    $("button").on("click", function () {
        var searchTerm = $("#search-giphy").val();
        $("#search-giphy").val("");
        buttonFunction(searchTerm);
        // alert("I am working!");
    })
        
          
    });

function buttonFunction(searchTerm) {
    var apiKey = "A28hTTUxthLUB9TjNw2aZnUfAfLQQoeC";
       $.get(
        "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=" + apiKey +"&limit=1",
         function(data)
         { 
             var info = Object.values(data)[0]
             console.log("succes got data", info.length);
             for (var i = 0; i < info.length; i++) {
                 var img = $("<img>").addClass("img" + 1).attr("src", info[i].images.original.url);
                 $("#giphy-api").append(img);
                 event.preventDefault("#giphy-api");
             }
           }
       );          
};
  