import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { LogOutBtn, Logo, ModalMenu, UserBar, UserNav } from 'components';
import { ButtonMenu, HeaderStyled, IconMenu, Wrapper, WrapperDes } from './Header.styled';

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <HeaderStyled>
      <Logo />
      {isLoggedIn && Object.keys(user.userParams).length !== 0 ? (
        <Wrapper>
          <WrapperDes>
            <UserNav />
          </WrapperDes>
          <UserBar />
          <ButtonMenu onClick={onOpenModal}>
            <IconMenu />
          </ButtonMenu>
          <WrapperDes>
            <LogOutBtn color="#E6533C" />
          </WrapperDes>
          {showModal && <ModalMenu onClose={onCloseModal} />}
        </Wrapper>
      ) : null}
    </HeaderStyled>
  );
};
