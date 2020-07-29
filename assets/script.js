

//var remain = cost - saved

$(document).ready(function () {
    // button on click function
    $("#search-button").on("click", function () {
        var searchTerm = $("#search-value").val();
        $("#search-value").val("");
        buttonFunction(searchTerm);

    })

    function buttonFunction(searchTerm) {
        $.ajax({
            type: "GET",
            url: "api.giphy.com/v1/gifs/search?q=" + searchTerm + "A28hTTUxthLUB9TjNw2aZnUfAfLQQoeC",

        })
    }
    $("#costBtn").on("click", function () {
        var cost = $("#cost").val();
        console.log(cost);

        //$("#cost").val("");
        //costFunction();

        localStorage.setItem('goalAmt', cost);
        var goal = localStorage.getItem("goalAmt");
        //var remain = goal - saved;
        //console.log(remain);
    })

    $("#savedBtn").on("click", function () {
        var saved = parseInt($("#saved").val());

        if (!saved) {
            saved = 0;
        }


        var goal = localStorage.getItem("goalAmt");

        var savedAmount = parseInt(localStorage.getItem('savedAmt'));
        if (!savedAmount) {
            savedAmount = 0
        }

        var totalSaved = parseInt(saved) + parseInt(savedAmount);

        var remainingAmt = parseInt(goal) - parseInt(totalSaved);
        var chartData = [totalSaved, remainingAmt];


        $("#saved").val("");
        savedFunction(chartData);

        localStorage.setItem('savedAmt', totalSaved);

    })


    //input saved amount into doughnut chart object data array
    //saved amount should be a running total and saved in localstorage
    //calculate amount left to goal by subtracting total saved from goal cost
    //  (data).push
    function savedFunction(DATA) {

        new Chart(document.getElementById("doughnut-chart"), {
            type: 'doughnut',
            data: {
                labels: ["How much $ you saved", "How much $ until goal reached"],
                datasets: [
                    {
                        label: "$",
                        backgroundColor: ["#3e95cd", "#8e5ea2"],
                        //data: [saved, remainingAmt]
                        data: DATA
                    }
                ]
            },
            options: {

            }
        });

    }

    savedFunction([1, 1]);
});

/* var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: data {
        labels: ["How much $ you saved", "How much $ until goal reached"],
        datasets: [
            {
                label: "$",
                data: [4500,10000]
            }
        ]
    },
    options: options
}); */

