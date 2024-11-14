"use client";

import { useState } from "react";
import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";

export default function MobileMenu() {
	const [toggleMenu, settoggleMenu] = useState(false);

	const handleMenuOpen = () => {
		settoggleMenu(!toggleMenu);
	};

	return (
		<div className="md:hidden flex flex-col">
			<Button
				content={
					<div className="flex items-center gap-2">
						Menu
						<Icon
							name={`${toggleMenu ? "arrow_down" : "arrow_go"}`}
							size={20}
						/>
					</div>
				}
				onClick={handleMenuOpen}
			/>

			<ul
				className={`flex-col gap-8 absolute top-14 left-0 p-8 w-full bg-dark-blue ${toggleMenu ? "flex" : "hidden"}`}
			>
				<li>
					<a href="/client/news">News</a>
				</li>
				<li>
					<a href="/client/blogs">Blog</a>
				</li>
				<li>
					<a href="/client/docs">Docs</a>
				</li>
				<Button content="GET STARTED" buttonType="secondary" fullWidth={true} />
			</ul>
		</div>
	);
}
