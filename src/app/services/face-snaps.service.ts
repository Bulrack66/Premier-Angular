import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
    id: 1,
    title: 'Archibald',
    description: 'Mon meilleur ami depuis tout petit',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    createdDate: new Date(),
    snaps: 20,
    location: 'Malaga'
    },
    {
    id: 2,
    title:'Luke Skywalker',
    description:'Un mec trés fort',
    imageUrl:'https://cdn-media2.planete-starwars.com/news/60545-luke-skywalker-169-lg.jpg?w=768&f=w',
    createdDate:new Date(),
    snaps:0,
    location:'Pekin'
    },
    {
    id: 3,
    title:'C-3PO',
    description:'Un robot pas comme les autres',
    imageUrl:'https://cdn-media.planete-starwars.com/news/63420-1-169-lg.jpg',
    createdDate:new Date(),
    snaps: 35,
    location:'Washington'
    },
    {
      id: 4,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 27,
      location: 'la montagne'
    },
    {
      id: 5,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 101,
      location: 'la montagne'
    }
  ];

  getAllFaceSnaps(){
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error("FaceSnap not found");
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}

