import React from 'react';
// import { useDispatch } from 'react-redux';
import { useTable } from 'react-table';
// import { deleteProduct } from 'redux/diary/operations';
import icon from 'images/sprite.svg';

export const ProductsTable = ({ data, id, date }) => {
  // const dispatch = useDispatch();

  // // const handleDelete = ({ date, id }) => {
  // //   dispatch(deleteProduct(id, date));
  // // };
  const columns = React.useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'Title',
      },
      {
        Header: 'Category',
        accessor: 'Category',
      },
      {
        Header: 'Calories',
        accessor: 'Calories',
      },
      {
        Header: 'Weight',
        accessor: 'Weight',
      },
      {
        Header: 'Recommend',
        accessor: 'Recommend',
      },
      {
        Header: 'Delete',
        accessor: 'Delete',
        Cell: () => (
          <svg width={'20'} height={'20'}>
            <use href={icon + '#icon-trash'} />
          </svg>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
