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
import { getBmr } from 'redux/auth/operations';
import { updateAvatar, refreshUser } from 'redux/auth/operations';

export const UserCard = () => {
  const user = useSelector(selectUser);
  const bmr = useSelector(selectBmr);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBmr());
  }, [dispatch]);

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
        
    try {
      const { data } = await dispatch(refreshUser());
      if (data) {
        console.log(data)
        const userId = data.id;
        const response = await updateAvatar({ file, userId });
        const newAvatarUrl = response.avatarURL;
        setSelectedImageUrl(newAvatarUrl);
      } else {
        console.error('No data returned from refreshUser');
      }
    } catch (error) {
      console.error('Error updating avatar:', error);
    }
  }
  
  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*', maxFiles: 1 });

  const handleOpenDropzone = () => {
    const input = document.querySelector('input[type="file"]');
    if (input) {
      input.click();
    }
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
      <ButtonPlus onClick={handleOpenDropzone}>
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
