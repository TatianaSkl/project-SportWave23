import {
  SubCategoryItem,
  Image,
  TitleContainer,
  SubCategoryItemTitle,
  SubCategoryItemText,
} from './ExercisesSubcategoriesItem.styled';

export const SubCategoryExercisesItem = ({
  exercisesItem,
  handleFilterClick,
  handleSetExerciseName,
}) => {
  const { name, filter, imgURL } = exercisesItem;

  const onClick = name => {
    handleFilterClick('Waist');
    handleSetExerciseName(name);
  };

  const capitalizeFirstLeter = string => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };
  return (
    <SubCategoryItem onClick={() => onClick(name)}>
      <Image src={imgURL} alt={name} />
      <TitleContainer>
        <SubCategoryItemTitle>
          {capitalizeFirstLeter(name)}
        </SubCategoryItemTitle>
        <SubCategoryItemText>{filter}</SubCategoryItemText>
      </TitleContainer>
    </SubCategoryItem>
  );
};
