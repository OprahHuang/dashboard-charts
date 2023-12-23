import dynamic from "next/dynamic";
const ResponsiveLine = dynamic(() => import("@nivo/line").then(m => m.ResponsiveLine), { ssr: false });
import React from 'react'

const jsonData = [
  {
    id: 'chart1-month',
    data: [
      { x: '2023-04', y: 100 },
      { x: '2023-04', y: 180 },
      { x: '2023-05', y: 213 },
      { x: '2023-06', y: 217 },
      { x: '2023-07', y: 331 },
      { x: '2023-08', y: 547 },
      { x: '2023-09', y: 1340 },
      { x: '2023-10', y: 3031 },
      { x: '2023-11', y: 4178 },
      { x: '2023-12', y: 6865 },
      { x: '2023-01', y: 7200 },
      { x: '2023-02', y: 7500 },
    ]
  },
  {
    id: 'chart1-week',
    data: [
      { x: 'Week 18', y: 35 },
      { x: 'Week 19', y: 88 },
      { x: 'Week 20', y: 34 },
      { x: 'Week 21', y: 35 },
      { x: 'Week 22', y: 40 },
      { x: 'Week 23', y: 42 },
      { x: 'Week 24', y: 73 },
      { x: 'Week 25', y: 44 },
      { x: 'Week 26', y: 46 },
      { x: 'Week 27', y: 51 },
      { x: 'Week 28', y: 95 },
      { x: 'Week 29', y: 76 },
      { x: 'Week 30', y: 92 },
      { x: 'Week 31', y: 82 },
      { x: 'Week 32', y: 59 },
      { x: 'Week 33', y: 56 },
      { x: 'Week 34', y: 149 },
      { x: 'Week 35', y: 295 },
      { x: 'Week 36', y: 270 },
      { x: 'Week 37', y: 271 },
      { x: 'Week 38', y: 296 },
      { x: 'Week 39', y: 473 },
      { x: 'Week 40', y: 442 },
      { x: 'Week 41', y: 441 },
      { x: 'Week 42', y: 501 },
      { x: 'Week 43', y: 1178 },
      { x: 'Week 44', y: 1276 },
      { x: 'Week 45', y: 995 },
      { x: 'Week 46', y: 893 },
      { x: 'Week 47', y: 895 },
      { x: 'Week 48', y: 843 },
      { x: 'Week 49', y: 1067 },
      { x: 'Week 50', y: 1409 },
      { x: 'Week 51', y: 2470 },
    ]
  }
]

const jsonData1 = [
  {
    id: 'chart1-week',
    data: [
      { x: 'Week 18', y: 35 },
      { x: 'Week 19', y: 88 },
      { x: 'Week 20', y: 34 },
      { x: 'Week 21', y: 35 },
      { x: 'Week 22', y: 40 },
      { x: 'Week 23', y: 42 },
      { x: 'Week 24', y: 73 },
      { x: 'Week 25', y: 44 },
      { x: 'Week 26', y: 46 },
      { x: 'Week 27', y: 51 },
      { x: 'Week 28', y: 95 },
      { x: 'Week 29', y: 76 },
      { x: 'Week 30', y: 92 },
      { x: 'Week 31', y: 82 },
      { x: 'Week 32', y: 59 },
      { x: 'Week 33', y: 56 },
      { x: 'Week 34', y: 149 },
      { x: 'Week 35', y: 295 },
      { x: 'Week 36', y: 270 },
      { x: 'Week 37', y: 271 },
      { x: 'Week 38', y: 296 },
      { x: 'Week 39', y: 473 },
      { x: 'Week 40', y: 442 },
      { x: 'Week 41', y: 441 },
      { x: 'Week 42', y: 501 },
      { x: 'Week 43', y: 1178 },
      { x: 'Week 44', y: 1276 },
      { x: 'Week 45', y: 995 },
      { x: 'Week 46', y: 893 },
      { x: 'Week 47', y: 895 },
      { x: 'Week 48', y: 843 },
      { x: 'Week 49', y: 1067 },
      { x: 'Week 50', y: 1409 },
      { x: 'Week 51', y: 2470 },
    ]
  }
]

const Home = () => (
  <div>
    test
    <ResponsiveLine
      data={jsonData1}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'linear' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 36,
        legendPosition: 'middle'
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle'
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      enableArea={true}
      areaBaselineValue={5}
      areaOpacity={0.25}
      useMesh={true}
      legends={[
        {
          anchor: 'right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  </div>
)

export default Home