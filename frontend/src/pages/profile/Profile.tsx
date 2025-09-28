import { ProfileItem } from '../../components/ProfileItem';
import { useAppSelector } from '../../app/hooks';
import { IoCopy } from 'react-icons/io5';
import s from './Profile.module.scss';
import { Button } from 'antd';

export const Profile = () => {
  const { id, email } = useAppSelector((state) => state.user);

  return (
    <div className={s.profileContainer}>
      <div className={s.profileInfoSection}>
        <div>
          <span>
            <div className={s.img}>img</div>
          </span>
          <ProfileItem className={s.profileItem} text="name" />
          <ProfileItem className={s.profileItem} text="surname" />
          <ProfileItem className={s.profileItem} text="phone 055107115" />
          <ProfileItem className={s.profileItem} text={`id ${id}`} />
          <ProfileItem className={s.profileItem} text={`email ${email}`} />
        </div>
        <div className={s.settngBlock}>
          <Button>Setting</Button>
          <Button>Edit Profile</Button>
        </div>
      </div>
      <div className={s.blocks}>
        <Button>+ Add block</Button>
      </div>
    </div>
  );
};
