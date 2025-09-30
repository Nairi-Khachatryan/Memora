import { ProfileItem } from '../../components/ProfileItem';
import { useAppSelector } from '../../app/hooks';
import { ROUTES } from '../../routes/routhPath';
import { useNavigate } from 'react-router-dom';
// import { IoCopy } from 'react-icons/io5';
import s from './Profile.module.scss';
import { Button } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { getBlock } from '../../api/getBlock';
export const Profile = () => {
  const { id, email } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  type BlockType = {
    _id: string;
    lable: string;
    text: string;
    ownerId: string;
  };

  // ID '68d79ae27be1f8e711ebf04c'

  const { data, error, isSuccess } = useQuery<BlockType[]>({
    queryKey: ['block', id],
    queryFn: () => getBlock(id as string),
    enabled: !!id,
  });

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
          <Button onClick={() => navigate(ROUTES.SETTINGS)}>Setting</Button>
          <Button onClick={() => navigate(ROUTES.EDIT_PROFILE)}>
            Edit Profile
          </Button>
        </div>
      </div>
      <div className={s.blocks}>
        {data
          ? data.map((block) => (
              <Button
                onClick={() =>
                  navigate(ROUTES.DETAIL_INFO, { state: { block } })
                }
              >
                {block.lable}
              </Button>
            ))
          : 'loading...'}
        <Button onClick={() => navigate(ROUTES.CREATE_BLOCK)}>
          + Add block
        </Button>
      </div>
    </div>
  );
};
