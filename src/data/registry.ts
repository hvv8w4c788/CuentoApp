import type { StoryRegistryEntry } from './types';

export const STORY_REGISTRY: StoryRegistryEntry[] = [
  { id: 'a1-1', level: 'A1', free: true,  varName: 'storyA1_1' },
  { id: 'a1-2', level: 'A1', free: false, varName: 'storyA1_2' },
  { id: 'a1-3', level: 'A1', free: false, varName: 'storyA1_3' },
  { id: 'a2-1', level: 'A2', free: true,  varName: 'storyA2_1' },
  { id: 'a2-2', level: 'A2', free: false, varName: 'storyA2_2' },
  { id: 'a2-3', level: 'A2', free: false, varName: 'storyA2_3' },
  { id: 'b1-1', level: 'B1', free: true,  varName: 'storyB1_1' },
  { id: 'b1-2', level: 'B1', free: false, varName: 'storyB1_2' },
  { id: 'b1-3', level: 'B1', free: false, varName: 'storyB1_3' },
  { id: 'b2-1', level: 'B2', free: true,  varName: 'storyB2_1' },
  { id: 'b2-2', level: 'B2', free: false, varName: 'storyB2_2' },
  { id: 'b2-3', level: 'B2', free: false, varName: 'storyB2_3' },
  { id: 'c1-1', level: 'C1', free: false, varName: null, comingSoon: true },
  { id: 'c2-1', level: 'C2', free: false, varName: null, comingSoon: true },
];

export function getStoriesByLevel(level: string): StoryRegistryEntry[] {
  return STORY_REGISTRY.filter(s => s.level === level);
}

export function getStoryEntry(id: string): StoryRegistryEntry | undefined {
  return STORY_REGISTRY.find(s => s.id === id);
}
