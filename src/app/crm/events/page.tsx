import { Protect } from "@clerk/nextjs";
import Desk from "./desk/Desk";
import { roleList, ROLE } from "@/constants/roles";
import PageTitle from "@/components/PageTitle/PageTitle";
import Card from "@/components/Card/Card";
import PageWrapper from "@/components/PageWrapper/PageWrapper";

export default function Events() {
	const cardBody = (
		<ul>
			<li>Charity Saturday 12/12 14:00</li>
			<li>After Party 14/12 22:00</li>
		</ul>
	);

	const pageContent = (
		<>
			<PageTitle title="Events Calendar" />
			<Desk />
			<Card title="Comming Soon" body={cardBody} />

			<div>
				<button type="button">+ Add Event</button>
			</div>
		</>
	);

	return (
		<>
			<Protect
				role={roleList[ROLE.admin]}
				fallback={
					<p>You do not have the permissions to access this functionality.</p>
				}
			>
				<PageWrapper content={pageContent} />
			</Protect>
		</>
	);
}
