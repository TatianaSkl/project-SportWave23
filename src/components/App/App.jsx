import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from 'components';
import Welcome from 'pages/Welcome/Welcom';
import NotFound from 'pages/NotFound/NotFound';

const SingUpPage = lazy(() => import('pages/SignUp/SignUp'));
const SingInPage = lazy(() => import('pages/SignIn/SignIn'));

const DiaryPage = lazy(() => import('pages/Diary/Diary'));
const ExercisesPage = lazy(() => import('pages/Exercises/Exercises'));
const ParamsPage = lazy(() => import('pages/Params/Params'));
const ProductsPage = lazy(() => import('pages/Products/Products'));
const UserPage = lazy(() => import('pages/User/User'));

export const App = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Welcome />} />
      <Route path="register" element={<SingUpPage />} />
      <Route path="login" element={<SingInPage />} />
      <Route path="params" element={<ParamsPage />} />
      <Route path="user" element={<UserPage />} />
      <Route path="diary" element={<DiaryPage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="exercises" element={<ExercisesPage />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);
