import styled from '@emotion/styled';

export const WrapperUserCard = styled.div`
  @media (min-width: 1440px) {
    padding-left: 48px;
    border-left: 1px solid rgba(239, 237, 232, 0.2);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (min-width: 768px) {
    margin-right: 133px;
  }
  @media (min-width: 1440px) {
    margin-right: 0;
  }
`;

export const WrapperFoto = styled.div`
  position: relative;
  margin: 40px auto 31px auto;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-color: ${props => props.theme.colors.orange};
  overflow: hidden;
  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
    margin: 64px auto 32px auto;
  }
  @media (min-width: 1440px) {
    margin-top: 27px;
  }
`;

export const ImageUser = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SvgPlus = styled.svg`
  width: 24px;
  height: 24px;
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
export const ButtonPlus = styled.button`
  position: absolute;
  top: 246px;
  left: 50%;
  z-index: 1;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
    top: 396px;
  }
  @media (min-width: 1440px) {
    top: 359px;
    left: 78%;
  }
`;

export const Name = styled.h3`
  margin-bottom: 4px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 111.111%;
  @media (min-width: 768px) {
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 116.667%;
  }
`;

export const Text = styled.p`
  margin-bottom: 40px;
  text-align: center;
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: 128.571%;
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const WrapperBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperCalor = styled.div`
  margin-right: 14px;
  height: 96px;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: ${props => props.theme.colors.orange};
  @media (min-width: 768px) {
    width: 214px;
    height: 108px;
    padding: 14px 18px;
  }
`;

export const TextBox = styled.p`
  margin-left: 6px;
  color: rgba(239, 237, 232, 0.8);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  line-height: 133.333%;
  @media (min-width: 768px) {
    margin-left: 8px;
    line-height: 150%;
  }
`;

export const WrapperTime = styled.div`
  height: 96px;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: ${props => props.theme.colors.orange};
  @media (min-width: 768px) {
    width: 209px;
    height: 108px;
    padding: 14px 18px;
  }
`;

export const Number = styled.p`
  margin-top: 28px;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 18px;
  font-weight: 700;
  line-height: 111.111%;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 133.333%;
  }
`;

export const IconWarning = styled.svg`
  margin-right: 8px;
  width: 24px;
  height: 24px;
  background-color: ${props => props.theme.colors.beige};
  border-radius: 50%;
`;

export const WrapperWarning = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 40px;
  margin-bottom: 40px;
  height: 73px;
  @media (min-width: 768px) {
    margin-top: 32px;
    margin-bottom: 32px;
    width: 439px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const TextWarning = styled.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 128.571%;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`;

