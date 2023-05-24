import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsData from "highcharts/modules/data";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsAccessibilty from "highcharts/modules/accessibility";
import HighchartsReact from "highcharts-react-official";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
  HighchartsData(Highcharts);
  HighchartsMore(Highcharts);
  HighchartsExportData(Highcharts);
  HighchartsAccessibilty(Highcharts);
  Highcharts.theme = {
    colors: [
      "#8087E8",
      "#A3EDBA",
      "#F19E53",
      "#6699A1",
      "#E1D369",
      "#87B4E7",
      "#DA6D85",
      "#BBBAC5",
    ],

    chart: {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, "#343a40"],
          [1, "#45445d"],
        ],
      },
      style: {
        fontFamily: "Nunito, sans-serif",
      },
    },
    title: {
      style: {
        fontSize: "22px",
        fontWeight: "500",
        color: "#fff",
      },
    },
    subtitle: {
      style: {
        fontSize: "16px",
        fontWeight: "400",
        color: "#fff",
      },
    },
    credits: {
      style: {
        color: "#f0f0f0",
      },
    },
    caption: {
      style: {
        color: "#f0f0f0",
      },
    },
    tooltip: {
      borderWidth: 0,
      backgroundColor: "#f0f0f0",
      shadow: true,
    },
    legend: {
      backgroundColor: "transparent",
      itemStyle: {
        fontWeight: "400",
        fontSize: "12px",
        color: "#fff",
      },
      itemHoverStyle: {
        fontWeight: "700",
        color: "#fff",
      },
    },
    plotOptions: {
      series: {
        dataLabels: {
          color: "#46465C",
          style: {
            fontSize: "13px",
          },
        },
        marker: {
          lineColor: "#333",
        },
      },
      boxplot: {
        fillColor: "#505053",
      },
      candlestick: {
        lineColor: "#000",
        upColor: "#DA6D85",
        upLineColor: "#DA6D85",
      },
      errorbar: {
        color: "white",
      },
      dumbbell: {
        lowColor: "#f0f0f0",
      },
      map: {
        borderColor: "rgba(200, 200, 200, 1)",
        nullColor: "#78758C",
      },
    },
    drilldown: {
      series: {
        lineColor: "#fff",
      },
      activeAxisLabelStyle: {
        color: "#fff",
      },
      activeDataLabelStyle: {
        color: "#fff",
      },
      drillUpButton: {
        theme: {
          fill: "#fff",
        },
      },
      breadcrumbs: {
        buttonTheme: {
          style: {
            color: "#fff",
          },
        },
        style: {
          fontSize: "16px",
          fontWeight: "400",
          color: "#fff",
        },
      },
    },
    xAxis: {
      gridLineColor: "#707073",
      labels: {
        style: {
          color: "#fff",
          fontSize: "12px",
        },
      },
      lineColor: "#ffffff",
      minorGridLineColor: "#505053",
      tickColor: "#707073",
      title: {
        style: {
          color: "#fff",
        },
      },
    },
    yAxis: {
      gridLineColor: "#707073",
      labels: {
        style: {
          color: "#fff",
          fontSize: "12px",
        },
      },
      lineColor: "#ffffff",
      minorGridLineColor: "#505053",
      tickColor: "#707073",
      tickWidth: 1,
      title: {
        style: {
          color: "#fff",
          fontWeight: "300",
        },
      },
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        theme: {
          fill: "#46465C",
          "stroke-width": 1,
          stroke: "#BBBAC5",
          r: 2,
          style: {
            color: "#fff",
          },
          states: {
            hover: {
              fill: "#000",
              "stroke-width": 1,
              stroke: "#f0f0f0",
              style: {
                color: "#fff",
              },
            },

            select: {
              fill: "#000",
              "stroke-width": 1,
              stroke: "#f0f0f0",
              style: {
                color: "#fff",
              },
            },
          },
        },
        verticalAlign: "bottom",
      },
    },
    // scroll charts
    rangeSelector: {
      buttonTheme: {
        fill: "#46465C",
        stroke: "#BBBAC5",
        "stroke-width": 1,
        style: {
          color: "#fff",
        },
        states: {
          hover: {
            fill: "#1f1836",
            style: {
              color: "#fff",
            },
            "stroke-width": 1,
            stroke: "white",
          },
          select: {
            fill: "#1f1836",
            style: {
              color: "#fff",
            },
            "stroke-width": 1,
            stroke: "white",
          },
        },
      },
      inputBoxBorderColor: "#BBBAC5",
      inputStyle: {
        backgroundColor: "#2F2B38",
        color: "#fff",
      },
      labelStyle: {
        color: "#fff",
      },
    },
    navigator: {
      handles: {
        backgroundColor: "#BBBAC5",
        borderColor: "#2F2B38",
      },
      outlineColor: "#CCC",
      maskFill: "rgba(255,255,255,0.1)",
      series: {
        color: "#A3EDBA",
        lineColor: "#A3EDBA",
      },
      xAxis: {
        gridLineColor: "#505053",
      },
    },
    scrollbar: {
      barBackgroundColor: "#BBBAC5",
      barBorderColor: "#808083",
      buttonArrowColor: "#2F2B38",
      buttonBackgroundColor: "#BBBAC5",
      buttonBorderColor: "#2F2B38",
      rifleColor: "#2F2B38",
      trackBackgroundColor: "#78758C",
      trackBorderColor: "#2F2B38",
    },
  };

  Highcharts.setOptions(Highcharts.theme);
}

const opt = {
  chart: {
    type: "waterfall",
    lineColor: "#ffffff",
  },

  title: {
    text: "Highcharts Waterfall",
  },

  xAxis: {
    type: "category",
    // categories: ["Availability", "Performance", "Quality", "OEE"],
  },

  yAxis: {
    title: {
      text: "Percentage",
    },
  },

  legend: {
    enabled: false,
  },

  tooltip: {
    pointFormat: "<b>{point.y:,.2f}</b> %",
  },

  series: [
    {
      upColor: Highcharts === "object" && Highcharts.getOptions().colors[2],
      color: Highcharts === "object" && Highcharts.getOptions().colors[3],
      lineColor: "#ffffff",
      data: [
        {
          name: "Total Time",
          y: 100,
        },
        {
          name: "Planned Down Time",
          y: -23,
          drilldown: "pdt",
        },
        {
          name: "Unplanned Down Time",
          y: -27,
          drilldown: "udt",
        },
        {
          name: "Speed Loss Time",
          y: -14,
          drilldown: "slt",
        },
        {
          name: "Quailty Loss Time",
          y: -36,
          drilldown: "qlt",
        },
      ],
      dataLabels: {
        enabled: true,
        formatter: function () {
          return Highcharts.numberFormat(Math.abs(this.y), -1) + "%";
        },
        style: {
          fontWeight: "bold",
        },
      },
    },
  ],
  drilldown: {
    breadcrumbs: {
      position: {
        align: "right",
      },
    },
    series: [
      {
        name: "Start",
        id: "pdt",
        data: [
          {
            name: "Start",
            y: 100,
          },
        ],
      },
      {
        name: "Unplanned Down Time",
        id: "udt",
        data: [
          {
            name: "Product 1",
            y: 100,
          },
          {
            name: "Product 2",
            y: 50,
          },
          {
            name: "Product 3",
            y: 50,
          },
        ],
      },
      {
        name: "Planned Down Time",
        id: "pdt",
        data: [
          { name: "No Schedule", y: 30, drilldown: "nsch" },
          { name: "No Schedule2", y: 30, drilldown: "aa" },
        ],
      },
    ],
  },

  pointPadding: 0,
};

const WaterFallChart = ({ chartData = [], title }) => {
  const [chartOpt, setChartOpt] = useState(opt);
  const [startEndDateProd, setstartEndDateProd] = useState({
    startDate: "",
    endDate: "",
  });
  useEffect(() => {
    // setChartOpt({
    //   ...chartOpt,
    //   title: {
    //     ...chartOpt.title,
    //     title:
    //       "Production: " +
    //       startEndDateProd.startDate +
    //       " - " +
    //       startEndDateProd.endDate,
    //   },
    //   series: [
    //     {
    //       name: "Green Tyre",
    //       colorByPoint: true,
    //       ...chartOpt.series[0],
    //       data: chartDataProdcutionByDate,
    //     },
    //   ],
    //   drilldown: {
    //     ...chartOpt.drilldown,
    //     series: [
    //       ...chartDataProdcutionByShift,
    //       ...chartDataProdcutionByMachine,
    //     ],
    //   },
    // });
  }, [chartData]);

  return (
    <div className="chart">
      <HighchartsReact highcharts={Highcharts} options={chartOpt} />
    </div>
  );
};

export default WaterFallChart;
