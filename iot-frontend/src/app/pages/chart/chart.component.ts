import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ToastrService } from 'ngx-toastr';
import { isVariableStatement } from 'typescript';
import { ApiService } from './../../services/api.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = true;
  undertemp = false;
  datas: any = [];
  constructor(private api: ApiService, private toasrt: ToastrService, private mess : NzMessageService,
  ) { }
  test() {
    for (let i = 1; i < 1000; i++) {
      let y = Math.floor(Math.random() * 20) + 15;
      console.log(y);

      if (y < 24) {
        //console.log("Nhiệt độ vượt ngưỡng cho phép");
        this.mess.warning("Nhiệt độ dưới mức ngưỡng cho phép");
      }
    }
  }
  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'spline',
        name: 'Nhiệt độ',
        data: (function () {
          // generate an array of random data
          var data = [], time = (new Date()).getTime(), i;
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

      marginRight: 10,

      events: {
        load: function () {
          // set up the updating of the chart each second
          var series = this.series[0];
          var mess : NzMessageService;
          setInterval(() => {

            let x = (new Date()).getTime() // now
            let y = Math.floor(Math.random() * 20) + 15;
            //console.log(x,y);

            if (y < 24) {
              //console.log("Nhiệt độ vượt ngưỡng cho phép");
              //toasrt.error("Hello, I'm the toastr message.");
            //  mess.warning("Nhiệt độ vượt ngưỡng cho phép");
            }
            series.addPoint([x, y]);
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
  ngOnInit() {
    this.test();
    this.getData();
  }
  getData(){
    this.api.getInfo().subscribe(datas => {
      const list = datas.split('\n');
     list.forEach(e => {
       this.datas.push(e);
     }) 
    })
  }
}







