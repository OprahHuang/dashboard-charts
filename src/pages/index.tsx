import React, { useState, useEffect } from "react";

const Home: React.FC = () => {
  const [chartOptions, setChartOptions] = useState<any | null>(null); // Adjust the type accordingly
  const [chartSeries, setChartSeries] = useState([
    {
      name: "Chart Month",
      data: [
        [new Date("2023-01-01").getTime(), 31],
        [new Date("2023-02-01").getTime(), 40],
        [new Date("2023-03-01").getTime(), 28],
        [new Date("2023-04-01").getTime(), 51],
        [new Date("2023-05-01").getTime(), 42],
        [new Date("2023-06-01").getTime(), 60],
        [new Date("2023-07-01").getTime(), 38],
        [new Date("2023-08-01").getTime(), 57],
        [new Date("2023-09-01").getTime(), 61],
        [new Date("2023-10-01").getTime(), 58],
        [new Date("2023-11-01").getTime(), 63],
        [new Date("2023-12-01").getTime(), 77],
      ],
    },
  ]);

  useEffect(() => {
    import("react-apexcharts").then(({ default: ReactApexChart }) => {
      setChartOptions({
        chart: {
          id: "area-chart",
          toolbar: {
            show: true,
            tools: {
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
            },
            autoSelected: "zoom",
          },
        },
        xaxis: {
          type: "datetime",
          labels: {
            style: {
                colors: '#747580',
                fontFamily: 'Inter'
              }
          }
        },
        yaxis: {
          labels: {
            formatter: (value: number) => value.toFixed(2),
            style: {
                colors: '#747580',
                fontFamily: 'Inter'
            }
          },
        },
        responsive: [
          {
            breakpoint: 1000,
            options: {
              chart: {
                width: "100%",
              },
            },
          },
        ],
        markers: {
          size: [3, 9],
          colors: ['#605BFF'],
          hover: {
            size: 5
          }
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 2,
          colors: ['#605BFF']
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            gradientToColors: ["#605BFF"],
            inverseColors: true,
            opacityFrom: 0.75,
            opacityTo: 0,
            stops: [30, 150],
          },
        },
        series: chartSeries, // Set the series property
      });
    });
  }, [chartSeries]);

  if (typeof window === "undefined" || !chartOptions) {
    return <div>Loading...</div>;
  }

  const ReactApexChart = require("react-apexcharts").default;

  return (
    <div className="bg-[#2A2D3E] p-5">
        <p>Check In Growth Quantity</p>
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="area"
        height={400}
      />
    </div>
  );
};

export default Home;