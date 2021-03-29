// csv file we want to load
let filename = 'data/GDPvsRPCE.csv';

// all of your code should be inside this command
d3.csv(filename).then(function(loadedData) {
  
    
  let labels = [];
  let data1 = [];
  let data2 = [];
  
  for (let i=0; i < loadedData.length; i++){
    //console.log(loadedData[i]);
    
    let date = loadedData[i].date;
    labels.push(date);
    let d1 = loadedData[i].grossDomesticProduct;
    data1.push(d1);
    let d2 = loadedData[i].realPersonalConsumptionExpenditures;
    data2.push(d2);
    
  }
  
  let title = "Real Gross Domestic Product vs Real Personal Consumption Expenditures";
  
  let options = {
    type: 'line',
    data: {
      labels: labels,
      datasets:[{
        label: 'GDP',
        lineTension: 0,   
        data: data1,
        fill: false,
        pointRadius: 2,
        pointHoverRadius: 4,
        borderColor:'rgba(255,99,132,1)',
      }, {
        label: 'PCE',
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
  //Chart.defaults.global.defaultFontFamily = 'Helvetic Neue', 'Helvetica,', 'Arial', 'sans-serif';
  //Chart.defaults.global.defaultFontColor = 'rgb(100,100,100)';
  //Chart.defaults.global.defaultFontSize = 16;
  
  let chart = new Chart(document.getElementById('canvas'), options);
  
  
});

