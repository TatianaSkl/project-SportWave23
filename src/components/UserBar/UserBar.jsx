import { Link } from 'react-router-dom';
import { IconSettings, ImageUser, WrapperFoto, WrapperUserBar } from './UserBar.styled';

export const UserBar = () => {
  return (
    <WrapperUserBar>
      <Link to="/profile">
        <IconSettings />
      </Link>
      <WrapperFoto>
        <ImageUser
          src={`https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469572/categories/lower_arms_hvwarx.jpg`}
          alt="user"
          loading="lazy"
        />
      </WrapperFoto>
    </WrapperUserBar>
  );
};
