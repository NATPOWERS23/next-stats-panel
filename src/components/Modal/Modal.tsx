"use client";

import { usePathname, useRouter } from "next/navigation";

import { useSearchParams } from "next/navigation";
import styles from "./Modal.module.css";
import Icon from "../Icon/Icon";
import { modals } from "@/constants/modals";

export default function Modal() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const show = searchParams.get("show") ?? false;
	const modalName = searchParams.get("modal") ?? undefined;

	const handleCloseModal = () => {
		router.push(pathname);
	};

	return (
		<>
			{show && modalName && modals[modalName] && (
				<div className={styles.container}>
					<div className={styles.content}>
						<button
							type="button"
							className={styles.close}
							onClick={() => handleCloseModal()}
						>
							<Icon name="close" />
						</button>
						{modals[modalName]}
					</div>
				</div>
			)}
		</>
	);
}
