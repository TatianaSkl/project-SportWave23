import icon from 'images/sprite.svg';

import {
  Number,
  NumberDinamic,
  Span,
  SvgPlay,
  SvgRun,
  TextBox,
  WrapperStatistics,
  WrapperSvg,
  WrapperVideoCount,
} from './StatisticsInfo.styled';

export const StatisticsInfo = () => {
  return (
    <>
      <WrapperVideoCount>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <WrapperSvg>
            <SvgPlay>
              <use href={icon + '#icon-Polygon-1'}></use>
            </SvgPlay>
          </WrapperSvg>

          <div>
            <Number>2200</Number>
            <TextBox>Video tutorial</TextBox>
          </div>
        </div>
      </WrapperVideoCount>
      <WrapperStatistics>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SvgRun>
            <use href={icon + '#icon-running-w'}></use>
          </SvgRun>
        </div>
        <NumberDinamic>
          500 <Span>cal</Span>
        </NumberDinamic>
      </WrapperStatistics>
    </>
  );
};
