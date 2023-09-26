import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMuscles } from 'redux/exercises/operations';
import { selectMuscles } from 'redux/exercises/selectors';
import { ExercisesSublist } from './ExercisesSubcategoriesList.styled';
import { SubCategoryExercisesItem } from 'components';

import Pagination from 'components/ExercisesPagination/ExercisesPagination';
import { PaginationList } from 'components/ExercisesPagination/ExercisesPagination.styled';

export const MusclesList = ({ handleFilterClick, handleSetExerciseName }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMuscles());
  }, [dispatch]);

  const muscles = useSelector(selectMuscles);
  const [currentPage, setCurrentPage] = useState(1);

  const defineItemsPerPage = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 768 && windowWidth <= 1439) {
      return 9;
    } else {
      return 10;
    }
  };

  const [itemsPerPage, setItemsPerPage] = useState(defineItemsPerPage);

  const handleResize = () => {
    setItemsPerPage(defineItemsPerPage());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = muscles.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <PaginationList>
      <ExercisesSublist>
        {currentItems.map(item => (
          <SubCategoryExercisesItem
            key={item._id}
            exercisesItem={item}
            handleFilterClick={handleFilterClick}
            handleSetExerciseName={handleSetExerciseName}
          />
        ))}
      </ExercisesSublist>
      {itemsPerPage < muscles.length && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={muscles.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </PaginationList>
  );
};
