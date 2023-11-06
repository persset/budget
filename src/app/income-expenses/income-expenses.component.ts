import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderComponent } from '../header/header.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

const USER_DATA = [
  {
    week1: '100',
    week2: '100',
    week3: '100',
    week4: '100',
  },
];

const COLUMNS_SCHEMA = [
  {
    key: 'week1',
    type: 'number',
    label: 'Week 1',
  },
  {
    key: 'week2',
    type: 'number',
    label: 'Week 2',
  },
  {
    key: 'week3',
    type: 'number',
    label: 'Week 3',
  },
  {
    key: 'week4',
    type: 'number',
    label: 'Week 4',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];

@Component({
  selector: 'app-income-expenses',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    HeaderComponent,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './income-expenses.component.html',
  styleUrls: ['./income-expenses.component.css'],
})
export class IncomeExpensesComponent {
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  dataSource: any = USER_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;
}
