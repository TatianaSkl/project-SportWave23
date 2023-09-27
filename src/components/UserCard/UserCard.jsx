import { useSelector } from 'react-redux';
import { selectBmr, selectUser } from 'redux/auth/selectors';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
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
import { getBmr, updateAvatarUrl } from 'redux/auth/operations';

export const UserCard = () => {
  const user = useSelector(selectUser);
  const bmr = useSelector(selectBmr);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBmr());
  }, [dispatch]);

  useEffect(() => {
    const savedImageUrl = localStorage.getItem(`userAvatar_${user.name}`);
    if (savedImageUrl) {
      setSelectedImageUrl(savedImageUrl);
    }
  }, [user.name]);

  const onDrop = acceptedFiles => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageUrl = reader.result;
      setSelectedImageUrl(imageUrl);
      localStorage.setItem(`userAvatar_${user.name}`, imageUrl);
    };

    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*', maxFiles: 1 });

  const handleChange = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = e => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const imageUrl = reader.result;
          setSelectedImageUrl(imageUrl);
          localStorage.setItem(`userAvatar_${user.name}`, imageUrl);
          dispatch(updateAvatarUrl(imageUrl));
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  return (
    <WrapperUserCard>
      <WrapperFoto {...getRootProps()}>
        <input {...getInputProps()} />
        {selectedImageUrl ? (
          <ImageUser src={selectedImageUrl} alt="user" loading="lazy" />
        ) : (
          <ImageUser src={user.avatarURL} alt="user" loading="lazy" />
        )}
      </WrapperFoto>
      <ButtonPlus onClick={handleChange}>
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
          <Number>{bmr}</Number>
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
          <IconWarning width="24" height="24">
            <use href={icon + '#icon-exclamation'}></use>
          </IconWarning>
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
