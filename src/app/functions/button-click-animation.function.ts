import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationTriggerMetadata,
} from '@angular/animations';

export const buttonClickAnimation: AnimationTriggerMetadata = trigger(
  'buttonClick',
  [
    state(
      'clicked',
      style({
        transform: 'scale(1.2)', // Enlarge the button on click
      })
    ),
    transition('* => clicked', [animate('0.2s')]),
    transition('clicked => *', [animate('0.2s')]),
  ]
);
