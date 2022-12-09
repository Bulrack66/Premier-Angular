import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

ngOnInit() {
    this.mySnap = new FaceSnap(
    'Archibald',
    'Mon meilleur ami depuis tout petit',
    'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    new Date(),
    0
    )
    this.myOtherSnap = new FaceSnap(
    'Luke Skywalker',
    'Un mec trés fort',
    'https://cdn-media2.planete-starwars.com/news/60545-luke-skywalker-169-lg.jpg?w=768&f=w',
    new Date(),
    0
    )
    this.myLastSnap = new FaceSnap(
    'C-3PO',
    'Un robot pas comme les autres',
    'https://cdn-media.planete-starwars.com/news/63420-1-169-lg.jpg',
    new Date(),
    0
    )
  };
}
