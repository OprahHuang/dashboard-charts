import { VictoryChart, VictoryTheme, VictoryArea, VictoryZoomContainer, VictoryScatter, VictoryAxis, VictoryCursorContainer, VictoryTooltip } from 'victory';
import React from 'react'

const Inter = { fontFamily: "'Inter', sans-serif" };

const jsonData = [
    {
        id: 'chart1Month',
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
        id: 'chart1Week',
        data: [
            { x: 18, y: 35 },
            { x: 19, y: 88 },
            { x: 20, y: 34 },
            { x: 21, y: 35 },
            { x: 22, y: 40 },
            { x: 23, y: 42 },
            { x: 24, y: 73 },
            { x: 25, y: 44 },
            { x: 26, y: 46 },
            { x: 27, y: 51 },
            { x: 28, y: 95 },
            { x: 29, y: 76 },
            { x: 30, y: 92 },
            { x: 31, y: 82 },
            { x: 32, y: 59 },
            { x: 33, y: 56 },
            { x: 34, y: 149 },
            { x: 35, y: 295 },
            { x: 36, y: 270 },
            { x: 37, y: 271 },
            { x: 38, y: 296 },
            { x: 39, y: 473 },
            { x: 40, y: 442 },
            { x: 41, y: 441 },
            { x: 42, y: 501 },
            { x: 43, y: 1178 },
            { x: 44, y: 1276 },
            { x: 45, y: 995 },
            { x: 46, y: 893 },
            { x: 47, y: 895 },
            { x: 48, y: 843 },
            { x: 49, y: 1067 },
            { x: 50, y: 1409 },
            { x: 51, y: 2470 },
        ]
    }
]

const jsonDataMonth = [
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

const jsonData1 = [
    { x: 18, y: 35 },
    { x: 19, y: 88 },
    { x: 20, y: 34 },
    { x: 21, y: 35 },
    { x: 22, y: 40 },
    { x: 23, y: 42 },
    { x: 24, y: 73 },
    { x: 25, y: 44 },
    { x: 26, y: 46 },
    { x: 27, y: 51 },
    { x: 28, y: 95 },
    { x: 29, y: 76 },
    { x: 30, y: 92 },
    { x: 31, y: 82 },
    { x: 32, y: 59 },
    { x: 33, y: 56 },
    { x: 34, y: 149 },
    { x: 35, y: 295 },
    { x: 36, y: 270 },
    { x: 37, y: 271 },
    { x: 38, y: 296 },
    { x: 39, y: 473 },
    { x: 40, y: 442 },
    { x: 41, y: 441 },
    { x: 42, y: 501 },
    { x: 43, y: 1178 },
    { x: 44, y: 1276 },
    { x: 45, y: 995 },
    { x: 46, y: 893 },
    { x: 47, y: 895 },
    { x: 48, y: 843 },
    { x: 49, y: 1067 },
    { x: 50, y: 1409 },
    { x: 51, y: 2470 },
]

const Home = () => (
    <div className='w-full p-4 mx-auto bg-white'>
        <p className='text-center opacity-50 w-full mt-10 font-semibold'>Accumulated number of App User</p>
        <VictoryChart
            width={800}
            height={300}
            padding={{ right: 40, left: 40, top: 0, bottom: 20}}
            theme={VictoryTheme.material}
            containerComponent={<VictoryZoomContainer />}
        >
            <VictoryAxis dependentAxis
                style={{
                    tickLabels: { fontSize: 8, padding: 5 }
                }}
            />
            <VictoryAxis
                tickFormat={(t) => t}
                style={{
                    tickLabels: { fontSize: 8, padding: 5 },
                }}
                standalone={false}

            />
            <VictoryArea
                style={{
                    data: { stroke: "teal", fill: "lightblue", fillOpacity: 0.5 },
                    parent: { border: "1px solid #ccc" },
                }}
                data={jsonDataMonth}
                scale={{ x: "linear", y: "linear" }}
            />
            <VictoryScatter
                samples={5}
                data={jsonDataMonth}
                style={{
                    parent: {
                        border: "1px solid #ccc"
                    },
                    data: { fill: "teal", fillOpacity: 0.9, stroke: "white", strokeWidth: 1 }
                }}
                size={2}
                labelComponent={<VictoryTooltip />}
                containerComponent={
                    <VictoryCursorContainer
                        cursorLabel={({ datum }) => `${datum.x.toPrecision(2)}, ${datum.y.toPrecision(2)}`}
                    />
                }
            />
        </VictoryChart>
    </div>
)

export default Home