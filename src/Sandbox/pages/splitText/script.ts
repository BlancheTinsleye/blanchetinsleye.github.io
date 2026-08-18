import { createTimeline, stagger, splitText } from 'animejs';

export const initTextAnimation = () => {

  const { words, chars } = splitText('#animate-mae', {
    words: { wrap: 'clip' },
    chars: true,
  });

  createTimeline({
    loop: true,
    defaults: {
      ease: 'inOut(3)',
      duration: 650,
    },
  })
    .add(words, {
      y: [
        ($el: HTMLElement) =>
          +$el.dataset.line! % 2 ? '100%' : '-100%',
        '0%',
      ],
    }, stagger(125))

    .add(chars, {
      y: ($el: HTMLElement) =>
        +$el.dataset.line! % 2 ? '100%' : '-100%',
    }, stagger(10, { from: 'random' }))

    .init();
};