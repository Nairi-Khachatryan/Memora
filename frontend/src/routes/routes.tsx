import { AvatarDetailInfo } from '../pages/avatarDetailInfo/AvatarDetailInfo';
import { AboutOurProject } from '../pages/aboutOurProject/AboutOurProject';
import { BlockDetailInfo } from '../pages/blockDetailInfo/BlockDetailInfo';
import { NotFoundPage } from '../components/notFoundPage/NotFoundPage';
import { CreateAvatar } from '../pages/createAvatar/CreateAvatar';
import { UpdateAvatar } from '../pages/updateAvatar/UpdateAvatar';
import { EditProfile } from '../pages/editProfile/EditProfile';
import { CreateBlock } from '../pages/createBlock/CreateBlock';
import { createBrowserRouter } from 'react-router-dom';
import { Settings } from '../pages/settings/Settings';
import { SignIn } from '../pages/auth/signIn/SignIn';
import { SignUp } from '../pages/auth/signUp/SignUp';
import { Profile } from '../pages/profile/Profile';
import { AppLayout } from '../layout/AppLayout';
import ProtectedRoute from './ProtectedRoute';
import { Home } from '../pages/home/Home';
import { ROUTES } from './routhPath';
import { ToDo } from '../pages/toDo/ToDo';

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
        path: ROUTES.ABOUT_OUR_PROJECT,
        element: <AboutOurProject />,
      },
      {
        path: ROUTES.NOT_FOUND_PAGE,
        element: <NotFoundPage />,
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
          {
            path: ROUTES.CREATE_AVATAR,
            element: <CreateAvatar />,
          },
          {
            path: ROUTES.AVATAR_ITEM_MORE_INFO,
            element: <AvatarDetailInfo />,
          },
          {
            path: ROUTES.UPDATE_AVATAR,
            element: <UpdateAvatar />,
          },
          {
            path: ROUTES.TO_DO,
            element: <ToDo />,
          },
        ],
      },
    ],
  },
]);
