let filename = 'data/GDP2008vs2019.csv';

d3.csv(filename).then(function(loadedData) {
  
  let labels = [];
  let data1 = [];
  let data2 = [];
  
  for (let i=0; i < loadedData.length; i++){
    
    let date = loadedData[i].quarters;
    labels.push(date);
    let d1 = loadedData[i].gdp08_09;
    data1.push(d1);
    let d2 = loadedData[i].gdp19_20;
    data2.push(d2);
    
  }
  
  let title = "GDP 2008/09 vs 2019/20";
  
  let options = {
    type: 'line',
    bezierCurve: false,
    data: {
      labels: labels,
      datasets:[{
        label: '2008-2009',
        lineTension: 0,   
        data: data1,
        fill: false,
        pointRadius: 2,
        pointHoverRadius: 4,
        borderColor:'rgba(255,99,132,1)',
      }, {
        label: '2019-2020',
        lineTension: 0,   
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
            labelString: 'Billions of Chained 2012 Dollars'
          }
        }]
      }
    }
  };
 
  let chart = new Chart(document.getElementById('canvas'), options);
  
});

