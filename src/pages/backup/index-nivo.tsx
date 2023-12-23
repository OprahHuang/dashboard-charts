import React from "react";
import { ResponsiveLine } from "@nivo/line";


const data =
[
  {
    "id": "japan",
    "color": "hsl(250, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 198
      },
      {
        "x": "helicopter",
        "y": 22
      },
      {
        "x": "boat",
        "y": 267
      },
      {
        "x": "train",
        "y": 123
      },
      {
        "x": "subway",
        "y": 215
      },
      {
        "x": "bus",
        "y": 128
      },
      {
        "x": "car",
        "y": 272
      },
      {
        "x": "moto",
        "y": 57
      },
      {
        "x": "bicycle",
        "y": 177
      },
      {
        "x": "horse",
        "y": 293
      },
      {
        "x": "skateboard",
        "y": 213
      },
      {
        "x": "others",
        "y": 197
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(21, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 104
      },
      {
        "x": "helicopter",
        "y": 159
      },
      {
        "x": "boat",
        "y": 144
      },
      {
        "x": "train",
        "y": 257
      },
      {
        "x": "subway",
        "y": 97
      },
      {
        "x": "bus",
        "y": 11
      },
      {
        "x": "car",
        "y": 97
      },
      {
        "x": "moto",
        "y": 233
      },
      {
        "x": "bicycle",
        "y": 241
      },
      {
        "x": "horse",
        "y": 221
      },
      {
        "x": "skateboard",
        "y": 183
      },
      {
        "x": "others",
        "y": 228
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(224, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 243
      },
      {
        "x": "helicopter",
        "y": 206
      },
      {
        "x": "boat",
        "y": 174
      },
      {
        "x": "train",
        "y": 274
      },
      {
        "x": "subway",
        "y": 82
      },
      {
        "x": "bus",
        "y": 192
      },
      {
        "x": "car",
        "y": 148
      },
      {
        "x": "moto",
        "y": 275
      },
      {
        "x": "bicycle",
        "y": 124
      },
      {
        "x": "horse",
        "y": 100
      },
      {
        "x": "skateboard",
        "y": 47
      },
      {
        "x": "others",
        "y": 57
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(232, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 289
      },
      {
        "x": "helicopter",
        "y": 237
      },
      {
        "x": "boat",
        "y": 282
      },
      {
        "x": "train",
        "y": 58
      },
      {
        "x": "subway",
        "y": 211
      },
      {
        "x": "bus",
        "y": 144
      },
      {
        "x": "car",
        "y": 260
      },
      {
        "x": "moto",
        "y": 6
      },
      {
        "x": "bicycle",
        "y": 37
      },
      {
        "x": "horse",
        "y": 266
      },
      {
        "x": "skateboard",
        "y": 14
      },
      {
        "x": "others",
        "y": 288
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(259, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 269
      },
      {
        "x": "helicopter",
        "y": 198
      },
      {
        "x": "boat",
        "y": 253
      },
      {
        "x": "train",
        "y": 246
      },
      {
        "x": "subway",
        "y": 128
      },
      {
        "x": "bus",
        "y": 87
      },
      {
        "x": "car",
        "y": 169
      },
      {
        "x": "moto",
        "y": 148
      },
      {
        "x": "bicycle",
        "y": 264
      },
      {
        "x": "horse",
        "y": 32
      },
      {
        "x": "skateboard",
        "y": 230
      },
      {
        "x": "others",
        "y": 287
      }
    ]
  }
]

function Home() {

  return (
    <div className="w-full p-6 mx-auto bg-white">
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={{ scheme: "set3" }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        enableArea={true}
        areaOpacity={0.55}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default Home;
