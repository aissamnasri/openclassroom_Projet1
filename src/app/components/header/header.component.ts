import { Component, Input } from '@angular/core';
import { Stat } from '../../models/stat.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() stats: Stat[] = [];
}