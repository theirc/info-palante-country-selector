export interface Site {
  name: string;
  url: string;
}

export interface LocaleSelectButtonProps {
  site: Site;
  onClick: (e: React.SyntheticEvent) => void;
}

export const GOOGLE_ANALYTICS_IDS = [
  process.env.NEXT_PUBLIC_GA_ID ?? '',
  process.env.NEXT_PUBLIC_GA4_ID ?? '',
];

export const COUNTRY_URLS: Site[] = [
  { name: 'Colombia', url: 'https://www.infopalante.org/es' },
  { name: 'Ecuador', url: 'https://www.infopalanteec.org/es' },
  { name: 'Peru', url: 'https://www.peru.infopalante.org/es' },
];

export const SITE_TITLE = 'InfoPalante';
export const SITE_MESSAGE =
  'Información confiable para el empoderamiento de la población en el norte de Centroamérica';
