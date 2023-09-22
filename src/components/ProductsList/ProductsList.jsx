import { ProductList } from './ProductsList.styled';
import ProductsItem from '../ProductsItem/ProductsItem';
import { useEffect, useState } from 'react';

export default function ProductsList({ productsArray }) {

  const [data, setData] = useState([]);

  useEffect(() => {
    if (productsArray) {
      setData(productsArray);
    }
  }, [productsArray]);

  const blood = '1';

  return (    
    <ProductList>
      {data && data.map((item) => (
        <ProductsItem
        key={item._id}
        id={item._id}
        groupBloodNotAllowed={item.groupBloodNotAllowed}
        blood={blood}
        calories={item.calories}
        category={item.category}
        weight={item.weight}
        title = { item.title}
      />
      ))}
      </ProductList>      
  );
}

