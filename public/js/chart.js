function chart() {
    if ($("#formChart").length) {
        var ctx = document.getElementById('formChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: chart_labels,
                datasets: chart_datasets
            },

            // Configuration options go here
            options: {}
        });
    }
}