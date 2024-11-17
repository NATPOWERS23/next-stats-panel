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
				<div className="flex items-center justify-between">
					{!isCollapsed && <h3 className="font-bold">Menu</h3>}
					<button
						type="button"
						className="my-2 hidden sm:flex"
						onClick={toggleCollapse}
					>
						<div className="rounded-2large backdrop-blur-sm bg-white/20 hover:bg-white hover:text-black p-2">
							{isCollapsed ? (
								<Icon name="arrow_right" />
							) : (
								<Icon name="arrow_left" />
							)}
						</div>
					</button>
				</div>
				<div className="flex flex-col gap-2">
					{menuItems.map((item: IMenuItem) => (
						<MenuItem item={item} key={item.id} isCollapsed={isCollapsed} />
					))}
				</div>
			</section>
		</div>
	);
}
