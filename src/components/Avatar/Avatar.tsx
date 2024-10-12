import Image from "next/image";

import styles from "./Avatar.module.css";

export default function Avatar({
	src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", // default blank image
	sizes = 32,
}: { src?: string; sizes?: number }) {
	return (
		<div
			className={styles.avatar}
			style={{ width: `${sizes}px`, height: `${sizes}px` }}
		>
			<Image
				className={styles.image}
				src={src}
				alt="user avatar"
				width={100}
				height={100}
			/>
		</div>
	);
}
