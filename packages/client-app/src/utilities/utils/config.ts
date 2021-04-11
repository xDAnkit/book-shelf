interface ILanguage {
  size: number;
  label: string;
  value: string;
}

export const LANGUAGE: ILanguage[] = [
  {
    size: 30,
    label: 'English',
    value: 'english',
  },
  {
    size: 30,
    label: 'हिन्दी',
    value: 'hindi',
  },
  {
    size: 30,
    label: 'मराठी',
    value: 'marathi',
  },
  {
    size: 30,
    label: 'తెలుగు',
    value: 'telugu',
  },
];
