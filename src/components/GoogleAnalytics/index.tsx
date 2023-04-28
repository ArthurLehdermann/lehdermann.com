import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga4';

const GoogleAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID as string);
    ReactGA.send({
      hitType: 'pageview',
      page: router.pathname
    });
  }, [router]);

  return null;
};

export default GoogleAnalytics;