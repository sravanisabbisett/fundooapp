import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/Services/dataService/dataservice.service';
import { NoteserviceService } from 'src/app/Services/noteService/noteservice.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(private noteservice:NoteserviceService,private dataservice:DataserviceService) { }

  note=[];
  notes = [];
  ngOnInit(): void {
    this.getAllNotes();
    this.dataservice.currentMessage.subscribe((msg)=>{
      console.log(" message ", msg);
      this.getAllNotes();
      
    })
  }

  receiveMessage($event: any){
    console.log(" message get all notee from craete note",$event);
    this.getAllNotes();
  }
  
  getAllNotes(){
    this.noteservice.getAllNotes().subscribe((respnse:any)=>{
      console.log(respnse);
      this.note=respnse['data'].data
      this.notes= this.note.filter((ele:any)=>{
        console.log(ele.isDeleted);
        
        return ele.isDeleted == false
      })
      console.log(" flitered array ");
    })
    console.log("Printing the notes")
    console.log(this.note);
  }

}
