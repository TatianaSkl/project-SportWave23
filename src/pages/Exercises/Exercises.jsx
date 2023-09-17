import {
  ExercisesTitle,
  ExercisesItem,
  Wrap,
  ExercisesNavList,
  ImageList,
  Image,
  ImageItem,
} from './Exercises.styled';

export default function Exercises() {
  return (
    <>
      <Wrap>
        <ExercisesTitle>Exercises</ExercisesTitle>
        <ExercisesNavList>
          <ExercisesItem>Body parts</ExercisesItem>
          <ExercisesItem>Muscules</ExercisesItem>
          <ExercisesItem>Equipment</ExercisesItem>
        </ExercisesNavList>
      </Wrap>
      <ImageList>
        <ImageItem>
          <Image />
        </ImageItem>
        <ImageItem>
          <Image />
        </ImageItem>
        <ImageItem>
          <Image />
        </ImageItem>
        <ImageItem>
          <Image />
        </ImageItem>
        <ImageItem>
          <Image />
        </ImageItem>
        <ImageItem>
          <Image />
        </ImageItem>
        <ImageItem>
          <Image />
        </ImageItem>
        <ImageItem>
          <Image />
        </ImageItem>
        <ImageItem>
          <Image />
        </ImageItem>
        <ImageItem>
          <Image />
        </ImageItem>
      </ImageList>
    </>
  );
}
