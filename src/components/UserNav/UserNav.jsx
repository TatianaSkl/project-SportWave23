import { LinkNav, NavUser } from './UserNav.styled';

export const UserNav = () => {
  return (
    <NavUser>
      <LinkNav to="/diary">Diary</LinkNav>
      <LinkNav to="/products">Products</LinkNav>
      <LinkNav to="/exercises">Exercises</LinkNav>
    </NavUser>
  );
};
