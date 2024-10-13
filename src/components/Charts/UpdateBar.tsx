"use client";

import { ResponsiveBar } from "@nivo/bar";

export const nivoUpdateBarSizes = {
	default: 1,
	sm: 2,
	md: 3,
	lg: 4,
	xl: 5,
};

export const UpdateBar = ({ data }: { data: any[] }) => (
	<>
		<ResponsiveBar
			data={data}
			keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
			indexBy="month"
			margin={{ top: 20, right: 5, bottom: 20, left: 5 }}
			padding={0}
			valueScale={{ type: "linear" }}
			indexScale={{ type: "band", round: true }}
			colors={[
				"Transparent",
				"Transparent",
				"Transparent",
				"Transparent",
				"Transparent",
				"#1c9b56",
			]}
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
						id: "donut",
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
			axisBottom={null}
			enableLabel={false}
			role="application"
			ariaLabel="Nivo bar chart demo"
			barAriaLabel={(e) =>
				`${e.id}: ${e.formattedValue} in month: ${e.indexValue}`
			}
		/>
		<ul
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "0 2.15em",
				marginTop: "-1em",
				font: "bold 1.2em sans-serif",
			}}
		>
			{data?.map((item) => (
				<li key={item.month}>{item.month}</li>
			))}
		</ul>
	</>
);
