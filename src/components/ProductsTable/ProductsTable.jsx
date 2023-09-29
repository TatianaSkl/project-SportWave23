import React from 'react';
import { useDispatch } from 'react-redux';
import { useTable } from 'react-table';
import { deleteProduct } from 'redux/diary/operations';
import icon from 'images/sprite.svg';
import {
  Box,
  BoxFlex,
  BoxText,
  BoxTitle,
  ProductTable,
  ValueTd,
  Title,
  WrapperT,
  WrapperCg,
  WrapperCl,
  WrapperW,
  WrapperR,
  BoxR,
  BoxColor,
  BoxColorText,
} from './ProductsTable.styled';

export const ProductsTable = ({ products, onDis }) => {
  const dispatch = useDispatch();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'Title',
        Cell: ({ row }) => (
          <WrapperT>
            <div>{row.original.product.title}</div>
          </WrapperT>
        ),
      },
      {
        Header: 'Category',
        accessor: 'Category',
        Cell: ({ row }) => (
          <WrapperCg>
            <div>
              {row.original.product.category.charAt(0).toUpperCase() +
                row.original.product.category.slice(1)}
            </div>
          </WrapperCg>
        ),
      },
      {
        Header: 'Calories',
        accessor: 'Calories',
        Cell: ({ row }) => (
          <WrapperCl>
            <div>{row.original.calories}</div>
          </WrapperCl>
        ),
      },
      {
        Header: 'Weight',
        accessor: 'Weight',
        Cell: ({ row }) => (
          <WrapperW>
            <div>{row.original.amount}</div>
          </WrapperW>
        ),
      },
      {
        Header: 'Recommend',
        accessor: 'Recommend',
        Cell: ({ row }) => (
          <WrapperR>
            <BoxColor isRecommended={row.original.recommended}></BoxColor>
            <div>{row.original.recommended ? 'Yes' : 'No'}</div>
          </WrapperR>
        ),
      },
      {
        Header: '',
        accessor: 'Delete',
        Cell: ({ row }) => (
          <button
            style={{ marginLeft: '4px' }}
            onClick={() => {
              dispatch(deleteProduct({ id: row.original._id, date: row.original.date }));
              onDis();
            }}
          >
            <svg width={'20'} height={'20'}>
              <use href={icon + '#icon-trash'} />
            </svg>
          </button>
        ),
      },
    ],
    [dispatch, onDis]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: products,
  });

  return (
    <>
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
                    return <ValueTd {...cell.getCellProps()}>{cell.render('Cell')}</ValueTd>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </ProductTable>
      <Box>
        {products?.map(prod => (
          <div key={prod._id}>
            <div>
              <BoxTitle>Title</BoxTitle>
              <BoxText>{prod.product.title}</BoxText>
            </div>
            <div>
              <BoxTitle>Category</BoxTitle>
              <BoxText>
                {prod.product.category.charAt(0).toUpperCase() + prod.product.category.slice(1)}
              </BoxText>
            </div>
            <BoxFlex>
              <div>
                <BoxTitle>Calories</BoxTitle>
                <BoxText>{prod.calories}</BoxText>
              </div>
              <div>
                <BoxTitle>Weight</BoxTitle>
                <BoxText>{prod.amount}</BoxText>
              </div>
              <div>
                <BoxTitle>Recommend</BoxTitle>
                <BoxR>
                  <BoxColor isRecommended={prod.recommended}></BoxColor>
                  <BoxColorText>{prod.recommended ? 'Yes' : 'No'}</BoxColorText>
                </BoxR>
              </div>
              <button
                onClick={() => dispatch(deleteProduct({ id: prod._id, date: prod.date }))}
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
