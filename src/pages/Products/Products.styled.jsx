import styled from '@emotion/styled';

export const Title = styled.h1`
  margin-top: 50px;
  font-size: 24px;
  @media screen and (min-width: 1440px){
    font-size: 32px;
  };
`;

export const Product = styled.div`
  @media screen and (min-width: 1440px){
    display: flex;
    flex-direction: column;
  }
`;

export const ProductsHeader = styled.div`
@media screen and (min-width: 1440px){
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
}  
`;

export const ProductContainer = styled.div`
@media screen and (min-width: 1440px){
  margin-top: 40px;
  width: 830px;
  height:490px;
}  
`;