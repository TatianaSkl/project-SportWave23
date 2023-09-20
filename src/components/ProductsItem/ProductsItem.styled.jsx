import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const ProductCard = styled.li`
  margin-bottom: 20px;
  border: 1px solid rgba(239, 237, 232, 0.20);
  border-radius: 12px;
  padding:16px;
  /* gap: 20px; */
`;

export const RecomendedContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  
`;

export const Recomended = styled.div`
  display: flex;
  font-size: 12px;

  &::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: green;
  border-radius: 50%;
  margin-right: 5px;
}
`;

export const NotRecomended = styled.div`
  display: flex;
  font-size: 12px;

   &::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  margin-right: 5px;
   }
`;

export const BtnAdd = styled.button`
  display: flex;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: ${theme.colors.orange};
  margin-left: 16px;
`;

export const Discription = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 40px;
`;

export const Icon = styled.span`
  display: inline-flex;
  margin-right: 16px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${theme.colors.orange};
  align-items: center;
  justify-content: center;
`;

export const ProductTitle = styled.span`
  font-size: 20px;
font-style: normal;
font-weight: 400;
`;

export const ProductStat = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const StatItem = styled.li`

`;

export const StatName = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: rgba(239, 237, 232, 0.40);
  
`;

export const StatData = styled.span`
  display: inline-block;
  margin-left: 4px;
  margin-right: 16px;
`;