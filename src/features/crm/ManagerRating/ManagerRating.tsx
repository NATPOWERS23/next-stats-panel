"use client";

import Avatar from "@/components/Avatar/Avatar";
import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";
import React from "react";

interface Rating {
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
	const openShareModal = () => {
		console.log("Share modal opened");
	};

	return (
		<div className="card">
			<div className="card-body">
				<div className="header">
					<div className="header-titlea">Manager Rating</div>
					<div className="header-actions">
						<Button
							content={<Icon name="share" />}
							onClick={openShareModal}
							buttonType="outlined"
						/>
					</div>
				</div>
				<div className="main">
					<div className="grid grid-cols-[repeat(5_minmax(0,_auto))] items-center">
						<>
							<span className="col-start-3">Deals</span>
							<span>Profit</span>
							<span> </span>
						</>
						{data.rating.length &&
							data.rating.map((item, index) => (
								<>
									{item.avatarSrc ? (
										<Avatar key={item.name} sizes={24} src={item.avatarSrc} />
									) : (
										<Avatar key={item.name} sizes={24} />
									)}
									<span key={item.name}>{item.name}</span>
									<Button
										key={item.name}
										content={item.dealsAmount.toString()}
										onClick={undefined}
									/>
									<Button
										key={item.name}
										content={`$${item.profit}`}
										onClick={undefined}
									/>
									<span key={item.name} className="flex justify-end">
										#{index + 1}
									</span>
									<hr key={item.name} />
								</>
							))}
					</div>
				</div>
				<div className="footer">
					<div className="flex gap-2 justify-start">
						<div className="footer-numbers">${data.totalAmount}</div>
						<div className="footer-subtext">
							Avarage revenue per trade ${data.avarageRevenue}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
