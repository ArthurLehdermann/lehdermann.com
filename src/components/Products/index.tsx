import { products } from '../../data/products';
import { ProductCard } from './ProductCard';

export function Products() {
  return (
    <section className={'relative md:py-24 py-16 bg-slate-50 dark:bg-slate-800/40'} id={'products'}>
      <div className={'container'}>
        <div className={'grid grid-cols-1 pb-10 text-center'}>
          <h6 className={'text-indigo-600 text-sm font-bold uppercase mb-2'}>Products</h6>
          <h3 className={'mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold'}>
            SaaS I build and operate
          </h3>
          <p className={'text-slate-400 max-w-2xl mx-auto'}>
            Real products in production — from restaurants to retail feedback, BI and WhatsApp automation with AI.
          </p>
        </div>

        <div className={'grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]'}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
