import { NextSeo } from 'next-seo';

type SeoPageProps = {
  title: string;
  description?: string;
};

export default function SeoPage({ title, description }: SeoPageProps) {
  const url = typeof window !== 'undefined'? window.location.protocol + '//' + window.location.host + window.location.pathname : '';

  return (
    <NextSeo
        title="Arthur Lehdermann"
        description="Full Stack Web Developer"
        canonical="https://lehdermann.com/"
        openGraph={{
            url: 'https://lehdermann.com/',
            title: 'Arthur Lehdermann',
            description: 'Full Stack Web Developer',
            images: [
                {
                    url: 'https://lehdermann.com/ArthurLehdermann.jpeg',
                    width: 512,
                    height: 512,
                    alt: 'Arthur Lehdermann',
                    type: 'image/jpeg',
                }
            ],
            siteName: 'Arthur Lehdermann',
        }}
        twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
        }}
    />
  );
}