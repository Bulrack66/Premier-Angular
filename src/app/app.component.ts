import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

ngOnInit() {
    this.faceSnaps = [
      {
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 20,
      location: 'Malaga'
      },
      {

      title:'Luke Skywalker',
      description:'Un mec trés fort',
      imageUrl:'https://cdn-media2.planete-starwars.com/news/60545-luke-skywalker-169-lg.jpg?w=768&f=w',
      createdDate:new Date(),
      snaps:0,
      location:'Pekin'
      },
      {
      title:'C-3PO',
      description:'Un robot pas comme les autres',
      imageUrl:'https://cdn-media.planete-starwars.com/news/63420-1-169-lg.jpg',
      createdDate:new Date(),
      snaps: 35,
      location:'Washington'
      }
    ]
  };
}
