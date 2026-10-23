const AVATAR_COLORS = ['#3b6cf6', '#7a5af8', '#e5484d', '#188a5f', '#d97706', '#0e9384', '#c026d3', '#2563eb', '#db2777', '#ca8a04'];

/** Deterministic WorkBuddy-style avatar color for an expert name. */
export function avatarColor(name: string): string {
  let hash = 0;
  for (const ch of name) hash = (hash * 31 + (ch.codePointAt(0) ?? 0)) >>> 0;
  return AVATAR_COLORS[hash % AVATAR_COLORS.length]!;
}

/** Card title: the profession after `Name · Profession`, or the name itself. */
export function expertTitle(name: string): string {
  return name.split(' · ').at(-1)?.trim() || name;
}
