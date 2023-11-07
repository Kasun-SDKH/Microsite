import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { buttonClickAnimation } from 'src/app/functions/button-click-animation.function';
import { ISlide } from 'src/app/interfaces/page-slider.interface';
import { PageInfoService } from 'src/app/services/page-info.service';

@Component({
  selector: 'app-page-slider',
  templateUrl: './page-slider.component.html',
  styleUrls: ['./page-slider.component.scss'],
  animations: [buttonClickAnimation],
})
export class PageSliderComponent implements OnInit, OnDestroy {
  public slides!: ISlide[];
  public activeSlide: number = 0;
  public currentIndex = 0;
  public buttonState: string = '*';
  private destroy$ = new Subject<void>();

  constructor(private pageDataService: PageInfoService) {}

  public ngOnInit(): void {
    this.loadPagesData();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public nextSlide(): void {
    this.buttonState = this.buttonState === 'clicked' ? '*' : 'clicked';
    this.activeSlide = this.activeSlide < this.slides.length - 1 ? +1 : 0;
  }

  private loadPagesData(): void {
    this.pageDataService
      .getPageDetails()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (pagedata: ISlide[]) => {
          this.slides = pagedata;
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {},
      });
  }
}
