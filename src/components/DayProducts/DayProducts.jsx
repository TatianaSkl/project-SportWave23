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
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from 'redux/diary/selectors';
import { getDataProducts } from 'redux/diary/operations';

export const DayProducts = ({ date }) => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const handleTableClick = () => {
    dispatch(getDataProducts(date));
  };

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
          <ProductsTable products={products} onDis={handleTableClick} />
        ) : (
          <Text>Not found products</Text>
        )}
      </WrapperScrol>
    </WrapperDayProduct>
  );
};
