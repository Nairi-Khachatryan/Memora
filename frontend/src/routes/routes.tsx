import { Settings } from '../pages/settings/Settings';
import { createBrowserRouter } from 'react-router-dom';
import { SignIn } from '../pages/auth/signIn/SignIn';
import { SignUp } from '../pages/auth/signUp/SignUp';
import { Profile } from '../pages/profile/Profile';
import { AppLayout } from '../layout/AppLayout';
import ProtectedRoute from './ProtectedRoute';
import { Home } from '../pages/home/Home';
import { ROUTES } from './routhPath';
import { EditProfile } from '../pages/editProfile/EditProfile';
import { CreateBlock } from '../pages/createBlock/CreateBlock';
import { BlockDetailInfo } from '../pages/blockDetailInfo/BlockDetailInfo';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME_PATH,
    element: <AppLayout />,
    children: [
      {
        index: true,
        path: ROUTES.HOME_PATH,
        element: <Home />,
      },
      {
        path: ROUTES.SIGN_IN,
        element: <SignIn />,
      },
      {
        path: ROUTES.SIGN_UP,
        element: <SignUp />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: ROUTES.PROFILE,
            element: <Profile />,
          },
          {
            path: ROUTES.SETTINGS,
            element: <Settings />,
          },
          {
            path: ROUTES.EDIT_PROFILE,
            element: <EditProfile />,
          },
          {
            path: ROUTES.CREATE_BLOCK,
            element: <CreateBlock />,
          },
          {
            path: ROUTES.DETAIL_INFO,
            element: <BlockDetailInfo />,
          },
        ],
      },
    ],
  },
]);
