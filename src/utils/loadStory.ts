import type { Story } from '../data/types';

export function loadStory(id: string): Story | null {
  try {
    switch (id) {
      // Dutch A1
      case 'nl-a1-1':  return require('../data/story-nl-a1-1').storyNlA1_1;
      case 'nl-a1-2':  return require('../data/story-nl-a1-2').storyNlA1_2;
      case 'nl-a1-3':  return require('../data/story-nl-a1-3').storyNlA1_3;
      case 'nl-a1-4':  return require('../data/story-nl-a1-4').storyNlA1_4;
      case 'nl-a1-5':  return require('../data/story-nl-a1-5').storyNlA1_5;
      case 'nl-a1-6':  return require('../data/story-nl-a1-6').storyNlA1_6;
      case 'nl-a1-7':  return require('../data/story-nl-a1-7').storyNlA1_7;
      case 'nl-a1-8':  return require('../data/story-nl-a1-8').storyNlA1_8;
      case 'nl-a1-9':  return require('../data/story-nl-a1-9').storyNlA1_9;
      case 'nl-a1-10': return require('../data/story-nl-a1-10').storyNlA1_10;
      // Dutch A2
      case 'nl-a2-1':  return require('../data/story-nl-a2-1').storyNlA2_1;
      case 'nl-a2-2':  return require('../data/story-nl-a2-2').storyNlA2_2;
      case 'nl-a2-3':  return require('../data/story-nl-a2-3').storyNlA2_3;
      case 'nl-a2-4':  return require('../data/story-nl-a2-4').storyNlA2_4;
      case 'nl-a2-5':  return require('../data/story-nl-a2-5').storyNlA2_5;
      case 'nl-a2-6':  return require('../data/story-nl-a2-6').storyNlA2_6;
      case 'nl-a2-7':  return require('../data/story-nl-a2-7').storyNlA2_7;
      case 'nl-a2-8':  return require('../data/story-nl-a2-8').storyNlA2_8;
      case 'nl-a2-9':  return require('../data/story-nl-a2-9').storyNlA2_9;
      case 'nl-a2-10': return require('../data/story-nl-a2-10').storyNlA2_10;
      default: return null;
    }
  } catch {
    return null;
  }
}
