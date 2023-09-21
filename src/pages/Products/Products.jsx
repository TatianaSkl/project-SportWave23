import style from './Products.module.css';
import { Container, Header } from 'components';
import ProductsFilters from '../../components/ProductsFilters/ProductsFilters';
import ProductsList from '../../components/ProductsList/ProductsList';
import data from '../../bd/products.json';
import {  useState } from 'react';

export default function Products() {
  const [searchValue, setSearchValue] = useState('');
  const [categoryProduct, setCategoryProduct] = useState('');
  const [typeProduct, setTypeProduct] = useState('');

  console.log(searchValue);
  console.log(categoryProduct);
  console.log(typeProduct);

  return (
    <Container>
      <Header/>
      <h1 className={style.title}>Products</h1>
      <ProductsFilters setValue={setSearchValue} setCategory={setCategoryProduct} setType={setTypeProduct} />
      <ProductsList productsArray={ data} />
    </Container>
  );
}
