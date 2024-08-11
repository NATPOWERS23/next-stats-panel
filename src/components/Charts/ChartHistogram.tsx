"use client";

import moment from "moment";
import {
  VictoryAxis,
  VictoryChart,
  VictoryHistogram,
  VictoryLabel,
  VictoryLegend,
  VictoryStack,
  VictoryVoronoiContainer,
} from "victory";

import type { StreamFLRClassData } from "@/app/crm/dashboard/charts-interfaces";

export function ChartHistogram({ chartData, title }: { chartData: StreamFLRClassData; title: string }) {
  const colors = ["#f95d6a", "#ff7c43", "#ffa600"];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div>{title}</div>

      <VictoryChart
        height={400}
        width={400}
        scale={{ x: "time" }}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) =>
              datum.binnedData[0]
                ? `${datum.binnedData[0].classType}: ${
                    datum.binnedData.length
                  } (${datum.binnedData[0].day.toLocaleString("default", {
                    month: "long",
                  })})`
                : null
            }
          />
        }
      >
        <VictoryLabel x={225} y={25} textAnchor="end" text={`Solar Flares Events to in ${moment().format("YYYY")}`} />

        <VictoryStack colorScale={colors}>
          {Object.entries(chartData).map(([key, dataGroup]: Array<string | any>) => {
            return (
              <VictoryHistogram
                style={{
                  data: {
                    stroke: "hsl(355, 10%, 25%)",
                    data: { strokeWidth: 0 },
                  },
                }}
                cornerRadius={5}
                data={dataGroup}
                x="day"
                key={key}
              />
            );
          })}
        </VictoryStack>

        <VictoryAxis
          tickCount={12}
          tickFormat={(date) => date.toLocaleString("default", { month: "short" })}
          style={sharedAxisStyles}
        />

        <VictoryAxis dependentAxis label="Total # of Flares" style={sharedAxisStyles} />
      </VictoryChart>

      <VictoryLegend
        x={100}
        height={20}
        orientation="horizontal"
        gutter={20}
        style={{ labels: { fill: "white" } }}
        data={[
          { name: "M type", symbol: { fill: colors[0] } },
          { name: "C type", symbol: { fill: colors[1] } },
          { name: "X type", symbol: { fill: colors[2] } },
        ]}
      />
    </div>
  );
}

const sharedAxisStyles = {
  tickLabels: {
    fill: "white",
    fontSize: 13,
  },
  axisLabel: {
    fill: "white",
    padding: 39,
    fontSize: 13,
    fontStyle: "italic",
  },
};
