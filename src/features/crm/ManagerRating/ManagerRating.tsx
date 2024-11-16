"use client";

import Avatar from "@/components/Avatar/Avatar";
import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";
import React, { Fragment } from "react";

interface Rating {
	id: number;
	name: string;
	dealsAmount: number;
	profit: string;
	avatarSrc: string | null;
}

export default function ManagerRating({
	data,
}: {
	data: {
		rating: Rating[];
		totalAmount?: string;
		avarageRevenue?: string;
	};
}) {
	const rating = data.rating;

	const openShareModal = () => {
		console.log("Share modal opened");
	};

	return (
		<div className="card w-full px-6 pt-2 pb-4 rounded-2large shadow-lg bg-green flex flex-col items-center row-span-auto">
			<div className="card-body w-full">
				<div className="header flex w-full justify-end">
					<div className="header-title py-4 font-black text-sm sm:text-xl w-full">
						Manager Rating
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
				<div className="main">
					<div className="flex flex-col gap-1 sm:gap-0 sm:grid sm:grid-cols-[repeat(5_minmax(0,_auto))] items-center">
						<>
							<span className="sm:col-start-3 hidden sm:flex">Deals</span>
							<span className="hidden sm:flex">Profit</span>
							<span> </span>
						</>
						{rating?.map((item, index) => (
							<Fragment key={item.id}>
								{item.avatarSrc ? (
									<Avatar sizes={24} src={item.avatarSrc} />
								) : (
									<Avatar sizes={24} />
								)}
								<span>{item.name}</span>
								<span className="flex sm:hidden">Deals: </span>
								<Button
									content={item.dealsAmount.toString()}
									onClick={undefined}
									size="small"
								/>
								<span className="flex sm:hidden">Profit: </span>
								<Button
									content={`$${item.profit}`}
									onClick={undefined}
									fullWidth={true}
									size="small"
								/>
								<span className="flex justify-end">#{index + 1}</span>
								<hr className="block w-full sm:col-start-1 sm:col-end-6 my-2" />
							</Fragment>
						))}
					</div>
				</div>
				<div className="footer">
					<div className="flex gap-2 justify-start">
						<div className="footer-numbers font-black text-xs sm:text-xl">
							${data.totalAmount}
						</div>
						<div className="footer-subtext font-thin text-xs w-40 ">
							Avarage revenue per trade ${data.avarageRevenue}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
