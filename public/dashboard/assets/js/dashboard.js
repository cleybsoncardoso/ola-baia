( function ( $ ) {
    "use strict";


// const brandPrimary = '#20a8d8'
const brandSuccess = '#4dbd74'
const brandInfo = '#63c2de'
const brandDanger = '#f86c6b'

function convertHex (hex, opacity) {
  hex = hex.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  const result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')'
  return result
}

function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

    var elements = 27
    var data1 = []
    var data2 = []
    var data3 = []
    var data4 = []
    var data5 = []

    for (var i = 0; i <= elements; i++) {
      data1.push(random(800, 1000))
      data2.push(random(600, 800))
      data3.push(random(400, 600))
      data4.push(random(200, 400))
      data5.push(random(100, 200))
    }


    //Traffic Chart
    var ctx = document.getElementById( "trafficChart" );
    //ctx.height = 200;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['Jan 2017', 'Fev 2017', 'Mar 2017', 'Abr 2017', 'Mai 2017', 'Jun 2017', 'Jul 2017', 'Ago 2017', 'Set 2017', 'Out 2017', 'Nov 2017', 'Dez 2017', 'Jan 2018', 'Fev 2018', 'Mar 2018', 'Abr 2018', 'Mai 2018'],
            datasets: [
            {
              label: 'Ilha de Itaparica',
              backgroundColor: convertHex('#28a745', 10),
              borderColor: '#28a745',
              pointHoverBackgroundColor: '#28a745',
              borderWidth: 2,
              data: data1
          },
          {
              label: 'Cacha Prego',
              backgroundColor: 'transparent',
              borderColor: '#17a2b8',
              pointHoverBackgroundColor: '#17a2b8',
              borderWidth: 2,
              data: data2
          },
          {
              label: 'Ilha da Madre',
              backgroundColor: 'transparent',
              borderColor: '#ffc107',
              pointHoverBackgroundColor: '#ffc107',
              borderWidth: 2,
              data: data3
          },
          {
              label: 'Ilha de Vera Cruz',
              backgroundColor: 'transparent',
              borderColor: '#dc3545',
              pointHoverBackgroundColor: '#dc3545',
              borderWidth: 2,
              data: data4
          },
          {
              label: 'Praia Ponta de Areia',
              backgroundColor: 'transparent',
              borderColor: '#007bff',
              pointHoverBackgroundColor: '#007bff',
              borderWidth: 2,
              data: data5
          }
          ]
        },
        options: {
            //   maintainAspectRatio: true,
            //   legend: {
            //     display: false
            // },
            // scales: {
            //     xAxes: [{
            //       display: false,
            //       categoryPercentage: 1,
            //       barPercentage: 0.5
            //     }],
            //     yAxes: [ {
            //         display: false
            //     } ]
            // }


            maintainAspectRatio: true,
            legend: {
                display: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                  gridLines: {
                    drawOnChartArea: false
                  }
                }],
                yAxes: [ {
                      ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        stepSize: Math.ceil(1000 / 10),
                        max: 1000
                      },
                      gridLines: {
                        display: true
                      }
                } ]
            },
            elements: {
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3
              }
          }


        }
    } );


} )( jQuery );