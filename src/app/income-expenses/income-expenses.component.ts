import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';

export interface Expense {
  id: number;
  name: string;
  value: number;
}

const EXPENSE_DATA: Expense[] = [
  { id: 1, name: 'Name 1', value: 100 },
  { id: 2, name: 'Name 2', value: 100 },
  { id: 3, name: 'Name 3', value: 100 },
  { id: 4, name: 'Name 4', value: 100 },
  { id: 1, name: 'Name 1', value: 100 },
  { id: 2, name: 'Name 2', value: 100 },
  { id: 3, name: 'Name 3', value: 100 },
  { id: 4, name: 'Name 4', value: 100 },
  { id: 1, name: 'Name 1', value: 100 },
  { id: 2, name: 'Name 2', value: 100 },
  { id: 3, name: 'Name 3', value: 100 },
  { id: 4, name: 'Name 4', value: 100 },
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
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './income-expenses.component.html',
  styleUrls: ['./income-expenses.component.css'],
})
export class IncomeExpensesComponent {
  displayedColumns: string[] = ['select', 'name', 'value'];
  dataSource = new MatTableDataSource<Expense>(EXPENSE_DATA);
  selection = new SelectionModel<Expense>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Expense): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }

  getTotalExpenses() {
    return this.dataSource.data
      .map((t) => t.value)
      .reduce((acc, value) => acc + value, 0);
  }

  addIncome() {}
}
