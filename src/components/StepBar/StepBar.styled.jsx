import styled from '@emotion/styled';

export const StepBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 178px;
  height: 4px;
  padding-bottom: 20px;
  margin-top: auto;
  @media screen and (min-width: 768px) {
    width: 268px;
    padding-bottom: 32px;
  }
`;

export const Step = styled.div`
  width: 50px;
  height: 4px;
  border-radius: 2px;
  background-color: ${props => (props.active ? '#E6533C' : '#303030')};
  cursor: ${props => (props.active ? 'pointer' : 'default')};
  @media screen and (min-width: 768px) {
    width: 80px;
  }
`;
