import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import {FirestoreService} from '../../../services/data/firestore.service';
import {Router} from '@angular/router';
import * as moment from 'moment';



@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  public createCourseForm: FormGroup;

  constructor(
      public loadingCtrl: LoadingController,
      public alertCtrl: AlertController,
      private firestoreService: FirestoreService,
      formBuilder: FormBuilder,
      private router: Router
  ) {
    this.createCourseForm = formBuilder.group({
      client: ['YASSIBE Fatiah', Validators.required],
      date: ['', Validators.required],
      prix: [65, Validators.required],
      type: ['CPAM', Validators.required],
    });
  }

  ngOnInit() {
  }

  async createCourse() {
    const loading = await this.loadingCtrl.create();

    const client = this.createCourseForm.value.client;

    const date = moment(this.createCourseForm.value.date).toDate();



    const prix = this.createCourseForm.value.prix;
    const type = this.createCourseForm.value.type;

    this.firestoreService
        .createCourse(client, date, prix, type)
        .then(
            () => {
              loading.dismiss().then(() => {
                this.router.navigateByUrl('');
              });
            },
            error => {
              loading.dismiss().then(() => {
                console.error(error);
              });
            }
        );
  }

}
