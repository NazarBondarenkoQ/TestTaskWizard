import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarComponent } from './top-bar.component';

describe('TopBarComponent', () => {
  let component: TopBarComponent<any>;
  let fixture: ComponentFixture<TopBarComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
