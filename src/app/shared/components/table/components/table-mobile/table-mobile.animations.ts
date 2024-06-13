import {
  trigger,
  state,
  style,
  transition,
  sequence,
  animate,
} from '@angular/animations';

export const animations = [
  trigger('collapse', [
    state(
      'false',
      style({
        opacity: 0,
        'max-height': '0px',
        'z-index': '-1',
        transition: 'max-height 0.5s ease-in-out',
      })
    ),
    state(
      'true',
      style({
        opacity: 1,
        'max-height': '221px',
        'z-index': '1',
        transition: 'max-height 0.5s ease-in-out',
      })
    ),
    transition(
      'false => true',
      sequence([
        style({}),
        animate('500ms', style({ 'max-height': '221px', 'z-index': '1' })),
        animate('250ms', style({ opacity: 1 })),
      ])
    ),
    transition(
      'true => false',
      sequence([
        style({}),
        animate('250ms', style({ opacity: 0 })),
        animate('500ms', style({ 'max-height': '0', 'z-index': '-11' })),
      ])
    ),
  ]),
];
