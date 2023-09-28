import { useState } from 'react';
import {
  AddButton,
  CancelButton,
  Foto,
  IconArrow,
  InputGrams,
  InputTitle,
  LinkDiary,
  ModalForm,
  NextButton,
  SpanNext,
  SpanText,
  Text,
  TextNext,
  TitleNext,
  Wrap,
  WrapBtn,
  WrapNext,
} from './ProductModalToDiary.styled';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addProduct } from 'redux/diary/operations';

export const ProductModalToDiary = ({ title, calories, id, setActive, active }) => {
  const [showAddToDiaryForm, setShowAddToDiaryForm] = useState(true);
  const [quantity, setQuantity] = useState('');
  const dispatch = useDispatch();

  const amount = Math.round((quantity * calories) / 100);

  const handleAddProduct = () => {
    const currentDate = new Date();
    const date = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(
      2,
      '0'
    )}-${String(currentDate.getDate()).padStart(2, '0')}`;

    if (!amount) {
      toast.error('Must be greater than 0');
      return;
    }

    dispatch(
      addProduct({
        date,
        productId: id,
        amount: quantity,
        calories,
      })
    );
    setShowAddToDiaryForm(false);
  };

  return (
    <>
      {showAddToDiaryForm ? (
        <ModalForm>
          <InputTitle type="text" value={title} disabled />
          <InputGrams
            type="number"
            placeholder="grams"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
          />
          <Text>
            Calories: <SpanText>{amount}</SpanText>
          </Text>
          <Wrap>
            <AddButton type="button" onClick={handleAddProduct}>
              Add to diary
            </AddButton>
            <CancelButton type="button" onClick={() => setActive(false)}>
              Cancel
            </CancelButton>
          </Wrap>
        </ModalForm>
      ) : (
        <WrapNext>
          <WrapBtn>
            <Foto />
          </WrapBtn>
          <TitleNext>Well done</TitleNext>
          <TextNext>
            Calories: <SpanNext>{amount}</SpanNext>
          </TextNext>
          <WrapBtn>
            <NextButton type="button" onClick={() => setActive(false)}>
              Next product
            </NextButton>
          </WrapBtn>
          <LinkDiary to="/diary">
            To the diary <IconArrow />
          </LinkDiary>
        </WrapNext>
      )}
    </>
  );
};
