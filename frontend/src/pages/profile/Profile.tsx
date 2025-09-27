import { Button } from 'antd';
import { TextHoler } from '../../components/TextHoler';
import s from './Profile.module.scss';
import { IoCopyOutline } from 'react-icons/io5';
import { IoCopy } from 'react-icons/io5';

export const Profile = () => {
  return (
    <div className={s.profileContainer}>
      <div className={s.profileInfoSection}>
        <div>
          <span>
            <div className={s.img}>img</div>
          </span>
          <span className={s.profileItem}>
            <TextHoler text="firstName" />
            <IoCopyOutline />
          </span>
          <span className={s.profileItem}>
            <TextHoler text="lastName" />
            <IoCopyOutline />
          </span>
          <span className={s.profileItem}>
            <TextHoler text="Email" />
            <IoCopyOutline />
          </span>
          <span className={s.profileItem}>
            <TextHoler text="phone" />
            <IoCopyOutline />
          </span>
          <span className={s.profileItem}>
            <TextHoler text="ID.  " />
            <IoCopyOutline />
          </span>
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
