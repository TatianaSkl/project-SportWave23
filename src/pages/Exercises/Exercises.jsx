import { useState } from 'react';
import { ExercisesWrapper, ExercisesContainer, ExercisesTitle } from './Exercises.styled';
import { BodyPartList } from 'components/ExercisesSubcategoriesList/SubcategoryBodyPartList';
import { MusclesList } from 'components/ExercisesSubcategoriesList/SubcategoryMusclesList';
import { EquipmentList } from 'components/ExercisesSubcategoriesList/SubcategoryEquipmentList';
import { ExercisesNavigation } from 'components';
import { ExercisesList } from 'components';

export default function Exercises() {
  const [activeFilter, setActiveFilter] = useState('Body parts');
  const [exerciseName, setExerciseName] = useState('');

  const handleSetExerciseName = name => {
    setExerciseName(name);
  };

  const handleFilterClick = filter => {
    setActiveFilter(filter);
  };

  const capitalizeFirstLeter = string => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };

  return (
    <ExercisesWrapper>
      <ExercisesContainer>
        {activeFilter !== 'Waist' ? (
          <ExercisesTitle>Exercises</ExercisesTitle>
        ) : (
          <ExercisesTitle>{capitalizeFirstLeter(exerciseName)}</ExercisesTitle>
        )}
        <ExercisesNavigation activeFilter={activeFilter} handleFilterClick={handleFilterClick} />
      </ExercisesContainer>
      {activeFilter === 'Body parts' && (
        <BodyPartList
          handleFilterClick={handleFilterClick}
          handleSetExerciseName={handleSetExerciseName}
        />
      )}
      {activeFilter === 'Muscles' && (
        <MusclesList
          handleFilterClick={handleFilterClick}
          handleSetExerciseName={handleSetExerciseName}
        />
      )}
      {activeFilter === 'Equipment' && (
        <EquipmentList
          handleFilterClick={handleFilterClick}
          handleSetExerciseName={handleSetExerciseName}
        />
      )}
      {activeFilter === 'Waist' && <ExercisesList exerciseName={exerciseName} />}
    </ExercisesWrapper>
  );
}
