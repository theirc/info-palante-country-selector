import { Button } from 'antd';
import Head from 'next/head';
import Image from 'next/image';

import {
  COUNTRY_URLS,
  LocaleSelectButtonProps,
  SITE_MESSAGE,
  SITE_TITLE,
} from '../lib/constants';
import CuentanosLogo from '../public/LOGO-CUENTANOS.png';

function LocaleSelectButton({ onClick, site }: LocaleSelectButtonProps) {
  return (
    <div className="locale-select-page-button-container">
      <a href={site.url}>
        {/* Putting display: 'block', so that the button fills out available width. */}
        <Button ghost size="large" onClick={onClick} block={true}>
          {site.name}
        </Button>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <div className="locale-select-page-container">
        <div
          className="locale-select-page-content"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Image src={CuentanosLogo} alt="logo" />
          <div className="locale-select-page-message">{SITE_MESSAGE}</div>
          {COUNTRY_URLS.map((site) => (
            <LocaleSelectButton
              site={site}
              key={site.name}
              onClick={(e: React.SyntheticEvent) => e?.preventDefault}
            />
          ))}
        </div>
      </div>
    </>
  );
}
