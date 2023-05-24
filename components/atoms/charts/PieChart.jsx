import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsData from "highcharts/modules/data";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsAccessibilty from "highcharts/modules/accessibility";
import HighchartsReact from "highcharts-react-official";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
  HighchartsData(Highcharts);
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
      //   gridLineColor: "#707073",
      labels: {
        style: {
          color: "#fff",
          fontSize: "12px",
        },
      },
      lineColor: "#707073",
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
      lineColor: "#707073",
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
    type: "pie",
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0,
    },
  },
  title: {
    text: "Quality Shares, Period",
    align: "left",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      depth: 35,
      dataLabels: {
        enabled: true,
        format: "{point.name}: <b>{point.percentage:.1f}%</b>",
        color: "#FFFFFF",
        style: {
          textOutline: false,
        },
      },
      showInLegend: true,
    },
  },
  series: [
    {
      type: "pie",
      name: "Share",
      data: [
        ["Repair", 100],
        {
          name: "OK",
          y: 800,
          sliced: true,
          selected: true,
        },
        ["Scrap", 9],
      ],
    },
  ],
};
const PieChart = () => {
  const [chartOpt, setChartOpt] = useState(opt);
  return <HighchartsReact highcharts={Highcharts} options={chartOpt} />;
};

export default PieChart;
