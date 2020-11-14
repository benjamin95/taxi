import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Course} from '../../models/course';

@Injectable({
    providedIn: 'root'
})
export class FirestoreService {

    constructor(public firestore: AngularFirestore) {
    }

    createCourse(
        client: string,
        date: Date,
        prix: number,
        type: string
    ): Promise<void> {
        const id = this.firestore.createId();
        return this.firestore.doc(`courses/${id}`).set({
            id,
            client,
            date,
            prix,
            type,
        });
    }

    getCourseList(): Observable<Course[]>{
        return this.firestore.collection<Course>(`courses`).valueChanges();
    }

    getCourseDetail(courseId: string): Observable<Course> {
        return this.firestore.collection('courses').doc<Course>(courseId).valueChanges();
    }

    deleteCourse(courseId: string): Promise<void> {
        return this.firestore.doc(`courses/${courseId}`).delete();
    }
}
