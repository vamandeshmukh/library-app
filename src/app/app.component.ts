import { Component } from '@angular/core';
import { Book } from './models/book';
import { Member } from './models/member';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library App';

  

onDeleteButtonClicked(receivedMember:Member){
  alert("Going to delete " + receivedMember.name)
}


}

