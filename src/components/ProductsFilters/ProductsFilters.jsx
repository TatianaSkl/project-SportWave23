import React from 'react';
import Select from 'react-select';
// import 'react-select/dist/react-select.css';
import { Form, Input, InputContainer, SelectType, SelectProduct,SelectContainer, BtnClose, BtnOpen, BtnContainer } from './ProductsFilters.styled.jsx';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { theme } from 'styles/theme';

export default function ProductsFilters() {
  const customStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: 'black',
      color: 'white',
      border: '1px solid white',
      borderRadius: '12px',
      padding: '5px',
    }),
    menu: (base) => ({
      ...base,
      right: 0,
      zIndex: 9999,
    }),
    option: (base) => ({
      ...base,
      backgroundColor: 'black',
      color: 'white',
      border:'none',
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: 'none',
    }),
  };

  const productOptions = [
    { value: 'category1', label: 'Category 1' },
    { value: 'category2', label: 'Category 2' },
    { value: 'category2', label: 'Category 2' },
    { value: 'category2', label: 'Category 2' },
    { value: 'category2', label: 'Category 2' },
    { value: 'category2', label: 'Category 2' },
    { value: 'category2', label: 'Category 2' },
    { value: 'category2', label: 'Category 2' },
    { value: 'category2', label: 'Category 2' },
    { value: 'category2', label: 'Category 2' },
  ];

  const typeOptions = [
    { value: 'type1', label: 'Type 1' },
    { value: 'type2', label: 'Type 2' },
    // Добавьте другие опции типов по мере необходимости
  ];

  return (
    <Form>
      <InputContainer>
        <Input type="text" placeholder='Search' />
        <BtnContainer>
          <BtnClose>
            <AiOutlineClose style={{ fontSize: '24px', color: theme.colors.orange, fontWeight: 'bold' }}/>
          </BtnClose>
          <BtnOpen>
            <AiOutlineSearch style={{ fontSize: '24px', color: theme.colors.white }} />
          </BtnOpen>
        </BtnContainer>
      </InputContainer>

      <SelectContainer>
        <SelectProduct>
          <Select
          options={productOptions}
          styles={customStyles}
          isSearchable={false}
          placeholder='Categories'
        />
        </SelectProduct>
        
        <SelectType>
          <Select
          options={typeOptions}
          styles={customStyles}
          isSearchable={false}
          placeholder='All'
        />
        </SelectType>
        
      </SelectContainer>
    </Form>
  );
}