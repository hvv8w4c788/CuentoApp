export function computeStreak(activityLog: string[]): number {
  if (activityLog.length === 0) return 0;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dates = [...new Set(activityLog.map(d => d.slice(0, 10)))]
    .map(d => new Date(d))
    .sort((a, b) => b.getTime() - a.getTime());

  let streak = 0;
  let expected = new Date(today);

  for (const date of dates) {
    const diff = Math.round((expected.getTime() - date.getTime()) / 86400000);
    if (diff === 0 || diff === 1) {
      streak++;
      expected = new Date(date);
      expected.setDate(expected.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}

export function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

export function getStreakDays(activityLog: string[], count = 7): boolean[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const logSet = new Set(activityLog.map(d => d.slice(0, 10)));
  return Array.from({ length: count }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - (count - 1 - i));
    return logSet.has(d.toISOString().slice(0, 10));
  });
}
