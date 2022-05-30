google.charts.load('current', {
    'packages': ['gantt']
  });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Task ID');
    data.addColumn('string', 'Task Name');
    data.addColumn('string', 'Assigned To');
    data.addColumn('date', 'Start Date');
    data.addColumn('date', 'End Date');
    data.addColumn('number', 'Duration');
    data.addColumn('number', 'Percent Complete');
    data.addColumn('string', 'Dependencies');

    data.addRows([
      ['Task4', 'Task4- UAT', 'Jacob Jones',
        new Date(2022,2,30), new Date(2022,4,30), null, 50, null
      ],
      ['Task2', 'Task2 Development- Phase1', 'Jenny Wilson',
        new Date(2022, 1, 21), new Date(2022, 3, 24), null, 63, null
      ],
      ['Task3', 'Task3 Development- Phase2', 'Devon Lane',
        new Date(2022, 1, 21), new Date(2022, 3, 2), null, 78, null
      ],
      ['Task1', 'Task1- Discovery', 'Jerome Bell',
        new Date(2022, 0, 1), new Date(2022, 1, 20), null, 100, null
      ]
    ]);

    var options = {
      height: 400,
      gantt: {
        trackHeight: 30
      },
      barCornerRadius: 20,
    };

    var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

    chart.draw(data, options);
  }
