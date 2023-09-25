import React from 'react';
import { useDispatch } from 'react-redux';
import { useTable } from 'react-table';
import { deleteProduct } from 'redux/diary/operations';
import icon from 'images/sprite.svg';
import { ProductTable, Text, Title, Wrapper } from './ProductsTable.styled';

export const ProductsTable = ({ products }) => {
  const dispatch = useDispatch();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Title',
        accessor: row => row.product?.title || '',
      },
      {
        Header: 'Category',
        accessor: row => row.product?.category || '',
      },
      {
        Header: 'Calories',
        accessor: row => row.calories || '',
      },
      {
        Header: 'Weight',
        accessor: row => row.product?.weight || '',
      },
      {
        Header: 'Recommend',
        accessor: row => row.amount || '',
      },
      {
        Header: '',
        accessor: 'Delete',
        Cell: ({ row }) => (
          <button
            id={row.original.productId}
            onClick={() =>
              dispatch(deleteProduct({ id: row.original._id, date: row.original.date }))
            }
          >
            <svg width={'20'} height={'20'}>
              <use href={icon + '#icon-trash'} />
            </svg>
          </button>
        ),
      },
    ],
    [dispatch]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: products,
  });

  return (
    <ProductTable>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Title {...column.getHeaderProps()}>{column.render('Header')}</Title>
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
                  return (
                    <Text {...cell.getCellProps()}>
                      <Wrapper>{cell.render('Cell')}</Wrapper>
                    </Text>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </ProductTable>
  );
};
