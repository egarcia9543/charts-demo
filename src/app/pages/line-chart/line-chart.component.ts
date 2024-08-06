import { ChartModule } from 'primeng/chart';
import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input'
import { CommonModule } from '@angular/common';
import { FilterFormComponent } from '../../components/filter-form/filter-form.component';
import { ButtonComponent } from '../../components/button/button.component';
import { chartjsLineData, ngxLineData } from '../../utils/chartsData';


@Component({
  selector: 'app-line-chart',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    NgxChartsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    ChartModule,
    CommonModule,
    FilterFormComponent,
    ButtonComponent
  ],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent {
  view: [number, number] = [800, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Meses';
  showYAxisLabel = true;
  yAxisLabel = 'PQRs Gestionadas';
  isShowingNgx = true;
  isChartGenerated = false;

  ngxData: any;

  chartjsData: any;

  sendForm(formValue: any) {
    this.chartjsData = chartjsLineData(this.getMonths(formValue.startDate, formValue.endDate));
    this.ngxData = ngxLineData(this.getMonths(formValue.startDate, formValue.endDate));
    this.isChartGenerated = true;
  }

  clicked() {
    this.isShowingNgx = !this.isShowingNgx;
  }

  getMonths(startDate: any, endDate: any) {
    const months = [];
    const start = new Date(startDate);
    const end = new Date(endDate);
    let month = start.getMonth();
    let year = start.getFullYear();
    while (year < end.getFullYear() || month <= end.getMonth()) {
      months.push(`${month + 1}/${year}`);
      if (month === 11) {
        month = 0;
        year++;
      } else {
        month++;
      }
    }
    return months;
  }
}
