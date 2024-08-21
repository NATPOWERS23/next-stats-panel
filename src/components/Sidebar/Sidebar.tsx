"use client";

import {
	Protect,
	SignedIn,
	useOrganizationList,
	UserButton,
} from "@clerk/nextjs";
import { type IMenuItem, menuItems } from "../../constants/menu-items";
import MenuItem from "./MenuItem/MenuItem";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
	const { isLoaded, setActive, userMemberships } = useOrganizationList({
		userMemberships: {
			infinite: true,
		},
	});

	if (!isLoaded) {
		return <>Loading</>;
	}

	return (
		<div className={styles.sidebar}>
			<section>
				<SignedIn>
					<UserButton />
				</SignedIn>

				<ul>
					{userMemberships.data?.map(
						(mem) =>
							mem.organization.id && (
								<li key={mem.id}>
									<span>
										Погодитися з умовами використання {mem.organization.name} -{" "}
									</span>
									<a href="#" target="blank">
										(умови)
									</a>
									<br />
									<br />
									<button
										type="button"
										onClick={() =>
											setActive({ organization: mem.organization.id })
										}
									>
										Погодитися
									</button>
								</li>
							),
					)}
				</ul>
			</section>

			<section>
				<Protect
					condition={(has) =>
						has({ role: "org:admin" }) ||
						has({ role: "org:channel_owner" }) ||
						has({ role: "org:member" })
					}
				>
					<h3>Menu</h3>
					{menuItems.map((item: IMenuItem) => (
						<MenuItem item={item} key={item.id} />
					))}
				</Protect>
			</section>
		</div>
	);
}
