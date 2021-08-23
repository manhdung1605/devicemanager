import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './dataChart';
import * as Highcharts from 'highcharts';
import HC_map from 'highcharts/modules/map';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  Highcharts = Highcharts;
  updateFlag = true;
  chartOptions: any;
  constructor() {
    this.chartOptions = {
      series !: [
        {
          type: 'spline',
          name: 'Nhiệt độ',
          data: (function () {
            // generate an array of random data
            var data = [],
              time = (new Date()).getTime(),
              i;

            for (i = -19; i <= 0; i += 1) {
              data.push({
                x: time + i * 500,
                y: Math.floor(Math.random() * 20) + 15,
              });
            }
            return data;
          }())
        }
      ],
      chart: {
        type: 'spline',
        // animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        // events: {
        //   load: (function (component) {
        //     return function () {
        //       var series = this.series[0];

        //       setInterval(() => {
        //         var x = (new Date()).getTime(),
        //           y = Math.floor(Math.random() * 20) + 15;
        //         series.addPoint([x, y], true, true);
        //       }, 500);
        //     };
        //   })(this)
        // },
        events: {
          load: () => {

            // set up the updating of the chart each second
            var series = this.chartOptions.series[0];

            setInterval(function () {
              var x = (new Date()).getTime() // now
              var y = Math.floor(Math.random() * 20) + 15;

             // series.addPoint([x, y], true, true);
              //series.data.push([x,y]);
              //series.data.shift();
             // console.log(x,y)
            }, 500);
          }
        }
      },


      time: {
        useUTC: false
      },

      title: {
        text: 'Nhiệt độ theo thời gian thực'
      },

      accessibility: {
        announceNewData: {
          enabled: true,
          minAnnounceInterval: 15000,
          announcementFormatter: function (allSeries: any, newSeries: any, newPoint: any) {
            if (newPoint) {
              return 'New point added. Value: ' + newPoint.y;
            }
            return false;
          }
        }
      },

      xAxis: {
        type: 'datetime',
        tickPixelInterval: 100
      },

      yAxis: {
        title: {
          text: 'Temporature'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },

      tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
      },

      legend: {
        enabled: false
      },

      exporting: {
        enabled: false
      },


    }
  }
  ngOnInit() {
    HC_map(Highcharts);
  }
}





