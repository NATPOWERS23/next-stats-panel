import { Protect } from "@clerk/nextjs";
import Desk from "./desk/Desk";
import { roleList, ROLE } from "@/constants/roles";
import PageTitle from "@/components/PageTitle/PageTitle";

export default function Events() {
	return (
		<>
			<Protect
				role={roleList[ROLE.admin]}
				fallback={
					<p>You do not have the permissions to access this functionality.</p>
				}
			>
				<div className="page-wrapper">
					<PageTitle title="Events Calendar" />
					<Desk />

					<div className="card">
						<div className="card-title">Comming Soon</div>
						<div className="card-body">
							<ul>
								<li>Charity Saturday 12/12 14:00</li>
								<li>After Party 14/12 22:00</li>
							</ul>
						</div>
					</div>

					<div>
						<button type="button">+ Add Event</button>
					</div>
				</div>
			</Protect>
		</>
	);
}
