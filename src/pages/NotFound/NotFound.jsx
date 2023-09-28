import { Link } from 'react-router-dom';
import {
  ContainerError,
  GoHome,
  HeaderError,
  PictureBg,
  Text,
  Title,
  Wrapper,
} from './NotFound.styled';
import bg from 'images/bg';
import { Wrap } from 'pages/Welcome/Welcom.styled';
const {
  bg1Desktop1x,
  bg1Desktop2x,
  bg1Mobile1x,
  bg1Mobile2x,
  logoErrorD1x,
  logoErrorD2x,
  logoErrorM1x,
  logoErrorM2x,
} = bg;

export default function NotFound() {
  return (
    <Wrap>
      <ContainerError>
        <Wrapper>
          <HeaderError>
            <Link to="/">
              <picture>
                <source
                  type="image/png"
                  media="(max-width: 767px)"
                  srcSet={`${logoErrorM1x} 1x, ${logoErrorM2x} 2x`}
                />
                <source
                  type="image/png"
                  media="(min-width: 768px)"
                  srcSet={`${logoErrorD1x} 1x, ${logoErrorD2x} 2x`}
                />
                <img src={`${logoErrorD1x}`} alt="logo" />
              </picture>
            </Link>
          </HeaderError>
          <Title>404</Title>
          <Text>
            Sorry, you have reached a page that we could not find. It seems that you are lost among
            the numbers and letters of our virtual space. Perhaps this page went on vacation or
            decided to disappear into another dimension. We apologize for this inconvenience.
          </Text>
          <GoHome to="/">Go Home</GoHome>
        </Wrapper>
        <PictureBg>
          <source
            type="image/jpg"
            media="(max-width: 767px)"
            srcSet={`${bg1Mobile1x} 1x, ${bg1Mobile2x} 2x`}
          />
          <source
            type="image/jpg"
            media="(min-width: 768px)"
            srcSet={`${bg1Desktop1x} 1x, ${bg1Desktop2x} 2x`}
          />
          <img src={`${bg1Desktop1x}`} alt="Woman doing sports" />
        </PictureBg>
      </ContainerError>
    </Wrap>
  );
}
