import styles from './Sidebar.module.css';

const menuItems = [
  { title: 'Home', id: 'menu_item_1', link: '/' },
  { title: 'Dashboard', id: 'menu_item_2', link: '/dashboard' },
];

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h3>Menu</h3>
      <ul className={styles.list}>
        {menuItems.map((item) => (
          <li className={styles.item} key={item.id}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
