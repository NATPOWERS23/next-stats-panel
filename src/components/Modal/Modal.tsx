"use client";

import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { modals } from "@/constants/modals";
import CloseButton from "../CloseButton/CloseButton";
import styles from "./Modal.module.css";

export default function Modal() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const show = searchParams.get("show") ?? false;
	const modalName = searchParams.get("modal") ?? undefined;

	const closeModal = () => {
		router.push(pathname);
	};

	return (
		<>
			{show && modalName && modals[modalName] && (
				<div className={styles.container}>
					<div className={styles.content}>
						<CloseButton handleCloseModal={closeModal} />
						{modals[modalName]}
					</div>
				</div>
			)}
		</>
	);
}
