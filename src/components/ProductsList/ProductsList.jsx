import { ProductList } from './ProductsList.styled';
import ProductsItem from '../ProductsItem/ProductsItem';

export default function ProductsList({ productsArray }) {

  const data = productsArray;
  const blood = '1';


  return (
    <ProductList>
      {data && data.map((item) => (
        <ProductsItem
        key={item._id.$oid}
        id={item._id.$oid}
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

