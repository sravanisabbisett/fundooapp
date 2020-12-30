import { Component, Input, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/Services/dataService/dataservice.service';
import { NoteserviceService } from 'src/app/Services/noteService/noteservice.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor(private noteService: NoteserviceService,private dataService: DataserviceService) { }


  ngOnInit(): void {
  }

  @Input() note:any

  deleteNote(){
    console.log(this.note);
    
    let data = {
    
      noteIdList: [this.note.id],
      isDeleted: true
    }


    this.noteService.deleteNotes(data).subscribe((response:any)=>{
      console.log(" dleted successfyull ");
      this.dataService.changeMessage("deleted")
      
    });
  }

}
