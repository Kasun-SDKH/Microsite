import {
  trigger,
  transition,
  style,
  animate,
  AnimationTriggerMetadata,
} from '@angular/animations';

export const slideInOut: AnimationTriggerMetadata = trigger('slideInOut', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    animate(
      '300ms ease-out',
      style({ transform: 'translateX(0%)', opacity: 1 })
    ),
  ]),
  transition(':leave', [
    animate(
      '300ms ease-out',
      style({ transform: 'translateX(100%)', opacity: 0 })
    ),
  ]),
]);
