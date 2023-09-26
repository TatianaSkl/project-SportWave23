import icon from 'images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStatistics } from 'redux/statistics/operations';
import { selectStatistics } from 'redux/statistics/selectors';
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatistics());
  }, [dispatch]);

  const statistics = useSelector(selectStatistics);
  console.log(statistics);
  const min = 1;
  const max = 4;

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  const { exercisesVideo, exercisesDone, allTime, allUser, allCalories } =
    statistics;
  console.log(2);

  const renderContentRandom = () => {
    switch (randomNumber) {
      case 1:
        return (
          <NumberDinamic>
            {exercisesDone} <Span> ex</Span>
          </NumberDinamic>
        );
      case 2:
        return (
          <NumberDinamic>
            {allCalories} <Span> cal</Span>
          </NumberDinamic>
        );
      case 3:
        return (
          <NumberDinamic>
            {allUser} <Span> users</Span>
          </NumberDinamic>
        );
      case 4:
        return (
          <NumberDinamic>
            {allTime} <Span> hours</Span>
          </NumberDinamic>
        );
      default:
        return null;
    }
  };

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
            <Number>{exercisesVideo}</Number>
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
        {renderContentRandom()}
      </WrapperStatistics>
    </>
  );
};
