export interface VocabWord {
  w: string;
  d: string;
  example?: string;
}

export interface Choice {
  text: string;
  hint: string;
  next: string;
}

export interface QuizQuestion {
  q: string;
  opts: string[];
  a: number;
}

export type EndingType = 'good' | 'neutral' | 'bad';

export interface Chapter {
  id: string;
  num: number;
  title: string;
  text: string;
  vocab: VocabWord[];
  choices: Choice[];
  quiz: QuizQuestion;
  ending?: EndingType;
}

export interface Story {
  id: string;
  level: string;
  title: string;
  genre: string;
  emoji: string;
  coverColor: string;
  accentColor: string;
  description: string;
  chapters: Record<string, Chapter>;
  startChapter: string;
}

export interface StoryRegistryEntry {
  id: string;
  level: string;
  free: boolean;
  varName: string | null;
  comingSoon?: boolean;
}

export interface VocabEntry {
  word: string;
  definition: string;
  example?: string;
  storyId: string;
  mastery: 'new' | 'learning' | 'known';
  nextReview: string;
  interval: number;
}

export interface CompletedStory {
  storyId: string;
  ending: EndingType;
  completedAt: string;
  chaptersRead: number;
  wordsEncountered: number;
  xpEarned: number;
}

export type FontSize = 'small' | 'medium' | 'large';
