import { createDraggable } from 'animejs';

export const initDraggables = () => {
  createDraggable('.square', {
    container: '.grid',
    releaseContainerFriction: 0,
  });

  createDraggable('.circle', {
    container: '.grid',
    releaseContainerFriction: 1,
  });
};