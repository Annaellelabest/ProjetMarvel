import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarvelComponent } from './marvel.component';

describe('MarvelComponent', () => {
  let component: MarvelComponent;
  let fixture: ComponentFixture<MarvelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarvelComponent]
    });
    fixture = TestBed.createComponent(MarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
