import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { IconLogOut, LogOutButton } from './LogOutBtn.styled';
import { Link } from 'react-router-dom';

export const LogOutBtn = ({ color }) => {
  const dispatch = useDispatch();
  return (
    <Link to="/">
      <LogOutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
        <IconLogOut color={color} />
      </LogOutButton>
    </Link>
  );
};
