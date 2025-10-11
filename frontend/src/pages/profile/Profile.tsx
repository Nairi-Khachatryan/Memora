import { SettingsContainer } from './settingsContainer/SettingsContainer';
import { UserProfileInfo } from './userProfileInfo/UserProfileInfo';
import { BlockContainer } from './blockContainer/BlockContainer';
import type React from 'react';

export const Profile: React.FC = () => {
  return (
    <>
      <UserProfileInfo />
      <SettingsContainer />
      <BlockContainer />
    </>
  );
};
