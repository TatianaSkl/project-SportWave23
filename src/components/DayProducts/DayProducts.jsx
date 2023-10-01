import { ProductsTable } from 'components';
import {
  IconArrow,
  LinkProducts,
  Text,
  Title,
  WrapperDayProduct,
  WrapperFlex,
  WrapperScrol,
} from './DayProducts.styled';
import { useSelector } from 'react-redux';
import { selectProducts } from 'redux/diary/selectors';

export const DayProducts = () => {
  const products = useSelector(selectProducts);

  return (
    <WrapperDayProduct>
      <WrapperFlex>
        <Title>Products</Title>
        <LinkProducts to="/products">
          Add product
          <IconArrow />
        </LinkProducts>
      </WrapperFlex>
      <WrapperScrol>
        {products.length > 0 ? (
          <ProductsTable products={products} />
        ) : (
          <Text>Not found products</Text>
        )}
      </WrapperScrol>
    </WrapperDayProduct>
  );
};
