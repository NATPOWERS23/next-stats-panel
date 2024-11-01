import { Protect } from "@clerk/nextjs";
import Desk from "./desk/Desk";
import PageTitle from "@/components/PageTitle/PageTitle";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Card from "@/components/Card/Card";
import Button from "@/components/Button/Button";
import CustomList from "@/components/CustomList/CustomList";
import { roleList, ROLE } from "@/constants/roles";
import { ERRORS } from "@/constants/errors";

export default function Events() {
	const CommingSoonBody = (
		<CustomList
			items={[
				{ name: "Charity Saturday 12/12 14:00" },
				{ name: "After Party 14/12 22:00" },
			]}
		/>
	);

	const pageContent = (
		<>
			<PageTitle title="Events Calendar" />
			<Desk />
			<Card title="Comming Soon" body={CommingSoonBody} />
			<Button content="+ Add Event" onClick={undefined} />
		</>
	);

	return (
		<>
			<Protect role={roleList[ROLE.admin]} fallback={ERRORS.NO_ACCEESS_CRM}>
				<PageWrapper content={pageContent} />
			</Protect>
		</>
	);
}
