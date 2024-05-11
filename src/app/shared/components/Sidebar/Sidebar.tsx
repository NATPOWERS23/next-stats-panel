import { IMenuItem, menuItems } from '../../../menu-items';
import MenuItem from './MenuItem/MenuItem';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h3>Menu</h3>
        {menuItems.map((item: IMenuItem) => (
          <MenuItem item={item} key={item.id}/>
        ))}
    </div>
  );
}