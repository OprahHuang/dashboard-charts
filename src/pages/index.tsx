import React, { useState, useEffect } from "react"


interface ChartData {
    country: string;
    data: { date: string; visits: number | null }[];
}

const jsonData: ChartData[] = [
    {
        country: "Germany",
        data: [
            { date: "2023-01", visits: 120 },
            { date: "2023-02", visits: 150 },
            { date: "2023-03", visits: 180 },
            { date: "2023-04", visits: 200 },
            { date: "2023-05", visits: 230 },
            { date: "2023-06", visits: 250 },
            { date: "2023-07", visits: 280 },
            { date: "2023-08", visits: 300 },
            { date: "2023-09", visits: 330 },
            { date: "2023-10", visits: 350 },
            { date: "2023-11", visits: 380 },
            { date: "2023-12", visits: 400 },
            { date: "2024-01", visits: 450 }, // Placeholder for guessed visiting number
        ],
    },
    {
        country: "Japan",
        data: [
            { date: "2023-01", visits: 80 },
            { date: "2023-02", visits: 90 },
            { date: "2023-03", visits: 100 },
            { date: "2023-04", visits: 110 },
            { date: "2023-05", visits: 120 },
            { date: "2023-06", visits: 130 },
            { date: "2023-07", visits: 140 },
            { date: "2023-08", visits: 150 },
            { date: "2023-09", visits: 160 },
            { date: "2023-10", visits: 170 },
            { date: "2023-11", visits: 180 },
            { date: "2023-12", visits: 190 },
            { date: "2024-01", visits: 240 }, // Placeholder for guessed visiting number
        ],
    },
    {
        country: "Canada",
        data: [
            { date: "2023-01", visits: 50 },
            { date: "2023-02", visits: 55 },
            { date: "2023-03", visits: 60 },
            { date: "2023-04", visits: 65 },
            { date: "2023-05", visits: 70 },
            { date: "2023-06", visits: 75 },
            { date: "2023-07", visits: 80 },
            { date: "2023-08", visits: 85 },
            { date: "2023-09", visits: 90 },
            { date: "2023-10", visits: 95 },
            { date: "2023-11", visits: 100 },
            { date: "2023-12", visits: 105 },
            { date: "2024-01", visits: 145 }, // Placeholder for guessed visiting number
        ],
    },
    {
        country: "U.K.",
        data: [
            { date: "2023-01", visits: 200 },
            { date: "2023-02", visits: 210 },
            { date: "2023-03", visits: 220 },
            { date: "2023-04", visits: 230 },
            { date: "2023-05", visits: 240 },
            { date: "2023-06", visits: 250 },
            { date: "2023-07", visits: 260 },
            { date: "2023-08", visits: 270 },
            { date: "2023-09", visits: 280 },
            { date: "2023-10", visits: 290 },
            { date: "2023-11", visits: 300 },
            { date: "2023-12", visits: 310 },
            { date: "2024-01", visits: 365 }, // Placeholder for guessed visiting number
        ],
    },
];


const Home: React.FC = () => {
    const [chartOptions, setChartOptions] = useState<any | null>(null); // Adjust the type accordingly
    const [chartSeries, setChartSeries] = useState(jsonData);;

    useEffect(() => {
        import("react-apexcharts").then(({ default: ReactApexChart }) => {
            const updatedChartSeries = chartSeries.map((series, seriesIndex) => ({
                name: series.country,
                data: series.data.map((point, index) => ({
                  x: new Date(point.date).getTime(),
                  y: point.visits,
                  strokeDashArray:
                    seriesIndex === chartSeries.length - 1 && index === series.data.length - 1
                      ? [5, 5]
                      : undefined,
                })),
              }));

              
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
                            colors: "#747580",
                            fontFamily: "Inter",
                        },
                    },
                },
                yaxis: {
                    labels: {
                        formatter: (value: number) => (value !== undefined ? value.toFixed(2) : ""),
                        style: {
                            colors: "#747580",
                            fontFamily: "Inter",
                        },
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
                    size: [3, 5],
                    colors: ["#605BFF", "#008000", "#FF0000", "#FFA500"],
                    hover: {
                        size: 5,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: "smooth",
                    width: 2,
                    colors: ["#605BFF", "#228822", "#FF0000", "#FFA500"],
                },
                series: updatedChartSeries,
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
                tooltip: {
                    x: {
                        format: 'dd MMM yyyy',
                    },
                },
                crosshairs: {
                    show: true,
                    position: 'back',
                    stroke: {
                        color: '#b6b6b6',
                        width: 1,
                        dashArray: 3,
                    },
                },
                annotations: {
                    position: 'front',
                    yaxis: [
                        {
                            y: 3000,
                            strokeDashArray: 5,
                            label: {
                                position: 'left',
                                borderColor: 'transparent',
                                textAnchor: 'middle',
                                offsetY: -10,
                                offsetX: 50,
                                style: {
                                    color: '#D0D4D9',
                                    background: "transparent",
                                },
                                text: ''
                            }
                        }
                    ]
                }
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