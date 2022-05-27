const ctx = document.getElementById('myChart').getContext('2d');
const opinions = document.getElementById('myChartOpinions').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Traffic from Facebook','Traffic from Google    ','Traffic from Twitter     '],
        datasets: [{
            data: [12014, 65215, 124212],
            backgroundColor: [
                '#E7FF00',
                '#FC49AB',
                '#5FE8FF',
            ],
            borderColor: [
                '#E7FF00',
                '#FC49AB',
                '#5FE8FF',
            ],
            borderWidth: 1,
            hoverOffset: 4,
            borderRadius:0.2
        }],
        
    },
    options: {
        responsive:true,
        
    }
});


const myChartOpinions = new Chart(opinions, {
    type: 'bar',
    data: {
        labels: ['Action', 'Fantasy', 'Drama', 'Horror', 'Mystery'],
        datasets: [{
            label: 'Comments by genre',
            data: [124855, 162584, 85875, 54561, 48933],
            backgroundColor: [
                '#FF7300',
                '#FC49AB',
                '#64FF00',
                '#5FE8FF',
                '#E7FF00',
            ],
            borderColor: [
                '#FF7300',
                '#FC49AB',
                '#64FF00',
                '#5FE8FF',
                '#E7FF00',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,

        scales: {
            y: {
                ticks:{
                    color:'#D9D9D9' /*changes color of y axis */
                },
                beginAtZero: true,               
            },
            x:{
                ticks:{
                    color:[/*changes color of x axis */                  
                        '#FF7300',
                        '#FC49AB',
                        '#64FF00',
                        '#5FE8FF',
                        '#E7FF00',
                    ]
                },
            }
        }
        
    }
   
});


/*
  options: {
        scales: {
            y: {
                beginAtZero: true,
                
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Custom Chart Title',
                color: '#FF7300',
                padding: {
                    top: 10,
                    bottom: 30
                }
            }
        }
    }
    */