import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsData from "highcharts/modules/data";
import HighchartsDrilldown from "highcharts/modules/drilldown";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsAccessibilty from "highcharts/modules/accessibility";
import HighchartsReact from "highcharts-react-official";
import classNames from "classnames";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
  HighchartsData(Highcharts);
  HighchartsDrilldown(Highcharts);
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
        fontFamily: "IBM Plex Sans, sans-serif",
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
        color: "#F0F0F3",
      },
      activeDataLabelStyle: {
        color: "#F0F0F3",
      },
      drillUpButton: {
        theme: {
          fill: "#fff",
        },
      },
      breadcrumbs: {
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
    type: "column",
  },
  title: {
    align: "left",
    text: "Performance shares",
  },
  subtitle: {
    align: "left",
    text: "Click the columns to view detail. Source: TBR Barcode System",
  },
  accessibility: {
    announceNewData: {
      enabled: true,
    },
  },
  xAxis: {
    type: "category",
  },
  yAxis: {
    title: {
      text: "Total Production",
    },
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
      },
    },
  },

  tooltip: {
    headerFormat: "<span style={{font-size:11}}>{series.name}</span><br>",
    pointFormat:
      "<span style={{color: point.color}}>{point.name}</span>: <b>{point.y}</b> of total<br/>",
  },

  series: [
    {
      name: "",
      colorByPoint: true,
      data: [],
    },
  ],
  drilldown: {
    breadcrumbs: {
      position: {
        align: "right",
      },
    },
    series: [{}],
  },
};

const Chart = ({ chartData = [], title, tableData }) => {
  const [chartOpt, setChartOpt] = useState(opt);
  const [startEndDateProd, setstartEndDateProd] = useState({
    startDate: "",
    endDate: "",
  });
  useEffect(() => {
    const productionByDate = chartData.reduce((acc, curr) => {
      const date = curr.date_shift.split("-")[0];
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(curr);
      return acc;
    }, {});

    const productionByMachine = chartData.reduce((acc, curr) => {
      const date = curr.date_shift;
      let mcn;
      switch (title) {
        case "Curing Performance Recap":
          mcn = curr.cur_mcn;
          break;
        case "Building Performance Recap":
          mcn = curr.mcn;
          break;
        default:
          break;
      }

      if (!acc[date] && title === "Building Performance Recap") {
        acc[date] = {
          RTBA1: 0,

          RTBA2: 0,

          RTBA3: 0,

          RTBA4: 0,

          RTBB1: 0,

          RTBB2: 0,

          RTBB3: 0,

          RTBB4: 0,

          RTBC1: 0,

          RTBC2: 0,

          RTBC3: 0,

          RTBC4: 0,

          RTBD1: 0,

          RTBD2: 0,

          RTBD3: 0,

          RTBD4: 0,
        };
      } else if (!acc[date] && title === "Curing Performance Recap") {
        acc[date] = {
          RTCA01L: 0,
          RTCA01R: 0,
          RTCA02L: 0,
          RTCA02R: 0,
          RTCA03L: 0,
          RTCA03R: 0,
          RTCA04L: 0,
          RTCA04R: 0,
          RTCA05L: 0,
          RTCA05R: 0,
          RTCA06L: 0,
          RTCA06R: 0,
          RTCA07L: 0,
          RTCA07R: 0,
          RTCA08L: 0,
          RTCA08R: 0,
          RTCA09L: 0,
          RTCA09R: 0,
          RTCB01L: 0,
          RTCB01R: 0,
          RTCB02L: 0,
          RTCB02R: 0,
          RTCB03L: 0,
          RTCB03R: 0,
          RTCB04L: 0,
          RTCB04R: 0,
          RTCB05L: 0,
          RTCB05R: 0,
          RTCB06L: 0,
          RTCB06R: 0,
          RTCB07L: 0,
          RTCB07R: 0,
          RTCB08L: 0,
          RTCB08R: 0,
          RTCB09L: 0,
          RTCB09R: 0,
          RTCC01L: 0,
          RTCC01R: 0,
          RTCC02L: 0,
          RTCC02R: 0,
          RTCC03L: 0,
          RTCC03R: 0,
          RTCC04L: 0,
          RTCC04R: 0,
          RTCC05L: 0,
          RTCC05R: 0,
          RTCC06L: 0,
          RTCC06R: 0,
          RTCC07L: 0,
          RTCC07R: 0,
          RTCC08L: 0,
          RTCC08R: 0,
          RTCC09L: 0,
          RTCC09R: 0,
          RTCD01L: 0,
          RTCD01R: 0,
          RTCD02L: 0,
          RTCD02R: 0,
          RTCD03L: 0,
          RTCD03R: 0,
          RTCD04L: 0,
          RTCD04R: 0,
          RTCD05L: 0,
          RTCD05R: 0,
          RTCD06L: 0,
          RTCD06R: 0,
          RTCD07L: 0,
          RTCD07R: 0,
          RTCD08L: 0,
          RTCD08R: 0,
          RTCD09L: 0,
          RTCD09R: 0,
          RTCE01L: 0,
          RTCE01R: 0,
          RTCE02L: 0,
          RTCE02R: 0,
          RTCE03L: 0,
          RTCE03R: 0,
          RTCE04L: 0,
          RTCE04R: 0,
          RTCE05L: 0,
          RTCE05R: 0,
          RTCE06L: 0,
          RTCE06R: 0,
          RTCE07L: 0,
          RTCE07R: 0,
          RTCE08L: 0,
          RTCE08R: 0,
          RTCE09L: 0,
          RTCE09R: 0,
          RTCF01L: 0,
          RTCF01R: 0,
          RTCF02L: 0,
          RTCF02R: 0,
          RTCF03L: 0,
          RTCF03R: 0,
          RTCF04L: 0,
          RTCF04R: 0,
          RTCF05L: 0,
          RTCF05R: 0,
          RTCF06L: 0,
          RTCF06R: 0,
          RTCF07L: 0,
          RTCF07R: 0,
          RTCF08L: 0,
          RTCF08R: 0,
          RTCF09L: 0,
          RTCF09R: 0,
          RTCG01L: 0,
          RTCG01R: 0,
          RTCG02L: 0,
          RTCG02R: 0,
          RTCG03L: 0,
          RTCG03R: 0,
          RTCG04L: 0,
          RTCG04R: 0,
          RTCG05L: 0,
          RTCG05R: 0,
          RTCG06L: 0,
          RTCG06R: 0,
          RTCG07L: 0,
          RTCG07R: 0,
          RTCG08L: 0,
          RTCG08R: 0,
          RTCG09L: 0,
          RTCG09R: 0,
          RTCG01L: 0,
          RTCG01R: 0,
          RTCG02L: 0,
          RTCG02R: 0,
          RTCG03L: 0,
          RTCG03R: 0,
          RTCG04L: 0,
          RTCG04R: 0,
          RTCG05L: 0,
          RTCG05R: 0,
          RTCG06L: 0,
          RTCG06R: 0,
          RTCG07L: 0,
          RTCG07R: 0,
          RTCG08L: 0,
          RTCG08R: 0,
          RTCG09L: 0,
          RTCG09R: 0,
          RTCH01L: 0,
          RTCH01R: 0,
          RTCH02L: 0,
          RTCH02R: 0,
          RTCH03L: 0,
          RTCH03R: 0,
          RTCH04L: 0,
          RTCH04R: 0,
          RTCH05L: 0,
          RTCH05R: 0,
          RTCH06L: 0,
          RTCH06R: 0,
          RTCH07L: 0,
          RTCH07R: 0,
          RTCH08L: 0,
          RTCH08R: 0,
          RTCH09L: 0,
          RTCH09R: 0,
        };
      }

      acc[date][mcn]++;
      return acc;
    }, {});

    const productionByShift = chartData.reduce((acc, curr) => {
      const date = curr.date_shift.split("-")[0].trim();
      const shift = curr.date_shift.split("-")[1].trim();

      if (!acc[date]) {
        acc[date] = { I: 0, II: 0, III: 0 };
      }
      acc[date][shift]++;
      return acc;
    }, {});

    const chartDataProdcutionByDate = Object.entries(productionByDate).map(
      ([date, objects]) => {
        return { name: date, y: objects.length, drilldown: date };
      }
    );

    const chartDataProdcutionByMachine = Object.entries(
      productionByMachine
    ).map(([dateshift, machines]) => {
      const data = Object.entries(machines).map(([machine, total]) => {
        return { name: machine, y: total };
      });
      return { name: dateshift, id: dateshift, data };
    });
    if (chartDataProdcutionByDate.length > 0) {
      setstartEndDateProd({
        startDate: chartDataProdcutionByDate[0].name,
        endDate:
          chartDataProdcutionByDate[chartDataProdcutionByDate.length - 1]
            .name && "",
      });
    }

    const chartDataProdcutionByShift = Object.entries(productionByShift).map(
      ([date, shifts]) => {
        const data = Object.entries(shifts).map(([shift, total]) => {
          return {
            name: "Shift " + shift,
            y: total,
            drilldown: date + "-" + shift,
          };
        });

        return { name: date, id: date, data };
      }
    );

    setChartOpt({
      ...chartOpt,
      title: {
        ...chartOpt.title,
        title:
          "Production: " +
          startEndDateProd.startDate +
          " - " +
          startEndDateProd.endDate,
      },
      series: [
        {
          name: "Green Tyre",
          colorByPoint: true,
          ...chartOpt.series[0],
          data: chartDataProdcutionByDate,
        },
      ],
      drilldown: {
        ...chartOpt.drilldown,
        series: [
          ...chartDataProdcutionByShift,
          ...chartDataProdcutionByMachine,
        ],
      },
    });
  }, [chartData]);

  const chartClass = classNames({
    "col-md-8": tableData,
    "col-md-12": tableData,
  });
  return (
    <div className={chartClass}>
      <p className="text-center">
        <strong>
          Production: {startEndDateProd.startDate} - {startEndDateProd.endDate}
        </strong>
      </p>

      <div className="chart">
        <HighchartsReact highcharts={Highcharts} options={chartOpt} />
      </div>
    </div>
  );
};

export default Chart;
