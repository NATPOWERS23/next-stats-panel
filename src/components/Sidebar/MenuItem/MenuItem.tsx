"use client";

import Link from "next/link";
import { useState } from "react";
import {
	blockedMenuItems,
	crmPath,
	type IMenuItem,
	subMenuItems,
} from "../../../constants/menu-items";
import Icon from "@/components/Icon/Icon";

interface MenuItemProps {
	item: IMenuItem;
	isCollapsed: boolean;
}

const MenuItemContent = ({
	item,
	isCollapsed,
	hasBlockedIcon = false,
}: MenuItemProps & { hasBlockedIcon?: boolean }) => {
	if (isCollapsed) {
		return (
			<div className="rounded-2large backdrop-blur-sm bg-white/20 hover:bg-white hover:text-black p-2 gap-2">
				<Icon name={item.icon} />
			</div>
		);
	}

	return (
		<div>
			<div className="max-sm:hidden flex gap-2 items-center px-3">
				<span>{item.title}</span>
				{hasBlockedIcon && <Icon name="arrow_go" size={20} />}
				{blockedMenuItems.includes(item.title) && (
					<Icon name="blocked" color="grey" />
				)}
			</div>
			<div className="sm:hidden rounded-2large backdrop-blur-sm bg-white/20 hover:bg-white hover:text-black p-2 gap-2">
				<Icon name={item.icon} />
			</div>
		</div>
	);
};

const SubMenuItem = ({ item, isCollapsed }: MenuItemProps) => {
	return (
		<li className="hover:bg-gray-100 rounded-md">
			<Link href={crmPath + item.link}>
				{isCollapsed ? (
					<div className="rounded-2large backdrop-blur-sm hover:bg-white hover:text-black p-2">
						<Icon name={item.icon} />
					</div>
				) : (
					<div>
						<div className="max-sm:hidden flex items-center px-3">
							<span className="mx-2">{item.title}</span>
							{blockedMenuItems.includes(item.title) && (
								<Icon name="blocked" color="grey" />
							)}
						</div>
						<div className="sm:hidden rounded-2large backdrop-blur-sm hover:bg-white hover:text-black p-2">
							<Icon name={item.icon} />
						</div>
					</div>
				)}
			</Link>
		</li>
	);
};

const SubMenu = ({
	dropDownItem,
	isCollapsed,
}: {
	dropDownItem: IMenuItem[];
	isCollapsed: boolean;
}) => {
	return (
		<div className="mt-2 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
			<ul className="flex flex-col gap-2">
				{dropDownItem.map((item) => (
					<SubMenuItem key={item.id} item={item} isCollapsed={isCollapsed} />
				))}
			</ul>
		</div>
	);
};

export default function MenuItem({ item, isCollapsed }: MenuItemProps) {
	const [isSubMenuShow, setIsSubMenuShow] = useState(false);
	const hasSubmenu = Boolean(subMenuItems[item.id]);

	const handleClick = () => {
		if (hasSubmenu) {
			setIsSubMenuShow(!isSubMenuShow);
		}
	};

	return (
		<div className="relative py-1">
			<div
				onClick={handleClick}
				role={hasSubmenu ? "button" : undefined}
				tabIndex={hasSubmenu ? 0 : undefined}
				onKeyDown={
					hasSubmenu
						? (e) => {
								if (e.key === "Enter" || e.key === " ") {
									handleClick();
								}
							}
						: undefined
				}
			>
				{hasSubmenu ? (
					<MenuItemContent
						item={item}
						isCollapsed={isCollapsed}
						hasBlockedIcon={true}
					/>
				) : (
					<Link href={crmPath + item.link}>
						<MenuItemContent item={item} isCollapsed={isCollapsed} />
					</Link>
				)}
			</div>

			{hasSubmenu && isSubMenuShow && (
				<SubMenu
					dropDownItem={subMenuItems[item.id]}
					isCollapsed={isCollapsed}
				/>
			)}
		</div>
	);
}
