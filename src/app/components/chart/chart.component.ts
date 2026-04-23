import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild
} from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartType } from 'chart.js';
import { Olympic } from '../../models/olympic.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements AfterViewInit, OnChanges {

  @Input() data: Olympic[] = [];
  @Input() chartType: ChartType = 'pie';

  @Output() chartClick = new EventEmitter<Olympic>();

  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private chart!: Chart;
  private viewReady = false;

  ngAfterViewInit(): void {
    this.viewReady = true;
    this.tryRender();
  }

  ngOnChanges(): void {
    this.tryRender();
  }

  private tryRender(): void {
    if (this.viewReady && this.data.length) {
      this.renderChart();
    }
  }

  private renderChart(): void {

    // 🔥 détruire ancien chart
    if (this.chart) {
      this.chart.destroy();
    }

    let labels: string[] = [];
    let values: number[] = [];

    // 👉 MODE DÉTAIL (1 seul pays → évolution)
    if (this.data.length === 1) {

      const country = this.data[0];

      labels = country.participations.map(p => p.year.toString());
      values = country.participations.map(p => p.medalsCount);

    } else {
      // 👉 MODE DASHBOARD (plusieurs pays)
      labels = this.data.map(d => d.country);

      values = this.data.map(d =>
        d.participations.reduce((sum, p) => sum + p.medalsCount, 0)
      );
    }

    // 🚀 création du chart
    this.chart = new Chart(this.canvasRef.nativeElement, {
      type: this.chartType,
      data: {
        labels,
        datasets: [
          {
            label: 'Médailles',
            data: values
          }
        ]
      },
     options: {
  onClick: (event, _elements, chart) => {

    const points = chart.getElementsAtEventForMode(
      event as unknown as Event,
      'nearest',
      { intersect: true },
      true
    );

    if (points.length) {
      const index = points[0].index;

      this.chartClick.emit(this.data[index]);
    }
  }
}
    });
  }
}