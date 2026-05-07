# CuentoApp — Claude Context

## What This Is

A React Native / Expo language-learning app. Users read branching interactive stories in Spanish or Dutch, learn vocabulary via spaced repetition, and track progress with streaks and XP. Free tier + IAP subscriptions for premium content.

## Tech Stack

| Area | Choice |
|------|--------|
| Framework | React Native 0.76.5 + Expo 52 |
| Routing | Expo Router 4 (file-based) |
| Language | TypeScript (strict, path alias `@/*` → `src/*`) |
| State | Custom `useReducer` + AsyncStorage (no Redux/Zustand) |
| Animations | React Native Reanimated 3 |
| Payments | react-native-iap 12 |
| Fonts | Lora (serif) + DM Sans (sans-serif) via expo-google-fonts |

## Project Structure

```
app/                        # Expo Router pages
  (tabs)/                   # Bottom tab bar (home, vocab, profile, settings)
  story/[id]/               # Story flow screens
    chapter.tsx             # Read text + vocab popups
    choice.tsx              # Branching path selection
    quiz.tsx                # Comprehension quiz
    ending.tsx              # Story conclusion + XP award
  _layout.tsx               # Root layout — wraps AppProvider + IAPProvider
  index.tsx                 # Entry — redirects to onboarding or tabs
  lang-select.tsx           # Onboarding step 1
  level-select.tsx          # Onboarding step 2
  goals.tsx                 # Onboarding step 3
  paywall.tsx               # Pro upgrade modal

src/
  components/               # Reusable UI (StoryCard, VocabFlipCard, TabBar, …)
  context/
    AppContext.tsx           # Main app state (useReducer + AsyncStorage)
    IAPContext.tsx           # In-app purchase state
  data/
    types.ts                # All TypeScript interfaces (Story, Chapter, VocabWord, …)
    registry.ts             # STORY_REGISTRY — 32 story entries (id, level, free flag, …)
    story-*.ts              # Individual story data files
  hooks/
    useStreak.ts            # Streak helpers
  services/
    IAPService.ts           # react-native-iap wrapper
  theme/                    # Colors, fonts, spacing, level colors, ending gradients
  utils/
    loadStory.ts            # Dynamic story loader (switch on story id)
```

## Navigation Flow

```
index.tsx
├─ Not onboarded → lang-select → level-select → goals → (tabs)
└─ Onboarded     → (tabs)

(tabs): Home | Vocab | Profile | Settings

Story flow (stack, opened from Home):
  chapter → choice → chapter → … → quiz → ending
```

Story routes live under `/story/[id]/`. The paywall is a modal presented when a non-pro user taps a premium story.

## State (AppContext)

Persisted to AsyncStorage under key `"cuento_state_v1"` via `LOAD_STATE` / reducer pattern.

Key state slices:
- **Onboarding**: `onboardingDone`, `userName`, `selectedLanguage`, `userLevel`, `learningGoals`
- **Subscription**: `isPro`
- **Settings**: `darkMode`, `fontSize`, `showVocab`, `translationLang`, `notificationsEnabled`
- **Progress**: `storyProgress`, `completedStories`, `currentStoryId`, `currentChapterId`, `chapterPath`
- **Gamification**: `totalXP`, `activityLog`, `vocabDeck` (mastery + spaced repetition)

Key actions: `START_STORY`, `ADVANCE_CHAPTER`, `COMPLETE_STORY`, `ADD_VOCAB`, `RATE_VOCAB`, `LOG_ACTIVITY`, `SET_PRO`.

## Content / Data Model

```typescript
Story {
  id: string           // e.g. "a1-1", "nl-a2-5"
  level: "A1"|"A2"|"B1"|"B2"|"C1"|"C2"
  lang: "es" | "nl"
  chapters: Record<string, Chapter>
  startChapter: string
}

Chapter {
  id, num, title, text
  vocab:   [{w, d, example?}]          // vocabulary words
  choices: [{text, hint, next}]        // branching paths
  quiz:    {q, opts[], a: number}      // multiple choice
  ending?: "good" | "neutral" | "bad"
}
```

## Content Catalog

- **Spanish (es)**: 12 stories — A1×3, A2×3, B1×3, B2×3 (C1/C2 planned)
- **Dutch (nl)**: 20 stories — A1×10, A2×10
- **Free**: 3 free per language (first A1, A2, B1 for Spanish; first A1, A2 for Dutch)
- **Premium**: all others require `isPro = true`

To add a new story: create `src/data/story-[id].ts`, add an entry to `src/data/registry.ts`, add the import/case to `src/utils/loadStory.ts`.

## Design System

Theme lives in `src/theme/`. Key tokens:
- Brand: forest green `#1a3020`, amber accents
- Level colors: A1–C2 each have a distinct color
- Ending gradients: good / neutral / bad
- Dark mode supported throughout

## Running the App

```bash
npx expo start          # Start dev server (choose iOS/Android/web)
npx expo run:ios        # Build + run on iOS simulator
```

No environment variables required for local dev. IAP requires a real device and App Store sandbox account for testing purchases.

## Key Conventions

- Path imports use `@/` alias (e.g. `import { Story } from '@/data/types'`)
- All screens use `useApp()` from `AppContext` for state
- Theme values come from `src/theme/` — no hardcoded colors in components
- Story files export a single `const story: Story = { … }` default
- Portrait-only orientation (enforced in app.json)
- iOS bundle ID / Android package: `com.cuento.app`