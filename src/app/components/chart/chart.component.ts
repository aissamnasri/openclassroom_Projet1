import { Component, Input, OnChanges, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnChanges, AfterViewInit {

  @Input() data: any[] = [];

  @ViewChild('chartCanvas') chartRef!: ElementRef;

  chart: any;
  viewInitialized = false;

  ngAfterViewInit(): void {
    this.viewInitialized = true;
    this.tryCreateChart();
  }

  ngOnChanges(): void {
    this.tryCreateChart();
  }

  tryCreateChart() {
    if (this.viewInitialized && this.data && this.data.length) {
      this.createChart();
    }
  }

  createChart() {

  if (this.chart) {
    this.chart.destroy();
  }

  const labels = this.data.map(d => d.country);

  const totalMedals = this.data.map(d =>
    d.participations.reduce((sum: number, p: any) => sum + p.medalsCount, 0)
  );

  this.chart = new Chart(this.chartRef.nativeElement, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Total Médailles',
          data: totalMedals,
        }
      ]
    }
  });
}
}