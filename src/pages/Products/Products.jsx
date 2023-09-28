import {
  PictureBg,
  Title,
  Product,
  ProductsHeader,
  ProductContainer,
} from './Products.styled.jsx';
import axios from 'axios';
import ProductsFilters from '../../components/ProductsFilters/ProductsFilters';
import ProductsList from '../../components/ProductsList/ProductsList';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selectors';
import bg from 'images/bg';
const { bg5Desktop1x, bg5Desktop2x } = bg;

export default function Products() {
  const [searchValue, setSearchValue] = useState('');
  const [categoryProduct, setCategoryProduct] = useState('');
  const [typeProduct, setTypeProduct] = useState('all');
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [blood, setBlood] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const token = useSelector(selectToken);

  const TOKEN = token;
  axios.defaults.baseURL = 'https://power-pulse-project-backend.onrender.com';

  useEffect(() => {
    const fetchData = async () => {
      if (page === 1) {
        setIsLoading(true);
      }
      try {
        const config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `/products?limit=10&page=${page}&search=${searchValue}&category=${categoryProduct}&recommended=${typeProduct}`,
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        };

        const response = await axios.request(config);
        const data = response.data;
        setBlood(data.blood);
        if (data.result.length === 0 && page === 1) {
          setProducts([]);
        }
        if (data.result.length >= 10) {
          setHasMore(true);
        }
        if (page === 1) {
          setProducts(data.result);
        } else {
          setProducts(prevProducts => [...prevProducts, ...data.result]);
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [TOKEN, searchValue, categoryProduct, page, typeProduct]);

  return (
    <>
      <Product>
        <ProductsHeader>
          <Title>Products</Title>
          <ProductsFilters
            setArrayProducts={setProducts}
            setValue={setSearchValue}
            setCategory={setCategoryProduct}
            setType={setTypeProduct}
            setPage={setPage}
          />
        </ProductsHeader>
        <ProductContainer>
          <ProductsList
            hasMore={hasMore}
            page={page}
            setPage={setPage}
            productsArray={products}
            groupBlood={blood}
            isLoading={isLoading}
          />
        </ProductContainer>
      </Product>

      <PictureBg>
        <source
          type="image/jpg"
          media="(min-width: 1440px)"
          srcSet={`${bg5Desktop1x} 1x, ${bg5Desktop2x} 2x`}
        />
        <img src={`${bg5Desktop1x}`} alt="Woman doing sports" />
      </PictureBg>
    </>
  );
}
