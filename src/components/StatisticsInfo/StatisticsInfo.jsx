// import { useSelector } from 'react-redux';
// import { selectUser } from 'redux/auth/selectors';
import icon from 'images/sprite.svg';
// import { LogOutBtn } from 'components';

import {
  Number,
  NumberDinamic,
  TextBox,
  WrapperSvg,
  //   WrapperBox,
  WrapperTime,
  WrapperVideoCount,
} from './StatisticsInfo.styled';

export const StatisticsInfo = () => {
  return (
    <>
      <WrapperVideoCount>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <WrapperSvg>
            <svg width="12" height="12">
              <use href={icon + '#icon-Polygon-1'}></use>
            </svg>
          </WrapperSvg>

          <div style={{ marginLeft: '8px' }}>
            <Number>2200</Number>
            <TextBox>Video tutorial</TextBox>
          </div>
        </div>
      </WrapperVideoCount>
      <WrapperTime>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <svg width="20" height="20">
            <use href={icon + '#icon-dumbbell'}></use>
          </svg>
        </div>
        <NumberDinamic>500 cal</NumberDinamic>
      </WrapperTime>
    </>
  );
};
