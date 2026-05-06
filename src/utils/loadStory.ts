import type { Story } from '../data/types';

export function loadStory(id: string): Story | null {
  try {
    switch (id) {
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
      default: return null;
    }
  } catch {
    return null;
  }
}
