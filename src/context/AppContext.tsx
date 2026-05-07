import React, { createContext, useContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { VocabEntry, CompletedStory, FontSize, EndingType } from '../data/types';
import { todayISO } from '../hooks/useStreak';

const STORAGE_KEY = 'verhaal_state_v1';

export interface AppState {
  isLoaded: boolean;

  // Onboarding
  onboardingDone: boolean;
  userName: string;
  selectedLanguage: string;
  userLevel: string;
  learningGoals: string[];

  // Subscription
  isPro: boolean;

  // Settings
  darkMode: boolean;
  fontSize: FontSize;
  showVocab: boolean;
  translationLang: string;
  notificationsEnabled: boolean;

  // Gamification
  totalXP: number;
  activityLog: string[];
  vocabDeck: VocabEntry[];

  // Reading progress
  storyProgress: Record<string, Record<string, 'completed' | 'current' | 'locked'>>;
  completedStories: CompletedStory[];
  currentStoryId: string | null;
  currentChapterId: string | null;
  chapterPath: string[];
}

const DEFAULT_STATE: AppState = {
  isLoaded: false,
  onboardingDone: false,
  userName: '',
  selectedLanguage: 'nl',
  userLevel: 'A1',
  learningGoals: [],
  isPro: false,
  darkMode: false,
  fontSize: 'medium',
  showVocab: true,
  translationLang: 'en',
  notificationsEnabled: true,
  totalXP: 0,
  activityLog: [],
  vocabDeck: [],
  storyProgress: {},
  completedStories: [],
  currentStoryId: null,
  currentChapterId: null,
  chapterPath: [],
};

type Action =
  | { type: 'LOAD'; payload: AppState }
  | { type: 'MARK_LOADED' }
  | { type: 'SET_ONBOARDING_DONE'; userName: string; level: string; goals: string[] }
  | { type: 'SET_LANGUAGE'; lang: string }
  | { type: 'SET_LEVEL'; level: string }
  | { type: 'SET_PRO'; value: boolean }
  | { type: 'TOGGLE_DARK_MODE' }
  | { type: 'SET_FONT_SIZE'; value: FontSize }
  | { type: 'TOGGLE_VOCAB' }
  | { type: 'TOGGLE_NOTIFICATIONS' }
  | { type: 'LOG_ACTIVITY' }
  | { type: 'ADD_XP'; amount: number }
  | { type: 'START_STORY'; storyId: string; chapterId: string }
  | { type: 'ADVANCE_CHAPTER'; storyId: string; chapterId: string }
  | { type: 'COMPLETE_STORY'; storyId: string; ending: EndingType; chaptersRead: number; wordsEncountered: number; xpEarned: number }
  | { type: 'ADD_VOCAB'; words: VocabEntry[] }
  | { type: 'RATE_VOCAB'; word: string; rating: 'hard' | 'known' }
  | { type: 'RESET' };

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'LOAD':
      return { ...action.payload, isLoaded: true };

    case 'MARK_LOADED':
      return { ...state, isLoaded: true };

    case 'SET_ONBOARDING_DONE':
      return {
        ...state,
        onboardingDone: true,
        userName: action.userName,
        userLevel: action.level,
        learningGoals: action.goals,
        activityLog: [...state.activityLog, todayISO()],
      };

    case 'SET_LANGUAGE':
      return { ...state, selectedLanguage: action.lang };

    case 'SET_LEVEL':
      return { ...state, userLevel: action.level };

    case 'SET_PRO':
      return { ...state, isPro: action.value };

    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };

    case 'SET_FONT_SIZE':
      return { ...state, fontSize: action.value };

    case 'TOGGLE_VOCAB':
      return { ...state, showVocab: !state.showVocab };

    case 'TOGGLE_NOTIFICATIONS':
      return { ...state, notificationsEnabled: !state.notificationsEnabled };

    case 'LOG_ACTIVITY': {
      const today = todayISO();
      if (state.activityLog.includes(today)) return state;
      return { ...state, activityLog: [...state.activityLog, today] };
    }

    case 'ADD_XP':
      return { ...state, totalXP: state.totalXP + action.amount };

    case 'START_STORY': {
      const progress = { ...state.storyProgress };
      progress[action.storyId] = { [action.chapterId]: 'current' };
      return {
        ...state,
        currentStoryId: action.storyId,
        currentChapterId: action.chapterId,
        chapterPath: [action.chapterId],
        storyProgress: progress,
      };
    }

    case 'ADVANCE_CHAPTER': {
      const progress = { ...state.storyProgress };
      const storyProgress = { ...(progress[action.storyId] || {}) };
      if (state.currentChapterId) {
        storyProgress[state.currentChapterId] = 'completed';
      }
      storyProgress[action.chapterId] = 'current';
      progress[action.storyId] = storyProgress;
      return {
        ...state,
        currentChapterId: action.chapterId,
        chapterPath: [...state.chapterPath, action.chapterId],
        storyProgress: progress,
      };
    }

    case 'COMPLETE_STORY': {
      const progress = { ...state.storyProgress };
      const storyProgress = { ...(progress[action.storyId] || {}) };
      if (state.currentChapterId) {
        storyProgress[state.currentChapterId] = 'completed';
      }
      progress[action.storyId] = storyProgress;
      const entry: CompletedStory = {
        storyId: action.storyId,
        ending: action.ending,
        completedAt: new Date().toISOString(),
        chaptersRead: action.chaptersRead,
        wordsEncountered: action.wordsEncountered,
        xpEarned: action.xpEarned,
      };
      return {
        ...state,
        storyProgress: progress,
        completedStories: [...state.completedStories, entry],
        totalXP: state.totalXP + action.xpEarned,
        currentStoryId: null,
        currentChapterId: null,
        chapterPath: [],
      };
    }

    case 'ADD_VOCAB': {
      const existing = new Set(state.vocabDeck.map(v => v.word));
      const newWords = action.words.filter(w => !existing.has(w.word));
      return { ...state, vocabDeck: [...state.vocabDeck, ...newWords] };
    }

    case 'RATE_VOCAB': {
      const deck = state.vocabDeck.map(v => {
        if (v.word !== action.word) return v;
        if (action.rating === 'known') {
          const interval = v.interval >= 1 ? v.interval * 2 : 1;
          const next = new Date();
          next.setDate(next.getDate() + interval);
          return { ...v, mastery: 'known' as const, interval, nextReview: next.toISOString().slice(0, 10) };
        } else {
          const next = new Date();
          next.setDate(next.getDate() + 1);
          return { ...v, mastery: 'learning' as const, interval: 1, nextReview: next.toISOString().slice(0, 10) };
        }
      });
      return { ...state, vocabDeck: deck };
    }

    case 'RESET':
      return DEFAULT_STATE;

    default:
      return state;
  }
}

interface AppContextValue {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then(raw => {
      if (raw) {
        try {
          dispatch({ type: 'LOAD', payload: JSON.parse(raw) });
          return;
        } catch {}
      }
      dispatch({ type: 'MARK_LOADED' });
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
