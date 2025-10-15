import { useState } from "react";
import { type IMenuItem, menuItems } from "@/constants/menu-items";
import MenuItem from "./MenuItem/MenuItem";
import Icon from "../Icon/Icon";

export default function Sidebar() {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const toggleCollapse = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<div className={`sidebar transition-all duration-500 ease-in-out overflow-hidden}`}>
			<section className="h-full">
				<div className="flex items-center justify-between">
					<div className={`transition-opacity duration-300 ${
						isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'
					}`}>
						{!isCollapsed && <h3 className="font-bold max-sm:hidden whitespace-nowrap">Menu</h3>}
					</div>
					<button
						type="button"
						className="my-2 hidden sm:flex flex-shrink-0"
						onClick={toggleCollapse}
					>
						<div className="rounded-2large backdrop-blur-sm bg-white/20 hover:bg-white hover:text-black p-2 transition-colors duration-200">
							<Icon name={`arrow_${isCollapsed ? "right" : "left"}`} />
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
