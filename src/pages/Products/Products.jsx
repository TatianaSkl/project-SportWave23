import style from './Products.module.css';
import axios from 'axios';
import ProductsFilters from '../../components/ProductsFilters/ProductsFilters';
import ProductsList from '../../components/ProductsList/ProductsList';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

export default function Products() {
  const [searchValue, setSearchValue] = useState('');
  const [categoryProduct, setCategoryProduct] = useState('');
  const [typeProduct, setTypeProduct] = useState('');
  const [products, setProducts] = useState([]);
  console.log(searchValue)
  console.log(categoryProduct)
  console.log(typeProduct)
  
  const user = useSelector(selectUser);
  const TOKEN = user.token;
  axios.defaults.baseURL = 'https://power-pulse-project-backend.onrender.com';

 useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `/products?limit=10&page=1&search=${searchValue}`,
          headers: { 
            'Authorization': `Bearer ${TOKEN}`
          }
        };
        
        const response = await axios.request(config);
        const data = response.data;
        setProducts(data.result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [TOKEN, searchValue]);

  return (
    <>
      <h1 className={style.title}>Products</h1>
      <ProductsFilters setValue={setSearchValue} setCategory={setCategoryProduct} setType={setTypeProduct} />
      <ProductsList productsArray={ products} />
    </>
  );
}
