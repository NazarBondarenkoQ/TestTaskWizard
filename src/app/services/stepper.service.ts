import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepperService<T> {
  private steps: T[] = [];
  private currentIndex = new BehaviorSubject<number>(0);
  currentIndex$ = this.currentIndex.asObservable();

  setSteps(steps: T[]) {
    this.steps = steps;
    this.currentIndex.next(0);
  }

  getSteps() {
    return this.steps;
  }

  previousStep() {
    const newIndex = (this.currentIndex.value - 1 + this.steps.length) % this.steps.length;
    this.currentIndex.next(newIndex);
  }

  nextStep() {
    const newIndex = (this.currentIndex.value + 1) % this.steps.length;
    this.currentIndex.next(newIndex);
  }
}
