let filename = 'data/unemploymentRate3VS6.csv';

d3.csv(filename).then(function(loadedData) {
  
  let labels = [];
  let data1 = [];
  let data2 = [];
  
  for (let i=0; i < loadedData.length; i++){
    
    let date = loadedData[i].date;
    labels.push(date);
    let d1 = loadedData[i].U3;
    data1.push(d1);
    let d2 = loadedData[i].U6;
    data2.push(d2);
    
  }
  
  let title = "Unemployment U3 vs U6";
  
  let options = {
    type: 'line',
    data: {
      labels: labels,
      datasets:[{
        label: 'U3',
        data: data1,
        fill: false,
        pointRadius: 2,
        pointHoverRadius: 4,
        borderColor:'rgba(255,99,132,1)',
      }, {
        label: 'U6',
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
          scaleLabel:{
            display: true,
            labelString: 'Percentage'
          }
        }]
      }
    }
  };
  //Chart.defaults.global.defaultFontFamily = 'Helvetic Neue', 'Helvetica,', 'Arial', 'sans-serif';
  //Chart.defaults.global.defaultFontColor = 'rgb(100,100,100)';
  //Chart.defaults.global.defaultFontSize = 16;
  
  let chart = new Chart(document.getElementById('canvas'), options);
  
});
