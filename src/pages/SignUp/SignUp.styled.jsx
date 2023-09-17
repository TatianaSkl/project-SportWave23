import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 12px;
`;

export const Question = styled.p`
  margin-right: 2px;
  color: rgba(239, 237, 232, 0.6);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  line-height: 150%;
`;

export const LinkSignIn = styled(Link)`
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  line-height: 150%;
  text-decoration-line: underline;
`;
