import style from './Products.module.css';
import axios from 'axios';
import ProductsFilters from '../../components/ProductsFilters/ProductsFilters';
import ProductsList from '../../components/ProductsList/ProductsList';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Products() {
  const [searchValue, setSearchValue] = useState('');
  const [categoryProduct, setCategoryProduct] = useState('');
  const [typeProduct, setTypeProduct] = useState('');
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  console.log(categoryProduct);
  console.log(typeProduct);

  const user = useSelector(selectUser);
  const TOKEN = user.token;
  console.log(TOKEN);
  axios.defaults.baseURL = 'https://power-pulse-project-backend.onrender.com';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `/products?limit=10&page=${page}&search=${searchValue}&category=${categoryProduct}`,
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        };

        const response = await axios.request(config);
        const data = response.data;
        console.log(data.result.length <= 10);
        if (data.result.length >= 10) {
          setHasMore(true);
        }
        setProducts([...products, ...data.result]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [TOKEN, searchValue, categoryProduct, page]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return (
    <>
      <h1 className={style.title}>Products</h1>
      <ProductsFilters
        setArrayProducts={setProducts}
        setValue={setSearchValue}
        setCategory={setCategoryProduct}
        setType={setTypeProduct}
      />
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={''}
      >
        <ProductsList productsArray={products} />
      </InfiniteScroll>
    </>
  );
}
