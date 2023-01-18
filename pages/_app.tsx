import Analytics from '@ircsignpost/signpost-base/dist/src/analytics';
import '@ircsignpost/signpost-base/styles/locale-select-page.less';
import 'antd/dist/antd.less';
import type { AppProps } from 'next/app';

import { GOOGLE_ANALYTICS_IDS } from '../lib/constants';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics googleAnalyticsIds={GOOGLE_ANALYTICS_IDS} />
      <Component {...pageProps} />
    </>
  );
}
