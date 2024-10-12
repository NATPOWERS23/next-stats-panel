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
			margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
			padding={0}
			valueScale={{ type: "linear" }}
			indexScale={{ type: "band", round: true }}
			colors={["Transparent", "Transparent"]}
			enableGridY={false}
			defs={[
				{
					id: "lines",
					type: "patternLines",
					background: "inherit",
					color: "#fff",
					rotation: -45,
					lineWidth: 8,
					spacing: 20,
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
			borderWidth={2}
			borderColor="#fff"
			borderRadius={25}
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
				marginTop: "-2.5em",
				font: "bold 1.2em sans-serif",
			}}
		>
			{data?.map((item) => (
				<li key={item.month}>{item.month}</li>
			))}
		</ul>
	</>
);
