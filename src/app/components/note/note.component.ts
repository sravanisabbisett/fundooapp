import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/Services/noteService/noteservice.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(private noteservice:NoteserviceService) { }

  note=[]
  ngOnInit(): void {
    this.getAllNotes();
  }

  receiveMessage($event: any){
    console.log(" message get all notee from craete note",$event);
    this.getAllNotes();
  }
  
  getAllNotes(){
    this.noteservice.getAllNotes().subscribe((respnse:any)=>{
      console.log(respnse);
      this.note=respnse['data'].data
    })
    console.log("Printing the notes")
    console.log(this.note);
  }

}
