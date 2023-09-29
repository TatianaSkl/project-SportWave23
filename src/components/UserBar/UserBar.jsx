import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { Link } from 'react-router-dom';
import { IconSettings, ImageUser, WrapperFoto, WrapperUserBar } from './UserBar.styled';

export const UserBar = () => {
  const user = useSelector(selectUser);
  const baseURL = 'https://power-pulse-project-backend.onrender.com'
  const avatarURL = user.avatarURL;
  

  return (
    <WrapperUserBar>
      <Link to="/profile">
        <IconSettings />
      </Link>
      <WrapperFoto>
        <ImageUser src={`${baseURL}/${avatarURL}`} alt="user" loading="lazy" />
      </WrapperFoto>
    </WrapperUserBar>
  );
};

