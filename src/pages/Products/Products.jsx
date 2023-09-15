import style from './Products.module.css';
import ProductsFilters from '../../components/ProductsFilters/ProductsFilters'

export default function Products() {
  return (
    <div>
      <h1 className={style.title}>Products</h1>
      <ProductsFilters/>
    </div>
  );
}
