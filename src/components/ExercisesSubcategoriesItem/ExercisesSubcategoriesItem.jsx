import {
  SubCategoryItem,
  Image,
  TitleContainer,
  SubCategoryItemTitle,
  SubCategoryItemText,
} from './ExercisesSubcategoriesItem.styled';

export const SubCategoryExercisesItem = ({ exercisesItem }) => {
  const { name, filter, imgURL } = exercisesItem;
  return (
    <SubCategoryItem>
      <Image src={imgURL} alt={name} />
      <TitleContainer>
        <SubCategoryItemTitle>{name}</SubCategoryItemTitle>
        <SubCategoryItemText>{filter}</SubCategoryItemText>
      </TitleContainer>
    </SubCategoryItem>
  );
};
