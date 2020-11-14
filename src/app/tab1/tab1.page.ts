import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {Course} from '../models/course';
import {FirestoreService} from '../services/data/firestore.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  courses: Observable<Course[]>;
  constructor(public firestore: FirestoreService) {
   this.courses = this.firestore.getCourseList();
  }


}
