import styled from '@emotion/styled';

const SubCategoryItem = styled.li`
  position: relative;
  cursor: pointer;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 206px;
  height: auto;
  border: 1px #efede8;
  border-radius: 12px;

  filter: brightness(40%);

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 206px;
  }

  @media screen and (min-width: 768px) {
    width: 224px;
    height: 206px;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
`;
const SubCategoryItemTitle = styled.h3`
  font-size: 20px;
  line-height: 1.2;

  color: #efede8;

  @media screen and (min-width: 375px) {
    font-size: 24px;
    line-height: 1.33;
  }
`;

const SubCategoryItemText = styled.p`
  font-size: 12px;
  line-height: 1.5;

  color: rgba(239, 237, 232, 0.4);
`;

export {
  SubCategoryItem,
  Image,
  TitleContainer,
  SubCategoryItemTitle,
  SubCategoryItemText,
};
