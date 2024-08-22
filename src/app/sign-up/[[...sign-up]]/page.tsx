import { SignUp } from "@clerk/nextjs";
import styles from "./sign-up.module.css";

export default function Page() {
	return (
		<div className={styles.container}>
			<SignUp afterSignOutUrl="/" />
		</div>
	);
}
