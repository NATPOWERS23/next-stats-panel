import { SignedIn, UserButton } from '@clerk/nextjs';
import { IMenuItem, menuItems } from '../../constants/menu-items';
import MenuItem from './MenuItem/MenuItem';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <section>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </section>

      <section>
        <h3>Menu</h3>
        {menuItems.map((item: IMenuItem) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </section>
    </div>
  );
}
