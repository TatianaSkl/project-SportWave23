import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { Link } from 'react-router-dom';
import { IconSettings, ImageUser, WrapperFoto, WrapperUserBar } from './UserBar.styled';

export const UserBar = () => {
  const user = useSelector(selectUser);

  return (
    <WrapperUserBar>
      <Link to="/profile">
        <IconSettings />
      </Link>
      <WrapperFoto>
        <ImageUser src={user.avatarURL} alt="user" loading="lazy" />
      </WrapperFoto>
    </WrapperUserBar>
  );
};
