import { ProductList,FlexContainer } from './ProductsList.styled';
import ProductsItem from '../ProductsItem/ProductsItem';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function ProductsList({hasMore, page, setPage, productsArray, groupBlood }) {

  const [data, setData] = useState([]);

  useEffect(() => {
    if (productsArray) {
      setData(productsArray);
    }
  }, [productsArray]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return (    
    <ProductList>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
          hasMore={hasMore}
        height={490}
        loader={''}
      >
        <FlexContainer>
      {data && data.map((item) => (
        <ProductsItem
        key={item._id}
        id={item._id}
        groupBloodNotAllowed={item.groupBloodNotAllowed}
        blood={groupBlood}
        calories={item.calories}
        category={item.category}
        weight={item.weight}
        title = { item.title}
      />
      ))}
          </FlexContainer>
        </InfiniteScroll>
      </ProductList>      
  );
}

