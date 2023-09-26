import React from 'react';
import { useDispatch } from 'react-redux';
import { useTable } from 'react-table';
import { deleteExercise } from 'redux/diary/operations';
import icon from 'images/sprite.svg';
import {
  Box,
  BoxFlex,
  BoxText,
  BoxTitle,
  Table,
  ValuTd,
  TitleE,
  WrapperB,
  WrapperE,
  WrapperN,
  WrapperT,
  WrapperBc,
  WrapperTm,
  Btn,
} from './ExercisesTable.styled';

export const ExercisesTable = ({ exercises }) => {
  const dispatch = useDispatch();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Body Part',
        accessor: 'Body Part',
        Cell: ({ row }) => (
          <WrapperB>
            <div>
              {row.original.exercise.bodyPart.charAt(0).toUpperCase() +
                row.original.exercise.bodyPart.slice(1)}
            </div>
          </WrapperB>
        ),
      },
      {
        Header: 'Equipment',
        accessor: 'Equipment',
        Cell: ({ row }) => (
          <WrapperE>
            <div>
              {row.original.exercise.equipment.charAt(0).toUpperCase() +
                row.original.exercise.equipment.slice(1)}
            </div>
          </WrapperE>
        ),
      },
      {
        Header: 'Name',
        accessor: 'Name',
        Cell: ({ row }) => (
          <WrapperN>
            <div>
              {row.original.exercise.name.charAt(0).toUpperCase() +
                row.original.exercise.name.slice(1)}
            </div>
          </WrapperN>
        ),
      },
      {
        Header: 'Target',
        accessor: 'Target',
        Cell: ({ row }) => (
          <WrapperT>
            <div>
              {row.original.exercise.target.charAt(0).toUpperCase() +
                row.original.exercise.target.slice(1)}
            </div>
          </WrapperT>
        ),
      },
      {
        Header: 'Burned Calories',
        accessor: 'Burned Calories',
        Cell: ({ row }) => (
          <WrapperBc>
            <div>{row.original.exercise.burnedCalories}</div>
          </WrapperBc>
        ),
      },
      {
        Header: 'Time',
        accessor: 'Time',
        Cell: ({ row }) => (
          <WrapperTm>
            <div>{row.original.exercise.time}</div>
          </WrapperTm>
        ),
      },
      {
        Header: '',
        accessor: 'Delete',
        Cell: ({ row }) => (
          <Btn onClick={() => dispatch(deleteExercise({ id: row.original._id }))}>
            <svg width={'20'} height={'20'}>
              <use href={icon + '#icon-trash'} />
            </svg>
          </Btn>
        ),
      },
    ],
    [dispatch]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: exercises,
  });

  return (
    <>
      <Table>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <TitleE {...column.getHeaderProps()}>{column.render('Header')}</TitleE>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <ValuTd {...cell.getCellProps()}>{cell.render('Cell')}</ValuTd>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Table>
      <Box>
        {exercises?.map(exer => (
          <div key={exer._id}>
            <div>
              <BoxTitle>Body Part</BoxTitle>
              <BoxText>{exer.exercise.bodyPart}</BoxText>
            </div>
            <div>
              <BoxTitle>Equipment</BoxTitle>
              <BoxText>{exer.exercise.equipment}</BoxText>
            </div>
            <div>
              <BoxTitle>Name</BoxTitle>
              <BoxText>{exer.exercise.name}</BoxText>
            </div>
            <BoxFlex>
              <div>
                <BoxTitle>Target</BoxTitle>
                <BoxText>{exer.exercise.target}</BoxText>
              </div>
              <div>
                <BoxTitle>Burned Calories</BoxTitle>
                <BoxText>{exer.exercise.burnedCalories}</BoxText>
              </div>
              <div>
                <BoxTitle>Time</BoxTitle>
                <BoxText>{exer.exercise.time}</BoxText>
              </div>
              <button
                onClick={() => dispatch(deleteExercise({ id: exer._id }))}
                style={{ display: 'flex', marginLeft: '8px' }}
              >
                <svg width={'20'} height={'20'}>
                  <use href={icon + '#icon-trash'} />
                </svg>
              </button>
            </BoxFlex>
          </div>
        ))}
      </Box>
    </>
  );
};
