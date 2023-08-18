import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import * as sampleData from '../sample-data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.rowData);
  }

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData: any[] = [
    { "make": "Porsche", "model": "Boxter", "price": 72000 },
    { "make": "Ford", "model": "Mondeo", "price": 32000 },
    { "make": "Ford", "model": "Mondeo", "price": 32000 },
    { "make": "Toyota", "model": "Celica", "price": 35000 },
    { "make": "Toyota", "model": "Celica", "price": 35000 },
    { "make": "Porsche", "model": "Boxter", "price": 72000 },
    { "make": "Toyota", "model": "Celica", "price": 35000 },
    { "make": "Toyota", "model": "Celica", "price": 35000 },
    { "make": "Porsche", "model": "Boxter", "price": 72000 },
    { "make": "Porsche", "model": "Boxter", "price": 72000 },
    { "make": "Porsche", "model": "Boxter", "price": 72000 },
    { "make": "Toyota", "model": "Celica", "price": 35000 },
    { "make": "Porsche", "model": "Boxter", "price": 72000 },
    { "make": "Ford", "model": "Mondeo", "price": 32000 },
    { "make": "Ford", "model": "Mondeo", "price": 32000 },
    { "make": "Porsche", "model": "Boxter", "price": 72000 },
    { "make": "Porsche", "model": "Boxter", "price": 72000 },
    { "make": "Porsche", "model": "Boxter", "price": 72000 },
    { "make": "Ford", "model": "Mondeo", "price": 32000 },
    { "make": "Toyota", "model": "Celica", "price": 35000 },
    { "make": "Toyota", "model": "Celica", "price": 35000 },
    { "make": "Toyota", "model": "Celica", "price": 35000 },
    { "make": "Toyota", "model": "Celica", "price": 35000 },
    { "make": "Toyota", "model": "Celica", "price": 35000 },
    { "make": "Toyota", "model": "Celica", "price": 35000 },
    { "make": "Ford", "model": "Mondeo", "price": 32000 }
  ];

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor() {}

  // Example load data from server
  onGridReady(params: GridReadyEvent) {}

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
}
