let filename = 'data/dailyCasesvsVaccines.csv';

d3.csv(filename).then(function(loadedData) {
    
  let labels = [];
  let data1 = [];
  let data2 = [];
  
  for (let i=0; i < loadedData.length; i++){
    
    let date = loadedData[i].date;
    labels.push(date);
    let d1 = loadedData[i].newCases;
    data1.push(d1);
    let d2 = loadedData[i].newVaccines;
    data2.push(d2);
    
    console.log(loadedData[i].newVaccines);
    
    
  }
  
  let title = "New Covid Cases vs New Vaccines";
  
  let options = {
    type: 'line',
    data: {
      labels: labels,
      datasets:[{
        label: 'Covid Cases',
        yAxisID: 'cases',
        data: data1,
        fill: false,
        pointRadius: 2,
        pointHoverRadius: 4,
        borderColor:'rgba(255,99,132,1)',
      }, {
        label: 'Covid Vaccines',
        yAxisID: 'vaccines',
        data: data2,
        fill: false,
        pointRadius: 2,
        pointHoverRadius: 4,
        borderColor: 'rgba(54, 162, 235, 1)',
      }]
    },
    options: {
      title: {
        display: false,
        text: title
      },
      scales: {
        yAxes:[{
          id: 'cases',
        display: true,
        position: 'left',
          scaleLabel:{
            display: true,
            labelString: 'Daily Covid Cases'
          }
        }, {
            id: 'vaccines', 
            display: true,
            position: 'right',
            scaleLabel: {
              display: true,
              labelString: 'Daily Covid Vaccines'
            },
            gridLines: {
              drawOnChartArea: false
             }
        }]
      }
    }
  };
  
  let chart = new Chart(document.getElementById('canvas'), options);  
  
});

