import { SettingsContainer } from './settingsContainer/SettingsContainer';
import { UserProfileInfo } from './userProfileInfo/UserProfileInfo';
import { BlockContainer } from './blockContainer/BlockContainer';

export const Profile = () => {
  return (
    <>
      <UserProfileInfo />
      <SettingsContainer />
      <BlockContainer />
    </>
  );
};
