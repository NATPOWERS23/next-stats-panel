import { redirect } from "next/navigation";
import type { FormEvent } from "react";

export default function ConnectTwitchModal() {
	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		console.log(formData);
		const response = await fetch("/api/userTwitchCredentials", {
			method: "POST",
			body: formData,
		});

		const handleCloseModal = () => {
			redirect("/crm/profile");
		};

		if (response.ok) {
			handleCloseModal();
		}
	}

	return (
		<>
			<h3 className="modal-title">Channel Info</h3>
			<div className="modal-body">
				<form onSubmit={onSubmit}>
					<input type="text" name="user_id" placeholder="User ID" required />
					<input
						type="text"
						name="client_id"
						placeholder="Client ID"
						required
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		</>
	);
}
