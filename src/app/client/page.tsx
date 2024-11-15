import React from "react";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Image from "next/image";
import twitchLogo from "@public/assets/logos/twitch.svg";
import githubLogo from "@public/assets/logos/github.svg";
import slackLogo from "@public/assets/logos/slack.svg";
import styles from "./client.module.css";
import Button from "@/components/Button/Button";

export default async function ClientPage() {
	const welcomePageContent = (
		<div
			className={`${styles.main} flex flex-col items-center justify-center gap-8`}
		>
			<div className="announcement font-bold text-xl rounded-lg border hover:border-transparent hover:bg-white mt-18">
				<a href="/" className="flex px-4 py-2">
					New products are coming. Join us for Paw Launch Week, Nov 18-21.
				</a>
			</div>
			<h1 className="text-8xl font-bold text-center pb-2">
				Your <span className={styles.swing}>channel,</span> your control
			</h1>
			<p className="text-center text-2xl">
				Application monitoring software considered &ldquo;not bad&rdquo; by 4
				million developers.
			</p>
			<div className="buttons flex gap-4 justify-center">
				<Button content="Try Paw for Free" buttonType="secondary" />
				<Button content="Get a Demo" />
			</div>

			<p className="font-bold text-xl">
				100,000+ Growing Teams Use Paw to Manage Problems Fast
			</p>
			<div className="logos flexflex-col items-center justify-center gap-0 sm:flex-row sm:gap-8">
				<Image src={twitchLogo} alt="twitch logo" width={154} />
				<Image src={githubLogo} alt="github logo" width={154} />
				<Image
					src={slackLogo}
					alt="slack logo"
					width={154}
					className="sm:py-0 py-12"
				/>
			</div>
		</div>
	);

	return <PageWrapper content={welcomePageContent} />;
}
