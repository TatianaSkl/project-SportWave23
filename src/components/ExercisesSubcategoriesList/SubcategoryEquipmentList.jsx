import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEquipment } from 'redux/exercises/operations';
import { selectEquipment } from 'redux/exercises/selectors';
import { ExercisesSublist } from './ExercisesSubcategoriesList.styled';
import { SubCategoryExercisesItem } from 'components';

import Pagination from 'components/ExercisesPagination/ExercisesPagination';
import { PaginationList } from 'components/ExercisesPagination/ExercisesPagination.styled';

export const EquipmentList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEquipment());
  }, [dispatch]);

  const equipment = useSelector(selectEquipment);
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
  }, []);

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = equipment.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <PaginationList>
      <ExercisesSublist>
        {currentItems.map(item => (
          <SubCategoryExercisesItem key={item._id} exercisesItem={item} />
        ))}
      </ExercisesSublist>
      {itemsPerPage < equipment.length && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={equipment.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </PaginationList>
  );
};
