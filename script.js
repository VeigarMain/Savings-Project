$(document).ready(function() {
    // button on click function
    $("#search-button").on("click", function () {
        var searchTerm = $("#search-value").val();
        $("#search-value").val("");
        buttonFunction(searchTerm);
        
    })
});
    function buttonFunction(searchTerm) {
        $.ajax({
            type: "GET",
            url: "api.giphy.com/v1/gifs/search?q=" + searchTerm + "A28hTTUxthLUB9TjNw2aZnUfAfLQQoeC",
                        
        })          
     }
     
      

 
        
  