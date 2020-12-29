import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

  constructor(private http:HttpServiceService) { }

  createNote(data: any){
    return this.http.post('notes/addNotes',data);
  }

  getAllNotes(){
    return this.http.get('notes/getNotesList');
  }

  updateNote(data:any){
    return this.http.post('notes/updateNotes',data)
   }
}
