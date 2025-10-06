import { BlockContainer } from './blockContainer/BlockContainer';
import { SettingsContainer } from './settingsContainer/SettingsContainer';
import { UserProfileInfo } from './userProfileInfo/UserProfileInfo';

export const Profile = () => {
  return (
    <>
      <UserProfileInfo />
      <SettingsContainer />
      <BlockContainer />
    </>
  );
};
