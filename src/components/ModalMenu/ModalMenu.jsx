import { useEffect } from 'react';
import { Overlay, WrapperLogOut, Wrapper, IconClose, ButtonClose } from './ModalMenu.styled';
import { LogOutBtn, UserNav } from 'components';

export const ModalMenu = ({ onClose }) => {
  useEffect(() => {
    const handleClick = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleClick);
    return () => {
      window.removeEventListener('keydown', handleClick);
    };
  }, [onClose]);

  const onOverlayClickClose = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={onOverlayClickClose}>
      <Wrapper onClick={onClose}>
        <ButtonClose>
          <IconClose />
        </ButtonClose>
        <UserNav />
        <WrapperLogOut>
          <LogOutBtn />
        </WrapperLogOut>
      </Wrapper>
    </Overlay>
  );
};
