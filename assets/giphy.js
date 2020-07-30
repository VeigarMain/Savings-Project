$(document).ready(function() {
    createLine();

    $("#resetBtn").on("click", function () {
        localStorage.removeItem("input");
        localStorage.removeItem("goalAmt");
        localStorage.removeItem("savedAmt");
    })

    $("#searchBtn").on("click", function (event) {
        event.preventDefault();
        var searchTerm = $("#search-giphy").val();
        $("#search-giphy").val("");
        localStorage.setItem("input", searchTerm) 
        buttonFunction(searchTerm);
        // console.log(searchTerm);
        // alert("I am working!");
        // localStorage.setItem(searchTerm);
        // alert(localStorage.getItem(searchTerm));
        console.log(localStorage.getItem("input"));

    })
  function createLine() {
           
         if (!localStorage.getItem("input")) {
                return 
            } else {
            var term = localStorage.getItem("input");
            console.log(term);
            $("#search-giphy").val(term);
              buttonFunction(term);    
            }
    //   var input = JSON.parse(localStorage.getItem("input"));
    //   console.log(localStorage.getItem("input"));
    //   if (input > 0) {
          
    //       buttonFunction(input[input - 1]);
    //   }
    //   for (let i = 0; i < input; i++) {
    //       createLine(input[i]);
    //       console.log(input[i]);
    //   }
          
    };

function buttonFunction(searchTerm) {
    // console.log(searchTerm);
    var apiKey = "A28hTTUxthLUB9TjNw2aZnUfAfLQQoeC";
       $.get(
        "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=" + apiKey +"&limit=1",
         function(data)
         { 
             var info = Object.values(data)[0]
             console.log("succes got data", info.length);
             for (var i = 0; i < info.length; i++) {
                 var img = $("<img>").addClass("img" + 1).attr("src", info[i].images.original.url);
                 $("#giphy-api").html(img);
                 
             }
           }
       );          
};
    

             
});
