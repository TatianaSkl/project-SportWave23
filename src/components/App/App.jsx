import { Route, Routes, useLocation } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Loader, SharedLayout } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import Welcome from 'pages/Welcome/Welcom';
import NotFound from 'pages/NotFound/NotFound';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';

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
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { pathname } = useLocation();

  if (isLoggedIn && pathname !== '/') {
    localStorage.setItem('location', pathname);
  }

  const location = localStorage.getItem('location');

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<RestrictedRoute component={<Welcome />} redirectTo={location} />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/params" component={<SingUpPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/diary" component={<SingInPage />} />}
        />
        <Route
          path="/params"
          element={<PrivateRoute redirectTo="/" component={<ParamsPage />} />}
        />
        <Route
          path="/profile"
          element={<PrivateRoute redirectTo="/" component={<ProfilePage />} />}
        />
        <Route path="/diary" element={<PrivateRoute redirectTo="/" component={<DiaryPage />} />} />
        <Route
          path="/products"
          element={<PrivateRoute redirectTo="/" component={<ProductsPage />} />}
        />
        <Route
          path="/exercises"
          element={<PrivateRoute redirectTo="/" component={<ExercisesPage />} />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
