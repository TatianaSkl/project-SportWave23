import {
  ArrowIcon,
  SuccessModalWindow,
  SuccessModalWindowBtn,
  SuccessModalWindowImg,
  SuccessModalWindowSpan,
  SuccessModalWindowText,
  SuccessModalWindowTitle,
  SuccessModalWindowWrap,
  SuccessModalWindowWrapImg,
} from './AddExerciseSuccess.styled';
import { Link } from 'react-router-dom';
import like from '../../images/like-2x.png';
import sprite from '../../images/sprite.svg';

export const AddExerciseSuccess = ({ data, closeModal }) => {
  return (
    <SuccessModalWindow>
      <SuccessModalWindowWrap>
        <SuccessModalWindowWrapImg>
          <SuccessModalWindowImg src={like} alt="like" />
          <SuccessModalWindowTitle>Well done</SuccessModalWindowTitle>
          <SuccessModalWindowText>
            Time
            <SuccessModalWindowSpan>1 minutes</SuccessModalWindowSpan>
          </SuccessModalWindowText>
          <SuccessModalWindowText>
            Burned calories
            <SuccessModalWindowSpan>{data}</SuccessModalWindowSpan>
          </SuccessModalWindowText>
        </SuccessModalWindowWrapImg>
        <Link to="/exercises" onClick={closeModal}>
          <SuccessModalWindowBtn>Next exercise</SuccessModalWindowBtn>
        </Link>
        <Link to="/diary" onClick={closeModal}>
          <SuccessModalWindowText>
            To the diary
            <ArrowIcon>
              <use href={sprite + '#icon-arrow-right'}> </use>
            </ArrowIcon>
          </SuccessModalWindowText>
        </Link>
      </SuccessModalWindowWrap>
    </SuccessModalWindow>
  );
};
