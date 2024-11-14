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
				<div className="header flex">
					<div className="header-actions">
						<Button content={<Icon name="share" />} onClick={openShareModal} />
					</div>
				</div>
				<div className="main">
					<div className="main-text">Manager Rating</div>
					<ul>
						<div>
							<span>Deals</span>
							<span>Profit</span>
						</div>
						{data.rating.length &&
							data.rating.map((item, index) => (
								<>
									<li key={item.name}>
										{item.avatarSrc ? (
											<Avatar sizes={24} src={item.avatarSrc} />
										) : (
											<Avatar sizes={24} />
										)}
										<span>{item.name}</span>
										<Button
											content={item.dealsAmount.toString()}
											onClick={undefined}
										/>
										<Button content={`$ ${item.profit}`} onClick={undefined} />
										<span>#{index + 1}</span>
									</li>
									<hr key={item.name} />
								</>
							))}
					</ul>
				</div>
				<div className="footer">
					<div className="flex">
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
