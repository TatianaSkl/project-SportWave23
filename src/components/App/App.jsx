import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Loader, SharedLayout } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';
import Welcome from 'pages/Welcome/Welcom';
import NotFound from 'pages/NotFound/NotFound';
import TestModal from 'pages/TestModal/TestModal';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';

const SingUpPage = lazy(() => import('pages/SignUp/SignUp'));
const SingInPage = lazy(() => import('pages/SignIn/SignIn'));

const DiaryPage = lazy(() => import('pages/Diary/Diary'));
const ExercisesPage = lazy(() => import('pages/Exercises/Exercises'));
const ParamsPage = lazy(() => import('pages/Params/Params'));
const ProductsPage = lazy(() => import('pages/Products/Products'));
const ProfilePage = lazy(() => import('pages/Profile/Profile'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Welcome />} />
        <Route element={<PrivateRoute redirectTo="/login" />}>
          <Route path="params" element={<ParamsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="diary" element={<DiaryPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="exercises" element={<ExercisesPage />} />
          <Route path="TestModal" element={<TestModal />} />
        </Route>
        <Route element={<RestrictedRoute redirectTo="params" restricted />}>
          <Route path="/login" element={<SingInPage />} />
          <Route path="/register" element={<SingUpPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
