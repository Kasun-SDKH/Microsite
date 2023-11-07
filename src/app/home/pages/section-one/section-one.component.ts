import { Component, Input, OnInit } from '@angular/core';
import { bounceAnimation } from 'src/app/functions/bounce-in-animation.function';
import { slideInOut } from 'src/app/functions/slide-in-out.animation.function';
import { ICard, ISlide } from 'src/app/interfaces/page-slider.interface';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss'],
  animations: [bounceAnimation, slideInOut],
})
export class SectionOneComponent implements OnInit {
  @Input() public slide!: ISlide;
  public visibleCards: ICard[] = [];
  public currentIndex: number = 0;
  public prevButtonState = 'initial';
  public nextButtonState = 'initial';
  private readonly animationDuration: number = 500;
  private buttonStates: { next: string; prev: string } = {
    next: 'initial',
    prev: 'initial',
  };

  public ngOnInit(): void {
    this.initiateSlider();
  }

  public nextSlide(): void {
    if (this.slide.cards && this.currentIndex < this.slide.cards.length - 3) {
      this.currentIndex++;
      this.visibleCards = [
        ...this.slide.cards.slice(this.currentIndex, this.currentIndex + 3),
      ];
    }

    this.bounceButton(true);
  }

  public prevSlide(): void {
    if (this.slide.cards && this.currentIndex > 0) {
      this.currentIndex--;
      this.visibleCards = [
        ...this.slide.cards.slice(this.currentIndex, this.currentIndex + 3),
      ];
    }

    this.bounceButton();
  }

  private bounceButton(isNextButton: boolean = false): void {
    const buttonKey: 'next' | 'prev' = isNextButton ? 'next' : 'prev';
    this.buttonStates[buttonKey] = 'active';

    setTimeout(() => {
      this.buttonStates[buttonKey] = 'initial';
    }, this.animationDuration);
  }

  private initiateSlider(): void {
    if (this.slide.cards) {
      this.visibleCards = [
        ...this.slide.cards.slice(this.currentIndex, this.currentIndex + 3),
      ];
    }
  }
}
