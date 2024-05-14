import { Component, OnInit } from '@angular/core';
import { StepperService } from '../bottom-bar/services/stepper.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  currentStep: number = 1;

  constructor(private stepperService: StepperService<any>) {}

  ngOnInit() {
    this.stepperService.currentIndex$.subscribe(index => {
      this.currentStep = this.stepperService.getSteps()[index];
    });
  }
}
