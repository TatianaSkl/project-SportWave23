import { PictureBg } from './BackgroundImage.styled';
import bg from 'images/bg';
const { bg1Desktop1x, bg1Desktop2x, bg1Mobile1x, bg1Mobile2x } = bg;

export const BackgroundImage = () => {
  return (
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
  );
};
