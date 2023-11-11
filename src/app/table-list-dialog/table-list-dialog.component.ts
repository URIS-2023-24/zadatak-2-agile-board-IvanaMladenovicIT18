import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contributor } from 'app/models/contributor';
import { TaskDialogData } from 'app/models/task-dialog-data';

@Component({
  selector: 'table-list-dialog',
  templateUrl: './table-list-dialog.component.html',
  styleUrls: ['./table-list-dialog.component.scss']
})
export class TableListDialogComponent implements OnInit {
  dialogData : TaskDialogData;

  constructor(
    public dialogRef : MatDialogRef<TableListDialogComponent>,//jedan te isti dialog se kreira svaki put, metodom close ga unistavamo iz memorije
    @Inject(MAT_DIALOG_DATA) public data : TaskDialogData) { } //podaci koji traju dok traje dijalog

  ngOnInit(): void {
  }

  onClick() : void {
    this.dialogRef.close();
  }

}
