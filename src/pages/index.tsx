import React, { useState, useEffect } from "react";

const newChartData = [
  {
    name: "Check-in",
    data: [
      { x: "Jan 2023", y: 500 },
      { x: "Feb 2023", y: 700 },
      { x: "Mar 2023", y: 900 },
      { x: "Apr 2023", y: 400 },
      { x: "May 2023", y: 200 },
      { x: "Jun 2023", y: 800 },
      { x: "Jul 2023", y: 1100 },
      { x: "Aug 2023", y: 1800 },
      { x: "Sep 2023", y: 800 },
      { x: "Oct 2023", y: 400 },
      { x: "Nov 2023", y: 200 },
      { x: "Dec 2023", y: 400 },
      { x: "Jan 2024", y: 1000 },
      { x: "Feb 2024", y: 800 },
    ],
  },
  {
    name: "App User",
    data: [
      { x: "Jan 2023", y: 1300 },
      { x: "Feb 2023", y: 1900 },
      { x: "Mar 2023", y: 1300 },
      { x: "Apr 2023", y: 1700 },
      { x: "May 2023", y: 1100 },
      { x: "Jun 2023", y: 1600 },
      { x: "Jul 2023", y: 1500 },
      { x: "Aug 2023", y: 1400 },
      { x: "Sep 2023", y: 1900 },
      { x: "Oct 2023", y: 1500 },
      { x: "Nov 2023", y: 2000 },
      { x: "Dec 2023", y: 1500 },
      { x: "Jan 2024", y: 1900 },
      { x: "Feb 2024", y: 1200 },
    ],
  },
  {
    name: "New Added WiFi",
    data: [
      { x: "Jan 2023", y: 2000 },
      { x: "Feb 2023", y: 2500 },
      { x: "Mar 2023", y: 2000 },
      { x: "Apr 2023", y: 2900 },
      { x: "May 2023", y: 2000 },
      { x: "Jun 2023", y: 2800 },
      { x: "Jul 2023", y: 2700 },
      { x: "Aug 2023", y: 2800 },
      { x: "Sep 2023", y: 2000 },
      { x: "Oct 2023", y: 2500 },
      { x: "Nov 2023", y: 2500 },
      { x: "Dec 2023", y: 2700 },
      { x: "Jan 2024", y: 2000 },
      { x: "Feb 2024", y: 2300 },
    ],
  },
  {
    name: "Issued mPoints",
    data: [
      { x: "Jan 2023", y: 3800 },
      { x: "Feb 2023", y: 3000 },
      { x: "Mar 2023", y: 3200 },
      { x: "Apr 2023", y: 3000 },
      { x: "May 2023", y: 3800 },
      { x: "Jun 2023", y: 3000 },
      { x: "Jul 2023", y: 3400 },
      { x: "Aug 2023", y: 3000 },
      { x: "Sep 2023", y: 3400 },
      { x: "Oct 2023", y: 3200 },
      { x: "Nov 2023", y: 3400 },
      { x: "Dec 2023", y: 3700 },
      { x: "Jan 2024", y: 3500 },
      { x: "Feb 2024", y: 3200 },
    ],
  },
];

const Home: React.FC = () => {
  const [chartOptions, setChartOptions] = useState<any | null>(null);
  const [chartSeries, setChartSeries] = useState(newChartData);

  const calculateSum = () => {
    return chartSeries.map((series) =>
      series.data.reduce(
        (seriesTotal, dataPoint) => seriesTotal + dataPoint.y,
        0
      )
    );
  };

  const calculateSumText = () => {
    const sums = calculateSum();
    return sums
      .map((sum, index) => `${chartSeries[index].name} Total: ${sum}`)
      .join(" , ");
  };

  const showSeriesSum = () => {
    const sums = calculateSum();
    return sums.map((sum, index) =>
      <div key={index} className="bg-[#ffffff10] opacity-90 px-4 md:px-7 py-2 md:py-3 rounded-lg border border-[#ffffff15]">
        <p className="text-xl text-[#e3e3e3] font-semibold tracking-wide"><span className="text-xs opacity-55 block font-light">{chartSeries[index].name}</span><span className="text-xs align-text-top font-light mr-2">Total</span>
          <span className="text-xs align-text-top">$</span>{sum}</p>
      </div>
    )
  }


  useEffect(() => {
    import("react-apexcharts").then(({ default: ReactApexChart }) => {
      const newChartOptions = {
        series: [
          {
            name: "Team A",
            data: [
              { x: "Jan 2023", y: 500 },
              { x: "Feb 2023", y: 700 },
              { x: "Mar 2023", y: 900 },
              { x: "Apr 2023", y: 400 },
              { x: "May 2023", y: 200 },
              { x: "Jun 2023", y: 800 },
              { x: "Jul 2023", y: 1100 },
              { x: "Aug 2023", y: 1800 },
              { x: "Sep 2023", y: 800 },
              { x: "Oct 2023", y: 400 },
              { x: "Nov 2023", y: 200 },
              { x: "Dec 2023", y: 400 },
              { x: "Jan 2024", y: 1000 },
              { x: "Feb 2024", y: 800 },
            ],
          },
          {
            name: "Team B",
            data: [
              { x: "Jan 2023", y: 1300 },
              { x: "Feb 2023", y: 1900 },
              { x: "Mar 2023", y: 1300 },
              { x: "Apr 2023", y: 1700 },
              { x: "May 2023", y: 1100 },
              { x: "Jun 2023", y: 1600 },
              { x: "Jul 2023", y: 1500 },
              { x: "Aug 2023", y: 1400 },
              { x: "Sep 2023", y: 1900 },
              { x: "Oct 2023", y: 1500 },
              { x: "Nov 2023", y: 2000 },
              { x: "Dec 2023", y: 1500 },
              { x: "Jan 2024", y: 1900 },
              { x: "Feb 2024", y: 1200 },
            ],
          },
          {
            name: "Team C",
            data: [
              { x: "Jan 2023", y: 2000 },
              { x: "Feb 2023", y: 2500 },
              { x: "Mar 2023", y: 2000 },
              { x: "Apr 2023", y: 2900 },
              { x: "May 2023", y: 2000 },
              { x: "Jun 2023", y: 2800 },
              { x: "Jul 2023", y: 2700 },
              { x: "Aug 2023", y: 2800 },
              { x: "Sep 2023", y: 2000 },
              { x: "Oct 2023", y: 2500 },
              { x: "Nov 2023", y: 2500 },
              { x: "Dec 2023", y: 2700 },
              { x: "Jan 2024", y: 2000 },
              { x: "Feb 2024", y: 2300 },
            ],
          },
          {
            name: "Team D",
            data: [
              { x: "Jan 2023", y: 3800 },
              { x: "Feb 2023", y: 3000 },
              { x: "Mar 2023", y: 3200 },
              { x: "Apr 2023", y: 3000 },
              { x: "May 2023", y: 3800 },
              { x: "Jun 2023", y: 3000 },
              { x: "Jul 2023", y: 3400 },
              { x: "Aug 2023", y: 3000 },
              { x: "Sep 2023", y: 3400 },
              { x: "Oct 2023", y: 3200 },
              { x: "Nov 2023", y: 3400 },
              { x: "Dec 2023", y: 3700 },
              { x: "Jan 2024", y: 3500 },
              { x: "Feb 2024", y: 3200 },
            ],
          },
        ],
        chart: {
          height: 600,
          type: "rangeArea",
          animations: {
            speed: 600,
          },
          stacked: false,
          toolbar: {
            tools: {
              pan: false,
              selection: true,
            },
            autoSelected: "zoom",
          },
        },
        xaxis: {
          type: "datetime",
          labels: {
            style: {
              colors: "#ffffff60",
            },
            datetimeFormatter: {
              year: "yyyy",
              month: "MMM 'yy",
            },
          },
          axisBorder: {
            show: true,
            color: "#78909C",
            height: 1,
            width: "100%",
            offsetX: 0,
            offsetY: 0,
          },
          tooltip: {
            enabled: true,
          },
        },
        yaxis: {
          lines: {
            colors: "#ffffff33",
            opacity: 0.2,
          },
          labels: {
            style: {
              colors: "#ffffff60",
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#4EE29B", "#00AEF5", "#F27935", "#B192FF"],
        opacity: [1, 1, 1, 1],
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.65,
            opacityTo: 0.05,
            stops: [-30, 250],
          },
        },
        forecastDataPoints: {
          count: 2,
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        legend: {
          show: true,
          position: "bottom",
          horizontalAlign: "right",
          customLegendItems: ["Check-in", "App User", "New Added WiFi", "Issued mPoints"],
          inverseOrder: false,
          offsetY: 7,
          labels: {
            colors: "#ffffff90",
          },
        },
        grid: {
          show: true,
          borderColor: "#ffffff20",
          yasis: {
            lines: {
              show: true,
            },
          },
        },
        // title: {
        //   text: "Check In Growth Quantity",
        //   style: {
        //     color: "#fff",
        //     fontSize: "20px",
        //     fontWeight: 600,
        //   },
        // },
        // subtitle: {
        //   text: `${calculateSumText()}`,
        //   margin: 14,
        //   style: {
        //     fontSize: "14px",
        //     color: "RGB(78,171,240,0.8)",
        //     fontFamily: "Inter",
        //     fontWeight: "light",
        //   },
        // },
        markers: {
          size: 3,
          strokeWidth: 1,
          strokeColor: "#01012795",
          hover: {
            sizeOffset: 3,
            size: 5,
          },
        },
        onItemClick: {
          toggleDataSeries: true,
        },
        onItemHover: {
          highlightDataSeries: true,
        },
        noData: {
          text: "Loading...",
        },
      };
      setChartOptions(newChartOptions);
    });
  }, [chartSeries]);

  if (typeof window === "undefined" || !chartOptions) {
    return <div>Loading...</div>;
  }

  const ReactApexChart = require("react-apexcharts").default;

  return (
    <div className="bg-[#010127] mx-auto px-4 md:px-24 py-2 md:py-10">
      <p className="text-xl font-bold mx-4">Mix Charts Quatity</p>
      <div className="block xl:flex xl:justify-between my-4 mx-4">
        <div className="flex gap-1 md:gap-3">
          {showSeriesSum()}
        </div>
        <div className="flex items-end mt-3 xl:mt-0 gap-2 text-xs tracking-wide">
          <a href="" className="bg-[#ffffff40] hover:bg-[#ffffff60] rounded-md text-white opacity-70 px-3 py-1">Day</a>
          <a href="" className="bg-[#ffffff40] hover:bg-[#ffffff60] rounded-md text-white opacity-70 px-3 py-1">3 Day</a>
          <a href="" className="bg-[#ffffff40] hover:bg-[#ffffff60] rounded-md text-white opacity-70 px-3 py-1">Week</a>
          <a href="" className="bg-[#ffffff40] hover:bg-[#ffffff60] rounded-md text-white opacity-70 px-3 py-1">3 Week</a>
          <a href="" className="bg-[#ffffff40] hover:bg-[#ffffff60] rounded-md text-white opacity-70 px-3 py-1">Month</a>
          <a href="" className="bg-[#ffffff40] hover:bg-[#ffffff60] rounded-md text-white opacity-70 px-3 py-1">3 Month</a>
          <a href="" className="bg-[#ffffff40] hover:bg-[#ffffff60] rounded-md text-white opacity-70 px-3 py-1">Year</a>
        </div>
      </div>
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="area"
        height={500}
      />
    </div>
  );
};

export default Home;
