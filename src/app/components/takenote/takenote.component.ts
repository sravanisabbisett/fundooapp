import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteserviceService } from 'src/app/Services/noteService/noteservice.service';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {

  isOpen = true;
  title=''
  description=''
  hide = true;
  setColor='';
  click() {
    this.isOpen = true;
  }
  constructor(private noteservice:NoteserviceService) { }
  @Output() messageEvent = new EventEmitter<string>();
  ngOnInit() {
  }

  addNote(){
    let data={
      title:this.title,
      description:this.description
    } 
    console.log(" add note data ", data);
    this.noteservice.createNote(data).subscribe((response)=>{
      console.log(response);
      let message="note created successfull"
      this.messageEvent.emit(message);
    })
  }


}
