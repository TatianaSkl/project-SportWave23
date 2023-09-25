import {
  IconArrow,
  LinkProducts,
  Text,
  Title,
  WrapperDayProduct,
  WrapperFlex,
} from './DayProducts.styled';

export const DayProducts = () => {
  return (
    <WrapperDayProduct>
      <WrapperFlex>
        <Title>Products</Title>
        <LinkProducts to="/products">
          Add product
          <IconArrow />
        </LinkProducts>
      </WrapperFlex>
      <Text>Not found products</Text>
    </WrapperDayProduct>
  );
};
