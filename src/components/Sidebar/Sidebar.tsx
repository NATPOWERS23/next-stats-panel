import { useState } from "react";
import { type IMenuItem, menuItems } from "../../constants/menu-items";
import MenuItem from "./MenuItem/MenuItem";
import styles from "./Sidebar.module.css";
import Icon from "../Icon/Icon";

export default function Sidebar() {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const toggleCollapse = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<div className={isCollapsed ? styles.sidebar_collapsed : styles.sidebar}>
			<section>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "flex-start",
					}}
				>
					{!isCollapsed && <h3>Menu</h3>}
					<button
						type="button"
						className={styles.collapseButton}
						onClick={toggleCollapse}
					>
						{isCollapsed ? (
							<Icon name="arrow_right" />
						) : (
							<Icon name="arrow_left" />
						)}
					</button>
				</div>
				<div>
					{menuItems.map((item: IMenuItem) => (
						<MenuItem item={item} key={item.id} isCollapsed={isCollapsed} />
					))}
				</div>
			</section>
		</div>
	);
}
