import { useState } from 'react';
import {
  ExercisesWrapper,
  ExercisesContainer,
  ExercisesTitle,
} from './Exercises.styled';
import { BodyPartList } from 'components/ExercisesSubcategoriesList/SubcategoryBodyPartList';
import { MusclesList } from 'components/ExercisesSubcategoriesList/SubcategoryMusclesList';
import { EquipmentList } from 'components/ExercisesSubcategoriesList/SubcategoryEquipmentList';
import { ExercisesNavigation } from 'components';

export default function Exercises() {
  const [activeFilter, setActiveFilter] = useState('Body parts');

  const handleFilterClick = filter => {
    setActiveFilter(filter);
  };

  return (
    <ExercisesWrapper>
      <ExercisesContainer>
        <ExercisesTitle>Exercises</ExercisesTitle>
        <ExercisesNavigation
          activeFilter={activeFilter}
          handleFilterClick={handleFilterClick}
        />
      </ExercisesContainer>
      {activeFilter === 'Body parts' && <BodyPartList />}
      {activeFilter === 'Muscles' && <MusclesList />}
      {activeFilter === 'Equipment' && <EquipmentList />}
    </ExercisesWrapper>
  );
}
