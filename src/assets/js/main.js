var myLineChart;

function weatherGraph(label,temp_data){

    var ctx = document.getElementById('myweathergraph').getContext('2d');


    var speedData = {
        labels: label,
        datasets: [{
          label: "Temperature",
          data: temp_data,
          backgroundColor: 'rgba(173,216,230 ,0.5 )',
        }]
      };
       
      var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
          },
        scales:
          {
              yAxes: [{
                ticks: {
                    display: false,
                    min:0
                },
                gridLines : {
                    display : false
                },
              }]
          },
        
      };
    
    if(myLineChart){
      myLineChart.destroy()
    }
    myLineChart = new Chart(ctx, {
        type: 'line',
        data: speedData,
        options: chartOptions
    });

    var xAxisLabelMinWidth = 40;
    var chartCanvas = document.getElementById('myweathergraph');
    var maxWidth = chartCanvas.parentElement.parentElement.clientWidth;
    var width = Math.max(myLineChart.data.labels.length * xAxisLabelMinWidth, maxWidth);

    chartCanvas.parentElement.style.width = width +'px';
}