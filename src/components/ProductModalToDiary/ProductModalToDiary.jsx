import { useState } from 'react';
import {
  AddButton,
  CancelButton,
  InputGrams,
  InputTitle,
  ModalForm,
  SpanText,
  Text,
  Wrap,
} from './ProductModalToDiary.styled';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addProduct } from 'redux/diary/operations';
// import BasicModalWindow from 'components/BasicModalWind/BasicModalWind';

export const ExercisesModalToDiary = ({ title, calories, id }) => {
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
    //   .then(() => {
    //     onClick(amount);
    //   })
    //   .catch(error => {
    //     toast(error.message);
    //   });
  };

  return (
    <>
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
          <CancelButton type="button">Cancel</CancelButton>
        </Wrap>
      </ModalForm>
      {/* <BasicModalWindow
      // active={modalActive} setActive={setModalActive}
      >
        <ExercisesModalToDiary />
      </BasicModalWindow> */}
    </>
  );
};
