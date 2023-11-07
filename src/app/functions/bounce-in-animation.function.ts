import {
  trigger,
  style,
  animate,
  transition,
  state,
  AnimationTriggerMetadata,
} from '@angular/animations';
export const bounceAnimation: AnimationTriggerMetadata = trigger('bounce', [
  state('initial', style({ transform: 'scale(1)' })),
  state('active', style({ transform: 'scale(1.2)' })),
  transition('* => active', [
    animate(
      '500ms cubic-bezier(0.8, -0.6, 0.2, 1.5)',
      style({ transform: 'scale(1.2)' })
    ),
    animate('500ms ease-in-out', style({ transform: 'scale(1)' })),
  ]),
]);
