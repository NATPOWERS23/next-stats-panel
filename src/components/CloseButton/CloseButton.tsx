import Icon from "../Icon/Icon";

export default function CloseButton({
	handleCloseModal,
}: { handleCloseModal: () => void }) {
	return (
		<button
			type="button"
			style={{ float: "right" }}
			onClick={() => handleCloseModal()}
		>
			<Icon name="close" size={18} />
		</button>
	);
}
