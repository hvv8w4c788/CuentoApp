import type { Story } from '../data/types';

export function loadStory(id: string): Story | null {
  try {
    switch (id) {
      // Spanish
      case 'a1-1': return require('../data/story-a1-1').storyA1_1;
      case 'a1-2': return require('../data/story-a1-2').storyA1_2;
      case 'a1-3': return require('../data/story-a1-3').storyA1_3;
      case 'a2-1': return require('../data/story-a2-1').storyA2_1;
      case 'a2-2': return require('../data/story-a2-2').storyA2_2;
      case 'a2-3': return require('../data/story-a2-3').storyA2_3;
      case 'b1-1': return require('../data/story-b1-1').storyB1_1;
      case 'b1-2': return require('../data/story-b1-2').storyB1_2;
      case 'b1-3': return require('../data/story-b1-3').storyB1_3;
      case 'b2-1': return require('../data/story-b2-1').storyB2_1;
      case 'b2-2': return require('../data/story-b2-2').storyB2_2;
      case 'b2-3': return require('../data/story-b2-3').storyB2_3;
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
