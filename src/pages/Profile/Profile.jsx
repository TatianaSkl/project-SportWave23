import { TitlePage, UserCard, UserForm } from 'components';
import { SectionProfile, Wrapper } from './Profile.styled';

export default function Profile() {
  return (
    <SectionProfile>
      <TitlePage text="Profile Settings" />
      <Wrapper>
        <UserCard />
        <UserForm />
      </Wrapper>
    </SectionProfile>
  );
}
