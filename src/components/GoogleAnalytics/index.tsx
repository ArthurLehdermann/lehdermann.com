import ReactGA from "react-ga4";

export default function GoogleAnalytics() {
  ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID as string);

  return (
    <GoogleAnalytics/>
  );
}