import { OrganizationList, useOrganizationList } from "@clerk/nextjs";
import CustomLoader from "../CustomLoader/CustomLoader";
import TwitchButton from "../TwitchButton/TwitchButton";
import { useTwitch } from "@/contexts/useTwitch";
import CustomList from "../CustomList/CustomList";
import Icon from "../Icon/Icon";

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

	const getListItems = () =>
		userMemberships.data?.map((mem) => ({
			name: mem.organization.name,
			innerButtonText: "Select",
			innerButtonClick: () => handleSelectOrganization(mem.organization.id),
		})) || [];

	const getStepsItems = () => [
		{ name: "1. Create Twitch connection" },
		{ name: "2. Fill the form to create new organization" },
	];

	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center">
				<span>Please select the organization</span>
				<Icon name="arrow_right" size={16} />
			</div>
			<div className="w-96 flex flex-col gap-2 bg-grey m-3 p-3 rounded-large">
				<p>The list of available organizations</p>
				<CustomList items={getListItems()} noItemsText="No invites" />
			</div>
			<p className="text-xs text-white/60">
				If you don`t see the needed organization than perhaps Main user have not
				add you to organization yet.
				<br />
				Try to do recheck later or Create your own organization:
			</p>
			<div className="grid grid-cols-2">
				<CustomList items={getStepsItems()} />
				<div className="w-44">
					{twitchChannelConnected ? (
						<Icon name="success" color="green" size={20} />
					) : (
						<TwitchButton />
					)}
				</div>
			</div>
		</div>
	);
}
