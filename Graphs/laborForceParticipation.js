let filename = 'data/LaborForcePart.csv';

d3.csv(filename).then(function(loadedData) {
  
    
  let labels = [];
  let data1 = [];
  let data2 = [];
  let data3 = [];
  let data4 = [];
  let data5 = [];
  
  for (let i=0; i < loadedData.length; i++){
    
    let date = loadedData[i].date;
    labels.push(date);
    let d1 = loadedData[i].women;
    data1.push(d1);
    let d2 = loadedData[i].men;
    data2.push(d2);
    let d3 = loadedData[i].black;
    data3.push(d3);
    let d4 = loadedData[i].white;
    data4.push(d4);
    let d5 = loadedData[i].hispanic;
    data5.push(d5);
        
  }
  
  let title = "Labor Force Participation by Gender and Race";
  
  let options = {
    type: 'line',
    data: {
      labels: labels,
      datasets:[{
        label: 'Women',
        data: data1,
        fill: false,
        pointRadius: 2,
        pointHoverRadius: 4,
        borderColor:'rgba(255,99,132,1)',
      }, {
        label: 'Men',
        data: data2,
        fill: false,
        pointRadius: 2,
        pointHoverRadius: 4,
        borderColor: 'rgba(54, 162, 235, 1)',
      }, {
        label: 'Black',
        data: data3,
        fill: false,
        pointRadius: 2,
        pointHoverRadius: 4,
        borderColor: 'rgba(143,213,194, 1)',
      }, {
        label: 'White',
        data: data4,
        fill: false,
        pointRadius: 2,
        pointHoverRadius: 4,
        borderColor: 'rgba(165,34,65, 1)',
      }, {
        label: 'Hispanic',
        data: data5,
        fill: false,
        pointRadius: 2,
        pointHoverRadius: 4,
        borderColor: 'rgba(140,205,227, 1)',
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
            labelString: 'Percent'
          }
        }]
      }
    }
  }
  
  let chart = new Chart(document.getElementById('canvas'), options);
  
});

