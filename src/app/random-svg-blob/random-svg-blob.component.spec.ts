import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomSvgBlobComponent } from './random-svg-blob.component';

describe('RandomSvgBlobComponent', () => {
  let component: RandomSvgBlobComponent;
  let fixture: ComponentFixture<RandomSvgBlobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomSvgBlobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomSvgBlobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  const blobs = ['assets/blob0.svg','assets/blob1.svg','assets/blob2.svg','assets/blob3.svg','assets/blob4.svg','assets/blob5.svg','assets/blob6.svg'];
  it('should display blob svg in img', () => {
    const fixture = TestBed.createComponent(RandomSvgBlobComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const app = fixture.componentInstance;
    expect(compiled.querySelector('img')?.src).toContain('assets/blob');
  });
});
