import { Component, OnInit } from '@angular/core';
import {Course} from '../../../models/course';
import {FirestoreService} from '../../../services/data/firestore.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import * as moment from 'moment';
import 'moment/locale/fr';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public course;
  public date_format;
  constructor(private firestore: FirestoreService,
              private route: ActivatedRoute,
              private alertController: AlertController,
              private router: Router) { }

  ngOnInit() {
    const courseId: string = this.route.snapshot.paramMap.get('id');
    console.log(courseId);
    this.firestore.getCourseDetail(courseId).subscribe( course => {
      this.course = course;
      // @ts-ignore
      const date = course.date.toDate();
      this.date_format = moment(date).format('lll');
      console.log();
    });
  }

  async deleteCourse(courseId: string, client: string): Promise<void> {
    console.log(courseId);
    console.log(client);
    const alert = await this.alertController.create({
      message: `Etes vous sûr de vouloir supprimer la course de  ${client}?`,
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: blah => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Confirmer',
          handler: () => {
            this.firestore.deleteCourse(this.course.id).then(() => {
              this.router.navigateByUrl('');
            });
          },
        },
      ],
    });

    await alert.present();
  }

}
