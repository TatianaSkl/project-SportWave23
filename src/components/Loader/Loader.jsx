import { ColorRing } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <ColorRing />
    </Wrapper>
  );
};
