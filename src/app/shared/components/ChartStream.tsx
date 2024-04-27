'use client';

import moment from 'moment';
import { VictoryChart, VictoryAxis, VictoryArea, VictoryLine, VictoryLabel, VictoryLegend } from 'victory';

import { StreamGSTData } from '@/app/dashboard/charts-interfaces';

export function ChartStream({ chartData, title }: { chartData: StreamGSTData[]; title: string }) {
  const streamData: StreamGSTData[] = chartData;
  const lengthAxisX = moment().endOf('month').date();
  const currentMonth = moment().format('MMMM');
  const currentDate = moment().format('MM-DD');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>{title}</div>
      <VictoryChart
        width={400}
        height={400}
        domain={{
          x: [0, lengthAxisX],
          y: [0, 10],
        }}
        scale={{ x: 'time' }}
      >
        <VictoryLabel x={225} y={25} textAnchor="end" text={'Geomagnetic Storms per ' + currentMonth.toString()} />

        <VictoryAxis
          style={{
            grid: { stroke: 'gray' },
            tickLabels: { fontSize: 12, fill: 'white' },
            axis: { stroke: 'transparent' },
            axisLabel: { fill: 'white', fontSize: 18 },
          }}
          label={currentMonth}
          fixLabelOverlap
        />
        <VictoryAxis
          dependentAxis
          style={{ tickLabels: { fontSize: 12, fill: 'white' }, axis: { stroke: 'transparent' } }}
          crossAxis={false}
        />

        <VictoryArea interpolation="monotoneX" data={streamData} style={{ data: { fill: '#8BC34A' } }} />

        <VictoryLine
          style={{
            data: {
              stroke: 'tomato',
              strokeWidth: 3,
            },
          }}
          data={[
            {
              x: currentDate,
              y: 0,
            },
            {
              x: currentDate,
              y: 10,
            },
          ]}
        />
      </VictoryChart>

      <VictoryLegend
        x={100}
        height={20}
        orientation="horizontal"
        gutter={20}
        style={{ labels: { fill: 'white' } }}
        data={[
          { name: 'storm scale', symbol: { fill: '#8BC34A' } },
          { name: 'current date', symbol: { fill: 'tomato' } },
        ]}
      />
    </div>
  );
}
