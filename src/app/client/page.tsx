import React from "react";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Image from "next/image";
import twitchLogo from "@public/assets/logos/twitch.svg";
import githubLogo from "@public/assets/logos/github.svg";
import slackLogo from "@public/assets/logos/slack.svg";
import styles from "./client.module.css";

export default async function ClientPage() {
	const welcomePageContent = (
		<div className={styles.main}>
			<div className="announcement">
				<a href="https://sentry.io/events/launch-week/">
					New products are coming. Join us for Paw Launch Week, Nov 18-21.
				</a>
			</div>
			<h1>
				Your <span>channel,</span> your control
			</h1>
			<p>
				Application monitoring software considered "not bad" by 4 million
				developers.
			</p>
			<div className="buttons">
				<a className="btn-primary" href="/signup">
					Try Paw for Free
				</a>
				<a className="btn-secondary" href="/demo">
					Get a Demo
				</a>
			</div>

			<p>100,000+ Growing Teams Use Paw to Manage Problems Fast</p>
			<div className="logos flex gap-3 items-center justify-center">
				<Image src={twitchLogo} alt="twitch logo" width={154} />
				<Image src={githubLogo} alt="github logo" width={154} />
				<Image src={slackLogo} alt="slack logo" width={154} />
			</div>
		</div>
	);

	return <PageWrapper content={welcomePageContent} />;
}
