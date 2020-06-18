google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {

  var button = document.getElementById('change-chart');
  var chartDiv = document.getElementById('barras_ver_div');

  var data = google.visualization.arrayToDataTable([
    /*'NomeDoGráfico', 'Cor az', 'Cor Ver' */ ['', '', ''],
    ['Janeiro', 8000, 23.3],
    ['Fevereiro', 24000, 4.5],
    ['Março', 30000, 14.3],
    ['Abril', 50000, 0.9],
    ['Maio', 60000, 13.1]
  ]);

  var materialOptions = {
    width: 380,
    height: 240,
    // chart: {
    //   title: 'Nearby galaxies',
    //   subtitle: 'distance on the left, brightness on the right'
    // },
    // series: {
    //   0: { axis: 'distance' }, // Bind series 0 to an axis named 'distance'.
    //   1: { axis: 'brightness' } // Bind series 1 to an axis named 'brightness'.
    // },
    // axes: {
    //   y: {
    //     distance: {label: 'parsecs'}, // Left y-axis.
    //     brightness: {side: 'right', label: 'apparent magnitude'} // Right y-axis.
    //   }
    // }
  };

  var classicOptions = {
    width: 900,
    series: {
      0: {targetAxisIndex: 0},
      1: {targetAxisIndex: 1}
    },
    title: 'Nearby galaxies - distance on the left, brightness on the right',
    vAxes: {
      // Adds titles to each axis.
      0: {title: 'parsecs'},
      1: {title: 'apparent magnitude'}
    }
  };

  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
};