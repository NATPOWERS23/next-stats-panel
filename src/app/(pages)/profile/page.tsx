'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ROLE } from '@/constants/ROLES';
import { useAuth } from '@/context/authContext';
import useFetchTwitchUser from '@/hooks/twitch/useFetchTwitchUser';
import Loader from '@/app/loading';
import styles from './profile.module.css';

export default function ProfilePage() {
  const { authUser } = useAuth();
  let { channel, loading } = useFetchTwitchUser(authUser);
  let twichLink = '#';

  if (loading || !channel) return <Loader />;

  if (channel) {
    twichLink = `https://dashboard.twitch.tv/u/${channel.display_name}/settings/channel/brand`;
  }

  const updateUserAvatar = () => {
    console.log('Function not implemented.');
  };

  return (
    <div className="page-wrapper">
      <h1>Profile</h1>

      <div>
        {authUser && (authUser.role === ROLE.CHANNEL_OWNER || authUser.role === ROLE.ADMIN) && channel && (
          <>
            <div className={styles.line}>CHANNEL OWNER DATA</div>
            <div className={styles.channelInfo}>
              <div>
                <p>{channel.display_name || 'No display name'}</p>
                <p>{`Followers: ${channel.followers || 0}`}</p>
                <p>{`Status: ${channel.status || 'No status'}`}</p>
              </div>

              <div className={styles.avatarWrapper}>
                <div className={styles.avatar}>
                  {channel.profile_image_url && (
                    <Image
                      className={styles.image}
                      src={channel.profile_image_url}
                      alt="channel avatar"
                      width={100}
                      height={100}
                    ></Image>
                  )}
                </div>
                {authUser.role === ROLE.CHANNEL_OWNER && (
                  <Link href={twichLink} passHref={true}>
                    <button>Change Profile Avatar</button>
                  </Link>
                )}
              </div>
            </div>
            <hr />
            <div>
              <p>{channel.description || 'No description'}</p>
            </div>
            <hr />
          </>
        )}
      </div>
      <div>
        {authUser && authUser.role !== ROLE.CHANNEL_OWNER && (
          <section className={styles.profileInfo}>
            <div>
              <p>{`Username: ${authUser.username}`}</p>
              <p>{`Role: ${ROLE[authUser.role]}`}</p>
              <p>{`Email: ${authUser.email}`}</p>
            </div>
            <div className={styles.avatarWrapper}>
              <div className={styles.avatar}>
                {authUser.avatar && (
                  <Image
                    className={styles.image}
                    src={authUser.avatar}
                    alt="user avatar"
                    width={100}
                    height={100}
                  ></Image>
                )}
              </div>

              <button onClick={() => updateUserAvatar()}>Change Profile Avatar</button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
