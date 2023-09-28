import { ProductList, FlexContainer } from './ProductsList.styled';
import ProductsItem from '../ProductsItem/ProductsItem';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader } from 'components';

export default function ProductsList({
  hasMore,
  page,
  setPage,
  productsArray,
  groupBlood,
  isLoading,
}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (productsArray && productsArray.length > 0) {
      setData(productsArray);
    } else setData(productsArray);
  }, [productsArray]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return (
    <FlexContainer id="scrollableDiv">
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={''}
        scrollableTarget="scrollableDiv"
      >
        {isLoading ? (
          <Loader />
        ) : (
          <ProductList>
            {data.length > 0 ? (
              data.map(item => (
                <ProductsItem
                  key={item._id}
                  id={item._id}
                  groupBloodNotAllowed={item.groupBloodNotAllowed}
                  blood={groupBlood}
                  calories={item.calories}
                  category={item.category}
                  weight={item.weight}
                  title={item.title}
                />
              ))
            ) : (
              <li
                style={{
                  fontSize: '22px',
                  marginLeft: '8px',
                }}
              >
                No products were found according to the specified criteria!
              </li>
            )}
          </ProductList>
        )}
      </InfiniteScroll>
    </FlexContainer>
  );
}
