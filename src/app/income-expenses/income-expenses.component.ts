import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface PeriodicElement {
  week: string;
  value: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { week: 'Week 1', value: 100 },
  { week: 'Week 2', value: 100 },
  { week: 'Week 3', value: 100 },
  { week: 'Week 4', value: 100 },
];
@Component({
  selector: 'app-income-expenses',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    HeaderComponent,
    FormsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './income-expenses.component.html',
  styleUrls: ['./income-expenses.component.css'],
})
export class IncomeExpensesComponent {
  displayedColumns: string[] = ['week', 'value'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
}
