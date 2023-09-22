import React from 'react';
import Select from 'react-select';
import { customStyles, Form, Input, InputContainer, SelectType, SelectProduct,SelectContainer, BtnClose, BtnOpen, BtnContainer } from './ProductsFilters.styled.jsx';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { theme } from 'styles/theme';
import categorys from '../../bd/productsCategories.json';

export default function ProductsFilters({setArrayProducts, setValue, setCategory, setType}) {

  const productOptions = categorys.map(item => ({
    value: item,
    label: item.charAt(0).toUpperCase() + item.slice(1),
}));

  const typeOptions = [
    { value: 'all', label: 'All' },
    { value: 'true', label: 'Recommended' },
    { value: 'false', label: 'Not recommended' },
  ];

  const handlChange = (e) => {
    const search = e.target.value;
    setValue(search);
    setArrayProducts([]);
  };

  const handleCategoryChange = (selectedOption) => {
    setArrayProducts([]);
    setCategory(selectedOption.value)
  };

  const handleTypeChange = (selectedType) => {
    setArrayProducts([]);
    setType(selectedType.value)
  };

  return (
    <Form>
      <InputContainer>
        <Input onChange={handlChange} type="text" placeholder='Search' />
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
            onChange={handleCategoryChange}
          options={productOptions}
          styles={customStyles}
          isSearchable={false}
          placeholder='Categories'
        />
        </SelectProduct>
        
        <SelectType>
          <Select
          onChange={handleTypeChange}
          options={typeOptions}
          styles={customStyles}
          isSearchable={false}
          placeholder='Type'
        />
        </SelectType>
        
      </SelectContainer>
    </Form>
   
  );
}