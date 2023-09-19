import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import bg from 'images/bg';
const { logoDesktop1x, logoDesktop2x, logoMobile1x, logoMobile2x } = bg;

export const Logo = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? (
    <Link to="/params">
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
    </Link>
  ) : (
    <Link to="/">
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
    </Link>
  );
};
