import { Component } from '@angular/core';
import { StepperService } from './services/stepper.service';

@Component({
  selector: 'app-bottom-bar',
  standalone: true,
  imports: [],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.css'
})
export class BottomBarComponent {
  constructor(private stepperService: StepperService<any>) {}

  previousStep() {
    this.stepperService.previousStep();
  }

  nextStep() {
    this.stepperService.nextStep();
  }
}
