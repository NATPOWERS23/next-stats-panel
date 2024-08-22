import { type IMenuItem, menuItems } from "../../constants/menu-items";
import MenuItem from "./MenuItem/MenuItem";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<section>
				<h3>Menu</h3>
				{menuItems.map((item: IMenuItem) => (
					<MenuItem item={item} key={item.id} />
				))}
			</section>
		</div>
	);
}
