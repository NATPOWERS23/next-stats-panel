import { OrganizationList, useOrganizationList } from "@clerk/nextjs";
import CustomLoader from "../CustomLoader/CustomLoader";
import TwitchButton from "../TwitchButton/TwitchButton";
import { useTwitch } from "@/contexts/useTwitch";

export default function CreateMembershipView() {
	const { twitchChannelConnected } = useTwitch();
	const { isLoaded, setActive, userMemberships } = useOrganizationList({
		userMemberships: {
			infinite: true,
		},
	});

	if (!isLoaded) {
		return <CustomLoader />;
	}

	const handleSelectOrganization = (organization: string) => {
		setActive({ organization });
	};

	const availableOrganizations = (
		<ul>
			{userMemberships.data?.map((mem) => (
				<li key={mem.id}>
					<span>{mem.organization.name}</span>
					<button
						type="button"
						onClick={() => handleSelectOrganization(mem.organization.id)}
					>
						Select
					</button>
				</li>
			))}
		</ul>
	);

	const createOrgView = (
		<ul>
			<li>1. Create Twitch connection</li>
			{twitchChannelConnected ? <p>DONE!</p> : <TwitchButton />}
			<li>2. Fill the form to create new organization</li>
			{twitchChannelConnected && <OrganizationList />}
		</ul>
	);

	return (
		<>
			<p>The list of available organizations:</p>
			{userMemberships.data?.length ? availableOrganizations : "No invites"}
			<p>
				If you don`t see the needed organization than perhaps Main user have not
				add you to organization yet.
				<br />
				Try to do rechexk later or Create your own organization:
			</p>
			{createOrgView}
		</>
	);
}
