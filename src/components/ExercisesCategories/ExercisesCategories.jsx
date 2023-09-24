import {
  ExercisesNav,
  ExercisesFilter,
  FilterBtn,
} from './ExercisesCategories.styled';

export const ExercisesNavigation = ({ activeFilter, handleFilterClick }) => {
  return (
    <ExercisesNav>
      <ExercisesFilter
        className={activeFilter === 'Body parts' ? 'active' : ''}
      >
        <FilterBtn
          type="button"
          onClick={() => handleFilterClick('Body parts')}
          className={activeFilter === 'Body parts' ? 'active' : ''}
        >
          Body parts
        </FilterBtn>
      </ExercisesFilter>
      <ExercisesFilter className={activeFilter === 'Muscles' ? 'active' : ''}>
        <FilterBtn
          type="button"
          onClick={() => handleFilterClick('Muscles')}
          className={activeFilter === 'Muscles' ? 'active' : ''}
        >
          Muscles
        </FilterBtn>
      </ExercisesFilter>
      <ExercisesFilter className={activeFilter === 'Equipment' ? 'active' : ''}>
        <FilterBtn
          type="button"
          onClick={() => handleFilterClick('Equipment')}
          className={activeFilter === 'Equipment' ? 'active' : ''}
        >
          Equipment
        </FilterBtn>
      </ExercisesFilter>
    </ExercisesNav>
  );
};
