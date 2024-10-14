"use client";

import { ResponsiveBar } from "@nivo/bar";

export const UpdateBar = ({
	data,
	keys,
	patternMatchId,
	indexBy,
	minValue = 0,
	monthsAbrr = false,
	colors,
}: {
	data: any[];
	keys: string[];
	patternMatchId: string;
	indexBy: string;
	minValue?: number | "auto";
	monthsAbrr?: boolean;
	colors: string[];
}) => (
	<>
		<ResponsiveBar
			data={data}
			keys={keys}
			indexBy={indexBy}
			minValue={minValue}
			margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
			padding={0}
			valueScale={{ type: "linear" }}
			indexScale={{ type: "band", round: true }}
			colors={colors}
			colorBy="indexValue"
			enableGridY={false}
			defs={[
				{
					id: "lines",
					type: "patternLines",
					background: "inherit",
					color: "#fff",
					rotation: -45,
					lineWidth: 5,
					spacing: 10,
				},
			]}
			fill={[
				{
					match: {
						id: patternMatchId,
					},
					id: "lines",
				},
			]}
			borderWidth={1}
			borderColor="#fff"
			borderRadius={7}
			axisTop={null}
			axisRight={null}
			axisLeft={null}
			axisBottom={
				monthsAbrr
					? null
					: {
							tickSize: 5,
						}
			}
			enableLabel={false}
			role="application"
			ariaLabel="Update Bar Chart"
		/>

		{monthsAbrr && (
			<ul
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "0 2.25rem",
					marginTop: "-1rem",
					font: "bold 24px sans-serif",
				}}
			>
				{data?.map((item) => (
					<li key={item[indexBy]}>{item[indexBy]}</li>
				))}
			</ul>
		)}
	</>
);
