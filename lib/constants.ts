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
  { name: 'El Salvador', url: 'https://elsalvador.cuentanos.org/es' },
  { name: 'Guatemala', url: 'https://guatemala.cuentanos.org/es' },
  { name: 'Honduras', url: 'https://honduras.cuentanos.org/es' },
];

export const SITE_TITLE = 'CuentaNos';
export const SITE_MESSAGE =
  'Información confiable para el empoderamiento de la población en el norte de Centroamérica';
