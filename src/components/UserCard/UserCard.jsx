import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

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
  WrapperWarning
} from './UserCard.styled';
import icon from 'images/sprite.svg';
import { LogOutBtn } from 'components';
import { updateAvatar, refreshUser } from 'redux/auth/operations';

export const UserCard = () => {
  const user = useSelector(selectUser);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  
  const dispatch = useDispatch();
  
  // useEffect(() => {
  //   const savedImageUrl = localStorage.getItem(`userAvatar_${user.name}`);
  //   if (savedImageUrl) {
  //     setSelectedImageUrl(savedImageUrl);
  //   }
  // }, [user.name]);

  // const onDrop = (acceptedFiles) => {
  //   const file = acceptedFiles[0];
  //   const reader = new FileReader();
  
  //   reader.onload = () => {
  //     const imageUrl = reader.result;
  //     setSelectedImageUrl(imageUrl);
  //     localStorage.setItem(`userAvatar_${user.name}`, imageUrl);
  //   };
  
  //   reader.readAsDataURL(file);
  // };
  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const response = dispatch(refreshUser());
      const userId = response.payload.id;
    try {
      const response = await updateAvatar({ file, userId });
      const newAvatarUrl = response.avatarURL;
      setSelectedImageUrl(newAvatarUrl);
    } catch (error) {
      console.error('Error updating avatar:', error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*', maxFiles: 1 });

  const handleOpenDropzone = () => {
    const input = document.querySelector('input[type="file"]');
    if (input) {
      input.click();
    }
  };

  // const handleChange = () => {
  //   const input = document.createElement('input');
  //   input.type = 'file';
  //   input.accept = 'image/*';
  //   input.onchange = (e) => {
  //     const file = e.target.files[0];
  //     if (file) {
  //       const reader = new FileReader();
  //       reader.onload = () => {
  //         const imageUrl = reader.result;
  //         setSelectedImageUrl(imageUrl);
  //         localStorage.setItem(`userAvatar_${user.name}`, imageUrl);
  //         dispatch(updateAvatarUrl(imageUrl));
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   };
  //   input.click();
  // };

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
          <Number>{user.bmr}</Number>
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
