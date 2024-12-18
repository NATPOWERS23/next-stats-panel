"use client";

import Link from "next/link";
import { useState } from "react";
import {
	blockedMenuItems,
	crmPath,
	type IMenuItem,
	subMenuItems,
} from "../../../constants/menu-items";

import styles from "./MenuItem.module.css";
import Icon from "@/components/Icon/Icon";

export default function MenuItem({
	item,
	isCollapsed,
}: { item: IMenuItem; isCollapsed: boolean }) {
	const [isSubMenuShow, setIsSubMenuShow] = useState(false);

	return (
		<div className={styles.item}>
			{subMenuItems[item.id] ? (
				// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<div onClick={() => setIsSubMenuShow(!isSubMenuShow)}>
					{!isCollapsed ? item.title : <Icon name={item.icon} />}
				</div>
			) : (
				<Link href={crmPath + item.link}>
					{!isCollapsed ? (
						<div className="flex gap-2 items-center">
							<span>{item.title}</span>
							{blockedMenuItems.includes(item.title) && (
								<Icon name="blocked" color="grey" />
							)}
						</div>
					) : (
						<Icon name={item.icon} />
					)}
				</Link>
			)}
			{subMenuItems[item.id] && isSubMenuShow && (
				<SubMenu
					dropDownItem={subMenuItems[item.id]}
					isCollapsed={isCollapsed}
				/>
			)}
		</div>
	);
}

const SubMenu = ({
	dropDownItem,
	isCollapsed,
}: { dropDownItem: IMenuItem[]; isCollapsed: boolean }) => {
	return (
		<div className={styles.dropdown}>
			<ul>
				{dropDownItem.map((item) => {
					return (
						<li className={styles.subitem} key={item.id}>
							<Link href={crmPath + item.link}>
								{isCollapsed ? (
									<Icon name="subitem" />
								) : (
									<div className="flex gap-2 items-center">
										<span> {item.title}</span>
										{blockedMenuItems.includes(item.title) && (
											<Icon name="blocked" color="grey" />
										)}
									</div>
								)}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
