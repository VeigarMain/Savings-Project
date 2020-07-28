// Copy and paste your work, or start typing.mp1p
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="style.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://kit.fontawesome.com/a076d05399.js"></script>
<style>
  img {width: 200px; height:200px}
</style>
</head>
<body>

<input class="input is-rounded" id="search-giphy" style="width: 30em;" type="text" placeholder="What gifs do you like">
<button class="button is-primary" id="search-button"><i class="fas fa-dollar-sign search-button"></i></button>

<p></p>

<script>
    $(document).ready(function(){
        var apiKey = "A28hTTUxthLUB9TjNw2aZnUfAfLQQoeC"
        $("button").on("click", function () {
            var searchTerm = $("#search-giphy").val();
            $("#search-giphy").val("");
            buttonFunction(searchTerm);  
            //alert("I work");
        });
        function buttonFunction(searchTerm) {
            $.get(
                "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=" + apiKey +"&limit=5", 
                function(data) { 
                    var info = Object.values(data)[0]
                    console.log("success got data", info.length); 
                    for(var i =0; i < info.length; i++){
                        var img = $('<img>').addClass('img'+i).attr('src', info[i].images.original.url);
                        $("p").append(img);
                    }
                }
            );          
        }
    });
    
</script>
</body>
</html>