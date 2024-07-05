import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { IMenuItem, menuItems } from '../../constants/menu-items';
import MenuItem from './MenuItem/MenuItem';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <h3>Menu</h3>
      {menuItems.map((item: IMenuItem) => (
        <MenuItem item={item} key={item.id} />
      ))}
    </div>
  );
}
