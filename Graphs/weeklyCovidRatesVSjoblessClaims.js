let filename = 'data/weeklyCovidRatesVSjoblessClaims.js.csv';

d3.csv(filename).then(function(loadedData) {
  
    
  let labels = [];
  let data1 = [];
  let data2 = [];
  
  for (let i=0; i < loadedData.length; i++){
    //console.log(loadedData[i]);
    
    let date = loadedData[i].date;
    labels.push(date);
    let d1 = (loadedData[i].weeklyCases/1000); 
    data1.push(d1);
    let d2 = (loadedData[i].joblessClaims/1000); 
    data2.push(d2);
   
    
  }
  
  let title = "New Covid Rate VS Initial Jobless Claims";
  
  let options = {
    type: 'line',
    data: {
      labels: labels,
      datasets:[{
        label: 'Cases (per 1,000)',
        yAxisID: 'cases',
        data: data1,
        fill: false,
        pointRadius: 2,
        pointHoverRadius: 4,
        borderColor:'rgba(255,99,132,1)',
      }, {
        label: 'Jobless Claims (per 1,000)',
        yAxisID: 'joblessClaims',
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
            labelString: 'New Covid Cases Weekly'
          }
        }, {
            id: 'joblessClaims', 
            display: true,
            position: 'right',
            scaleLabel: {
              display: true,
              labelString: 'Initial Jobless Claims Weekly'
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

