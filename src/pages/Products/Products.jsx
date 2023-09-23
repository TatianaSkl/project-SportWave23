import style from './Products.module.css';
// import axios from 'axios';
import ProductsFilters from '../../components/ProductsFilters/ProductsFilters';
import ProductsList from '../../components/ProductsList/ProductsList';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { selectUser } from 'redux/auth/selectors';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Products() {

  const [searchValue, setSearchValue] = useState('');
  const [categoryProduct, setCategoryProduct] = useState('');
  const [typeProduct, setTypeProduct] = useState('all');
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  
  const user = useSelector(selectUser);
  const TOKEN = user.token;
  
  axios.defaults.baseURL = 'https://power-pulse-project-backend.onrender.com';

 useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `/products?limit=10&page=${page}&search=${searchValue}&category=${categoryProduct}&recommended=${typeProduct}`,
          headers: { 
            'Authorization': `Bearer ${TOKEN}`
          }
        };
        
        const response = await axios.request(config);
        const data = response.data;
        
        if (data.result.length >= 10) {
          setHasMore(true);
        }
        if (page === 1) {
          setProducts(data.result);
        } else {
          setProducts((prevProducts) => [
            ...prevProducts, ...data.result]);
        }
        
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
 }, [TOKEN, searchValue, categoryProduct, page, typeProduct]);
  
  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return (
    <>
      <h1 className={style.title}>Products</h1>
      <ProductsFilters
      // setArrayProducts={setProducts}
      // setValue={setSearchValue}
      // setCategory={setCategoryProduct}
      // setType={setTypeProduct}
      />
      <InfiniteScroll
      // dataLength={products.length}
      // next={fetchMoreData}
      // hasMore={hasMore}
      // loader={''}
      >
        <ProductsList
        // productsArray={products}
        />
      </InfiniteScroll>
    </>
  );
}
