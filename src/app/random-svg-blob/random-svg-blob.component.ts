import { Component } from '@angular/core';

@Component({
  selector: 'random-svg-blob',
  templateUrl: './random-svg-blob.component.html',
  styleUrls: ['./random-svg-blob.component.scss']
})
export class RandomSvgBlobComponent {
  blobs: string[] = ['assets/blob0.svg','assets/blob1.svg','assets/blob2.svg','assets/blob3.svg','assets/blob4.svg','assets/blob5.svg','assets/blob6.svg'];
  random:number = Math.floor(Math.random() * this.blobs.length);
  constructor() { }
  getBlob(){
    return this.blobs[this.random]
  }

}
