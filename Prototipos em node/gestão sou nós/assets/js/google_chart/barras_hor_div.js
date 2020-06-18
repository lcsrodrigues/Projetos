google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        [' ', ' ',],
        ['Tarefa 1', 5],
        ['Tarefa 2', 10],
        ['Tarefa 3', 15],
        ['Tarefa 4', 20],
        ['Tarefa 5', 25]
      ]);

      var options = {
        title: ' ',
        chartArea: {width: '50%', height: '100%'},
        hAxis: {
          title: ' ',
          minValue: 0
        },
        vAxis: {
          title: ' '
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('barras_hor_div'));

      chart.draw(data, options);
    }