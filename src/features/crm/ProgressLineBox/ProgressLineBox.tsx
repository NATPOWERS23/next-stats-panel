"use client";

import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

export default function ProgressLineBox({
	title,
	totalAmount,
	progressValue,
	footerAmount = "",
	footerText = "",
	color = "#1c9b56",
}: {
	title: string;
	totalAmount: number;
	progressValue: number;
	pin?: boolean;
	footerAmount?: string;
	footerText?: string;
	color?: string;
}) {
	const openShareModal = () => {
		console.log("Share modal opened");
	};

	return (
		<div className="card w-full p-4 pt-2 rounded-2large shadow-lg bg-grey flex flex-col row-span-auto">
			<div className="card-body">
				<div className="header flex w-full justify-end">
					<div className="header-title py-4 font-black text-sm sm:text-xl w-full">
						{title}
					</div>
					<div className="header-actions">
						<Button
							content={<Icon name="share" />}
							onClick={openShareModal}
							size="small"
							buttonType="outlined"
						/>
					</div>
				</div>
				<ProgressBar
					totalAmount={totalAmount}
					progressValue={progressValue}
					pin={true}
					color={color}
				/>
				<div className="footer">
					<div className="flex gap-2 justify-start items-center">
						<div className="footer-numbers font-black text-sm sm:text-xl">
							{footerAmount}
						</div>
						<div className="footer-subtext font-thin text-xs sm:text-sm w-40">
							{footerText}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
