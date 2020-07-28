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

new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["How much $ you saved", "How much $ until goal reached"],
        datasets: [
            {
                label: "$",
                data: [4500,10000]
            }
        ]
    },
    options: {

    }
});