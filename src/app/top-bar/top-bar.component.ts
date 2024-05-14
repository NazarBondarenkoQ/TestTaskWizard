import { Component, Input, OnInit } from '@angular/core';
import { StepperService } from '../services/stepper.service';
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgClass
  ],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent<T> implements OnInit {
  @Input() items: T[] = [];
  currentIndex: number = 0;

  constructor(private stepperService: StepperService<T>) {}

  ngOnInit() {
    if (this.items.length) {
      this.stepperService.setSteps(this.items);
    }
    this.stepperService.currentIndex$.subscribe(index => this.currentIndex = index);
  }
}
