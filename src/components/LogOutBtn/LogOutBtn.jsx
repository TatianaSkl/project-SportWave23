import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { IconLogOut, LogOutButton } from './LogOutBtn.styled';

export const LogOutBtn = ({ color }) => {
  const dispatch = useDispatch();
  return (
    <LogOutButton type="button" onClick={() => dispatch(logOut())}>
      Logout
      <IconLogOut color={color} />
    </LogOutButton>
  );
};
