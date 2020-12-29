import { Component, Input, OnInit } from '@angular/core';
import { UpdateComponent } from '../update/update.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  open=true;
  pinNote(){

  };
  pin(){

  }
  card='';
  isTrash=true;
  @Input() AllNotes: any
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(card: any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '250px',
      data: {note: card}
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}


