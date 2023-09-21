import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import {
  ButtonPlus,
  IconWarning,
  ImageUser,
  Name,
  Number,
  SvgPlus,
  Text,
  TextBox,
  TextWarning,
  Wrapper,
  WrapperBox,
  WrapperCalor,
  WrapperFoto,
  WrapperTime,
  WrapperUserCard,
  WrapperWarning,
} from './UserCard.styled';
import icon from 'images/sprite.svg';
import { LogOutBtn } from 'components';

export const UserCard = () => {
  const user = useSelector(selectUser);

  const handleSubmit = () => {
    console.log(user);
    console.log(user.userParams);
  };
  return (
    <WrapperUserCard>
      <WrapperFoto>
        <ImageUser
          src={`https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469572/categories/lower_arms_hvwarx.jpg`}
          alt="user"
          loading="lazy"
        />
      </WrapperFoto>
      <ButtonPlus onClick={handleSubmit}>
        <SvgPlus>
          <use href={icon + '#check'}></use>
        </SvgPlus>
      </ButtonPlus>
      <Name>{user.name}</Name>
      <Text>User</Text>
      <WrapperBox>
        <WrapperCalor>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="20" height="20">
              <use href={icon + '#icon-devices'}></use>
            </svg>
            <TextBox>Daily calorie intake</TextBox>
          </div>
          <Number>2200</Number>
        </WrapperCalor>
        <WrapperTime>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="20" height="20">
              <use href={icon + '#icon-dumbbell'}></use>
            </svg>
            <TextBox>Daily norm of sports</TextBox>
          </div>
          <Number>110 min</Number>
        </WrapperTime>
      </WrapperBox>
      <WrapperWarning>
        <div>
          <IconWarning />
        </div>
        <TextWarning>
          We understand that each individual is unique, so the entire approach to diet is relative
          and tailored to your unique body and goals.
        </TextWarning>
      </WrapperWarning>
      <Wrapper>
        <LogOutBtn color="#E6533C" />
      </Wrapper>
    </WrapperUserCard>
  );
};
