'use client';

import moment from 'moment';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryScatter,
  VictoryVoronoiContainer,
} from 'victory';

import { StreamFLRData } from '@/app/(pages)/dashboard/space/charts-interfaces';
import { timeLabels } from '@/app/(pages)/dashboard/space/apiDataFormatter';

export function ChartDots({ chartData, title }: { chartData: StreamFLRData[]; title: string }) {
  const lengthAxisX = moment().endOf('month').date();
  const currentMonth = moment().format('MMMM');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>{title}</div>
      <VictoryChart
        width={400}
        height={400}
        domain={{ x: [0, lengthAxisX], y: [0, 24] }}
        scale={{ x: 'time' }}
        containerComponent={<VictoryVoronoiContainer />}
      >
        <VictoryLabel x={225} y={25} textAnchor="end" text={'Solar Flare Events per ' + currentMonth.toString()} />

        <VictoryScatter
          data={chartData}
          style={{
            data: { fill: ({ datum }) => (datum.y !== 0 ? 'tomato' : 'transparent') },
            labels: { fill: 'white', fontSize: 18 },
          }}
          size={({ active, datum }) => (active ? 25 : datum.amount / 3)}
          labels={({ active, datum }) => (active ? datum.class : '')}
        />

        <VictoryAxis
          style={{
            tickLabels: { fill: 'white' },
            axis: { stroke: 'transparent' },
            ticks: { stroke: 'white' },
            axisLabel: { fill: 'white', fontSize: 18 },
          }}
          label={currentMonth}
          fixLabelOverlap
        />
        <VictoryAxis
          tickValues={timeLabels}
          tickFormat={(t) => `${t}:00`}
          dependentAxis
          style={{ tickLabels: { fill: 'white' }, axis: { stroke: 'transparent' } }}
          crossAxis={false}
        />
      </VictoryChart>

      <VictoryLegend
        x={100}
        height={20}
        orientation="horizontal"
        gutter={20}
        style={{ labels: { fill: 'white' } }}
        data={[{ name: 'solar flare event', symbol: { fill: 'tomato' } }]}
      />
    </div>
  );
}
