import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { Link } from 'react-router-dom';
import { IconSettings, ImageUser, WrapperFoto, WrapperUserBar } from './UserBar.styled';

export const UserBar = () => {
  const user = useSelector(selectUser);
  const savedAvatarUrl = localStorage.getItem(`userAvatar_${user.name}`);
  const avatarUrl = savedAvatarUrl || user.avatarURL;

  return (
    <WrapperUserBar>
      <Link to="/profile">
        <IconSettings />
      </Link>
      <WrapperFoto>
        <ImageUser src={avatarUrl} alt="user" loading="lazy" />
      </WrapperFoto>
    </WrapperUserBar>
  );
};

