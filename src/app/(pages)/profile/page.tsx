'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ROLE } from '@/constants/ROLES';
import { useAuth } from '@/context/authContext';
import { mockChannelData } from '@/mocks/twich-channel-mockdata';
import useFetchTwitchChannel from '@/hooks/twitch/useFetchTwitchChannel';
import Loader from '@/app/loading';
import styles from './profile.module.css';

export interface ChannelData {
  username: string;
  followers: number;
  status: string;
  avatar: string;
}

export default function ProfilePage() {
  const { authUser } = useAuth();
  let { channel, loading } = useFetchTwitchChannel(authUser);
  let twichLink = '#';

  if (loading) return <Loader />;

  if (!channel) {
    channel = mockChannelData;
  }

  if (channel) {
    twichLink = `https://dashboard.twitch.tv/u/${channel.username}/settings/channel/brand`;
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
            <section className={styles.channelInfo}>
              <div>
                <p>{channel.username && `Channel owner name: ${channel.username}`}</p>
                <p>{channel.followers >= 0 && `Followers: ${channel.followers}`}</p>
                <p>{channel.status && `Status: ${channel.status}`}</p>
              </div>
              <div className={styles.avatarWrapper}>
                <div className={styles.avatar}>
                  {channel.avatar && (
                    <Image
                      className={styles.image}
                      src={channel.avatar}
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
            </section>
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
