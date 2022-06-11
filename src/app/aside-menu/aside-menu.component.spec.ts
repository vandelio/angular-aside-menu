import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideMenuComponent } from './aside-menu.component';

describe('AsideMenuComponent', () => {
  let component: AsideMenuComponent;
  let fixture: ComponentFixture<AsideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display menu button svg icon', () => {
    const fixture = TestBed.createComponent(AsideMenuComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.openbutton')?.innerHTML).toContain('<svg');
  });
  it('should display menu item(s)', () => {
    const fixture = TestBed.createComponent(AsideMenuComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('aside nav#main ul')?.innerHTML).toContain('<li');
  });
});
