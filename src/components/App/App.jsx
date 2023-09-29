import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Loader, SharedLayout } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import Welcome from 'pages/Welcome/Welcom';
import NotFound from 'pages/NotFound/NotFound';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { selectIsRefreshing } from 'redux/auth/selectors';

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
        <Route
          path="register"
          element={<RestrictedRoute redirectTo="/params" component={SingUpPage} />}
        />
        <Route
          path="login"
          element={<RestrictedRoute redirectTo="/diary" component={SingInPage} />}
        />
        <Route
          path="params"
          element={<PrivateRoute redirectTo="/params" component={ParamsPage} />}
        />
        <Route
          path="profile"
          element={<PrivateRoute redirecttTo="/profile" component={ProfilePage} />}
        />
        <Route path="diary" element={<PrivateRoute redirectTo="/diary" component={DiaryPage} />} />
        <Route
          path="products"
          element={<PrivateRoute redirectTo="/products" component={ProductsPage} />}
        />
        <Route
          path="exercises"
          element={<PrivateRoute redirectTo="/exercises" component={ExercisesPage} />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
