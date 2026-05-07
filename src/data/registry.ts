import type { StoryRegistryEntry } from './types';

export const STORY_REGISTRY: StoryRegistryEntry[] = [
  // ── Dutch (nl) ──────────────────────────────────────────────────────────────
  { id: 'nl-a1-1',  lang: 'nl', level: 'A1', free: true,  varName: 'storyNlA1_1',  title: 'De Verdwaalde Kat',      genre: 'Avontuur',  emoji: '🐱', coverColor: '#2a3d2e', accentColor: '#7ab87e', description: 'Jouw kat Moos is weg. Zoek je trouwe vriend in de buurt.' },
  { id: 'nl-a1-2',  lang: 'nl', level: 'A1', free: false, varName: 'storyNlA1_2',  title: 'Mijn Eerste Dag',        genre: 'Dagelijks leven', emoji: '☕', coverColor: '#3a2a1e', accentColor: '#c8905a', description: 'Je begint een nieuwe baan in een café. Alles is nieuw en spannend.' },
  { id: 'nl-a1-3',  lang: 'nl', level: 'A1', free: false, varName: 'storyNlA1_3',  title: 'Het Verjaardagsfeest',   genre: 'Familie',   emoji: '🎂', coverColor: '#3d1a2e', accentColor: '#e87db8', description: 'Vandaag is het de verjaardag van je moeder. Organiseer het beste feest ooit!' },
  { id: 'nl-a1-4',  lang: 'nl', level: 'A1', free: false, varName: 'storyNlA1_4',  title: 'In de Supermarkt',       genre: 'Humor',     emoji: '🛒', coverColor: '#1e2a45', accentColor: '#6b9fd4', description: 'Je vergeet je portemonnee in de supermarkt. Wat nu?' },
  { id: 'nl-a1-5',  lang: 'nl', level: 'A1', free: false, varName: 'storyNlA1_5',  title: 'Het Nieuwe Huis',        genre: 'Avontuur',  emoji: '🏠', coverColor: '#2a1e3d', accentColor: '#a07bd4', description: 'Je verhuist naar een nieuw huis. Leer je nieuwe buren kennen.' },
  { id: 'nl-a1-6',  lang: 'nl', level: 'A1', free: false, varName: 'storyNlA1_6',  title: 'De Nieuwe Buurvrouw',    genre: 'Vriendschap', emoji: '👋', coverColor: '#1e3a2a', accentColor: '#60b890', description: 'Je nieuwe buurvrouw heeft hulp nodig. Kun jij haar helpen?' },
  { id: 'nl-a1-7',  lang: 'nl', level: 'A1', free: false, varName: 'storyNlA1_7',  title: 'Bij de Dokter',          genre: 'Dagelijks leven', emoji: '🏥', coverColor: '#1a2a3d', accentColor: '#6090d4', description: 'Je voelt je niet goed. Je gaat naar de dokter.' },
  { id: 'nl-a1-8',  lang: 'nl', level: 'A1', free: false, varName: 'storyNlA1_8',  title: 'Op de Markt',            genre: 'Avontuur',  emoji: '🧺', coverColor: '#3a2a1a', accentColor: '#c8a060', description: 'Je gaat naar de zaterdagmarkt. Er is veel te zien en te kopen.' },
  { id: 'nl-a1-9',  lang: 'nl', level: 'A1', free: false, varName: 'storyNlA1_9',  title: 'Het Huisdier',           genre: 'Familie',   emoji: '🐹', coverColor: '#2a3a1e', accentColor: '#80b860', description: 'Je wilt een huisdier. Welk dier past het best bij jou?' },
  { id: 'nl-a1-10', lang: 'nl', level: 'A1', free: false, varName: 'storyNlA1_10', title: 'De Kapotte Fiets',        genre: 'Humor',     emoji: '🚲', coverColor: '#1e2a3a', accentColor: '#60a0c8', description: 'Je fiets is kapot en je moet op tijd op je werk zijn.' },

  { id: 'nl-a2-1',  lang: 'nl', level: 'A2', free: true,  varName: 'storyNlA2_1',  title: 'De Fietsreis',           genre: 'Avontuur',  emoji: '🚴', coverColor: '#2a3d3a', accentColor: '#7ab8a0', description: 'Je maakt een meerdaagse fietstocht door Nederland. Alles gaat niet zoals gepland.' },
  { id: 'nl-a2-2',  lang: 'nl', level: 'A2', free: false, varName: 'storyNlA2_2',  title: 'Weekend in Amsterdam',   genre: 'Reizen',    emoji: '🏙️', coverColor: '#1e2a45', accentColor: '#6b8fc9', description: 'Je bezoekt Amsterdam voor het eerst. De stad heeft veel te bieden.' },
  { id: 'nl-a2-3',  lang: 'nl', level: 'A2', free: false, varName: 'storyNlA2_3',  title: 'Het Nieuwe Werk',        genre: 'Drama',     emoji: '💼', coverColor: '#1a1a2e', accentColor: '#8888ff', description: 'Je begint een nieuwe job bij een groot bedrijf. Collega\'s en uitdagingen wachten op je.' },
  { id: 'nl-a2-4',  lang: 'nl', level: 'A2', free: false, varName: 'storyNlA2_4',  title: 'De Treinreis',           genre: 'Mysterie',  emoji: '🚆', coverColor: '#2a1e14', accentColor: '#c8a860', description: 'Op de trein ontmoet je een vreemde die jouw hulp nodig heeft.' },
  { id: 'nl-a2-5',  lang: 'nl', level: 'A2', free: false, varName: 'storyNlA2_5',  title: 'Koken voor Vrienden',    genre: 'Humor',     emoji: '👨‍🍳', coverColor: '#3a1e1e', accentColor: '#d07070', description: 'Je nodigt vrienden uit voor een zelfgekookt diner. Wat kan er misgaan?' },
  { id: 'nl-a2-6',  lang: 'nl', level: 'A2', free: false, varName: 'storyNlA2_6',  title: 'Het Sportteam',          genre: 'Sport',     emoji: '⚽', coverColor: '#1e3a1e', accentColor: '#70b870', description: 'Je wilt lid worden van een lokaal voetbalteam. De selectie is niet eenvoudig.' },
  { id: 'nl-a2-7',  lang: 'nl', level: 'A2', free: false, varName: 'storyNlA2_7',  title: 'De Vakantie',            genre: 'Reizen',    emoji: '🏖️', coverColor: '#1a2a3d', accentColor: '#60a8d4', description: 'Je plant een vakantie maar er gaan van alles mis. Hoe los je het op?' },
  { id: 'nl-a2-8',  lang: 'nl', level: 'A2', free: false, varName: 'storyNlA2_8',  title: 'De Vlooienmarkt',        genre: 'Mysterie',  emoji: '🗝️', coverColor: '#2a1e2a', accentColor: '#b070d0', description: 'Op de vlooienmarkt vind je een mysterieus voorwerp. Wat is de geschiedenis ervan?' },
  { id: 'nl-a2-9',  lang: 'nl', level: 'A2', free: false, varName: 'storyNlA2_9',  title: 'Het Grote Feest',        genre: 'Drama',     emoji: '🎉', coverColor: '#3d1a1a', accentColor: '#e07060', description: 'Je organiseert een groot feest voor vijftig mensen. Niets gaat zoals gepland.' },
  { id: 'nl-a2-10', lang: 'nl', level: 'A2', free: false, varName: 'storyNlA2_10', title: 'De Taalcursus',          genre: 'Vriendschap', emoji: '📚', coverColor: '#1a2a1a', accentColor: '#70c070', description: 'Je volgt een cursus Nederlands en ontmoet interessante mensen.' },
];

export function getStoriesByLanguage(lang: string): StoryRegistryEntry[] {
  return STORY_REGISTRY.filter(s => s.lang === lang);
}

export function getStoriesByLanguageAndLevel(lang: string, level: string): StoryRegistryEntry[] {
  return STORY_REGISTRY.filter(s => s.lang === lang && s.level === level);
}

export function getStoryEntry(id: string): StoryRegistryEntry | undefined {
  return STORY_REGISTRY.find(s => s.id === id);
}
