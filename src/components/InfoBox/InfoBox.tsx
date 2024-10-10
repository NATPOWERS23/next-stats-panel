import styles from "./InfoBox.module.css";

export default function InfoBox({
	title,
	numbers,
	description,
}: {
	title: string;
	numbers: number;
	description?: string;
}) {
	return (
		<div className="info bg-grey px-4 pt-2 pb-4 rounded-2large shadow-lg w-full">
			<div className="card-title text-xl mb-1 mt-2 text-white">{title}</div>
			<div className={styles.content}>
				<div className="font-bold text-green text-xl">
					{numbers} <span className={styles.currency}>USD</span>
				</div>
			</div>
			<hr />
			<div className={styles.description}>{description}</div>
		</div>
	);
}
