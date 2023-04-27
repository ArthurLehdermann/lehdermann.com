import siteConfig from '../../../site.config';

export function ContactMe() {
  return (
    <div className={'container md:mt-24 mt-16'}>
      <div className={'grid grid-cols-1 text-center'}>
        <h6 className={'text-indigo-600 text-sm font-bold uppercase mb-2'}>Contact Me</h6>
        <h3 className={'mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold'}>
          Have question? Get in touch!
        </h3>

        <p className={'text-slate-400 max-w-xl mx-auto'}>
          I&apos;m a PHP developer. Let&apos;s discuss your needs and see how I can help you?
        </p>

        <div className={'mt-6'}>
          <a href={'mailto: ' + siteConfig.author.email} className={'btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2 mt-2'}>
            <i className={'uil uil-phone'}></i> Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
