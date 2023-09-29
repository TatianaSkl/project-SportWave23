import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import bg from 'images/bg';
const { logoDesktop1x, logoDesktop2x, logoMobile1x, logoMobile2x } = bg;

export const Logo = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isLoggedIn) {
      if (Object.keys(user.userParams).length !== 0) {
        navigate('/diary');
      } else {
        navigate('/params');
      }
    } else {
      navigate('/');
    }
  };

  return (
    <div style={{ cursor: 'pointer' }} onClick={handleClick}>
      <picture>
        <source
          type="image/png"
          media="(max-width: 767px)"
          srcSet={`${logoMobile1x} 1x, ${logoMobile2x} 2x`}
        />
        <source
          type="image/png"
          media="(min-width: 768px)"
          srcSet={`${logoDesktop1x} 1x, ${logoDesktop2x} 2x`}
        />
        <img src={`${logoDesktop1x}`} alt="logo" />
      </picture>
    </div>
  );
};
