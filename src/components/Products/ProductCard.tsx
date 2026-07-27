import { ArrowRightIcon } from '@heroicons/react/solid';
import type { Product } from '../../data/products';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const isFeatured = product.featured;

  return (
    <article
      className={[
        'group relative rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-white dark:bg-slate-900 border transition-all duration-300',
        isFeatured
          ? 'border-indigo-500/60 ring-1 ring-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10'
          : 'border-gray-100 dark:border-gray-800 hover:border-indigo-500/40',
      ].join(' ')}
    >
      {isFeatured && (
        <div className={'absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-500'} />
      )}

      <div className={'p-6'}>
        <div className={'flex items-start justify-between gap-3 mb-4'}>
          <div
            className={[
              'flex items-center justify-center h-14 w-14 rounded-md shadow-sm border border-gray-100 dark:border-gray-700',
              'bg-white dark:bg-slate-800 p-2',
            ].join(' ')}
          >
            <img
              src={product.logo}
              alt={`${product.name} logo`}
              className={'h-full w-full object-contain'}
            />
          </div>
          <span className={'text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500'}>
            {product.category}
          </span>
        </div>

        <h4 className={'text-xl font-semibold mb-1 group-hover:text-indigo-600 transition-colors'}>
          {product.name}
        </h4>
        <p className={'text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-3'}>
          {product.tagline}
        </p>

        {product.highlight && (
          <p className={'text-sm font-medium text-violet-600 dark:text-violet-400 mb-3 flex items-center gap-1.5'}>
            <i className={'mdi mdi-message-text-outline'} />
            {product.highlight}
          </p>
        )}

        <p className={'text-slate-400 text-sm leading-relaxed'}>
          {product.description}
        </p>

        <div className={'mt-5'}>
          <a
            href={product.url}
            target={'_blank'}
            rel={'noreferrer'}
            className={'btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out text-sm'}
          >
            Visit product <ArrowRightIcon className={'h-4 w-4 inline'} />
          </a>
        </div>
      </div>
    </article>
  );
}
