import styled from '@emotion/styled';

export const SectionDiary = styled.section`
  border-top: 1px solid rgba(239, 237, 232, 0.2);
  padding-top: 40px;
  padding-bottom: 80px;
  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 64px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 68px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const WrapperMobil = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
export const WrapperTablet = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 1440px) {
    display: flex;
  }
`;
