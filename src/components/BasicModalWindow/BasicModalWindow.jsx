import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  BasicWindow,
  Modal,
  ButtonClose,
  SvgClose,
} from './BasicModalWindow.styled';

import sprite from '../../images/sprite.svg';

const BasicModalWindow = ({ children, isOpenModalToggle }) => {
  useEffect(() => {
    const closeESC = e => {
      if (e.code === 'Escape') {
        isOpenModalToggle();
      }
    };
    document.addEventListener('keydown', closeESC);
    return () => {
      document.removeEventListener('keydown', closeESC);
    };
  }, [isOpenModalToggle]);

  const handleClickBackground = e => {
    if (e.currentTarget === e.target) {
      isOpenModalToggle();
    }
  };

  const modal = (
    <BasicWindow onClick={handleClickBackground}>
      <Modal>
        <ButtonClose onClick={() => isOpenModalToggle()}>
          <SvgClose>
            <use href={sprite + '#icon-close'}></use>
          </SvgClose>
        </ButtonClose>

        {children}
      </Modal>
    </BasicWindow>
  );

  return createPortal(modal, document.querySelector('#root_modal'));
};

export default BasicModalWindow;
