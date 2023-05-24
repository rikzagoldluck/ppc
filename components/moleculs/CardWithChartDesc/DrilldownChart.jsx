import { useCallback, useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsData from "highcharts/modules/data";
import HighchartsDrilldown from "highcharts/modules/drilldown";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsAccessibilty from "highcharts/modules/accessibility";
import HighchartsReact from "highcharts-react-official";

import Script from "next/script";
import { getProd } from "../../../services/production";
import { BUILDING_MACHINE_LIST, CURING_MACHINE_LIST } from "../../../constants";

// Import 3d Party
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
import "@wojtekmaj/react-datetimerange-picker/dist/DateTimeRangePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

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
    zoomType: "xy",
    type: "column",
  },
  title: {
    align: "left",
    text: "Performance shares",
  },
  subtitle: {
    align: "left",
    text: "Click the columns to view detail and drag to zoom in",
  },
  accessibility: {
    announceNewData: {
      enabled: true,
    },
  },
  xAxis: {
    type: "category",
    labels: {
      style: {
        color: "white",
      },
    },
  },
  yAxis: {
    labels: {
      format: "{value}Pcs",
    },
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
      "<span style={{color: point.color}}>{point.name}</span>: <b>{point.y}</b> Pcs<br/>",
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

const Chart = ({ endPoint, chartFor }) => {
  const [dateRangePickerVal, setDateRangePickerVal] = useState([
    new Date(),
    new Date(),
  ]);

  const [chartOpt, setChartOpt] = useState(opt);
  const [startEndDateProd, setstartEndDateProd] = useState({
    startDate: "",
    endDate: "",
  });

  const [production, setProduction] = useState([]);

  useEffect(() => {
    // setDateRangePickerVal([new Date(), new Date()]);
  }, []);
  const getProductionList = useCallback(async () => {
    const data = await getProd(endPoint);
    setProduction(data);
  }, [getProd]);

  useEffect(() => {
    const productionByYear = production.reduce((acc, curr) => {
      const year = curr.date_shift.split("-")[0].split("/")[2];

      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(curr);
      return acc;
    }, {});

    const chartDataProdcutionByYear = Object.entries(productionByYear).map(
      ([year, objects]) => {
        return { name: year, y: objects.length, drilldown: year };
      }
    );

    const numberToMonth = (number) => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const paddedNumber = number.toString().padStart(2, "0");
      const index = parseInt(paddedNumber) - 1;

      if (index >= 0 && index < 12) {
        return months[index];
      } else {
        return "Invalid month number";
      }
    };

    const productionByMonth = production.reduce((acc, curr) => {
      const [day, month, year] = curr.date_shift.split("-")[0].split("/");
      let monthYear = month + "/" + year;

      if (!acc[monthYear]) {
        acc[monthYear] = [];
      }
      acc[monthYear].push(curr);
      return acc;
    }, {});

    const chartDataProdcutionByMonth = Object.entries(productionByMonth).reduce(
      (arr, [key, value]) => {
        const [month, year] = key.split("/");
        const existingObj = arr.find((obj) => obj.id === year);
        if (existingObj) {
          existingObj.data.push({
            name: numberToMonth(month),
            y: value.length,
            drilldown: `${month}/${year}`,
          });
        } else {
          arr.push({
            name: year,
            id: year,
            data: [
              {
                name: numberToMonth(month),
                y: value.length,
                drilldown: `${month}/${year}`,
              },
            ],
          });
        }

        return arr;
      },
      []
    );

    const productionByDate = production.reduce((acc, curr) => {
      const date = curr.date_shift.split("-")[0];
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(curr);
      return acc;
    }, {});

    const chartDataProdcutionByDate = Object.entries(productionByDate).reduce(
      (arr, [key, value]) => {
        const [day, month, year] = key.split("/");
        const formattedDate = `${month}/${year}`;

        const existingObj = arr.find((obj) => obj.name === formattedDate);
        if (existingObj) {
          existingObj.data.push({
            name: day,
            y: value.length,
            drilldown: `${day}/${month}/${year}`,
          });
        } else {
          // Create a new object for the month and year
          arr.push({
            name: numberToMonth(month),
            id: formattedDate,
            data: [
              {
                name: day,
                y: value.length,
                drilldown: `${day}/${month}/${year}`,
              },
            ],
          });
        }

        return arr;
      },
      []
    );

    const productionByShift = production.reduce((acc, curr) => {
      const [date, shift] = curr.date_shift.split("-");

      if (!acc[date]) {
        acc[date] = { I: 0, II: 0, III: 0 };
      }
      acc[date][shift]++;
      return acc;
    }, {});

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

    const productionByMachine = production.reduce((acc, curr) => {
      const date = curr.date_shift;
      let mcn;

      switch (chartFor) {
        case "curing":
          mcn = curr.cur_mcn.substring(0, 6);
          break;
        case "building":
          mcn = curr.mcn;
          break;
        default:
          break;
      }

      if (!acc[date] && chartFor === "building") {
        acc[date] = BUILDING_MACHINE_LIST;
      } else if (!acc[date] && chartFor === "curing") {
        acc[date] = CURING_MACHINE_LIST;
      }

      acc[date][mcn]++;
      return acc;
    }, {});

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
          chartDataProdcutionByDate[chartDataProdcutionByDate.length - 1].name,
      });
    }

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
          name: "Production",
          type: "column",
          colorByPoint: true,
          // ...chartOpt.series[0],
          data: chartDataProdcutionByYear,
        },
      ],
      drilldown: {
        ...chartOpt.drilldown,
        series: [
          ...chartDataProdcutionByMonth,
          ...chartDataProdcutionByDate,
          ...chartDataProdcutionByShift,
          ...chartDataProdcutionByMachine,
        ],
      },
    });
  }, [production]);

  useEffect(() => {
    console.log(chartOpt);
  }, [chartOpt]);

  useEffect(() => {
    if (dateRangePickerVal[0].getTime() === dateRangePickerVal[1].getTime())
      return;
    getProductionList();
  }, [dateRangePickerVal]);

  return (
    <>
      {/* <p className="text-center">
        <strong>
          Production: {startEndDateProd.startDate} - {startEndDateProd.endDate}
        </strong>
      </p> */}
      {/* <Script strategy="afterInteractive" src="/js/myScript.js"></Script> */}
      <div className="row">
        <div className="col-md-4">
          {/* <div className="form-group"> */}
          <label className="d-block">Select date range</label>

          <DateTimeRangePicker
            onChange={setDateRangePickerVal}
            value={dateRangePickerVal}
            locale="id-ID"
            rangeDivider="s/d"
            disableClock={true}
          />
          {/* </div> */}
        </div>
      </div>
      <div className="chart">
        {production.length > 0 ? (
          <HighchartsReact highcharts={Highcharts} options={chartOpt} />
        ) : (
          <div className="text-center">
            <div className="spinner-border text-white" role="status"></div>
            <h5 className=" text-white">
              Select range date in top left to see the graph, please{" "}
            </h5>
          </div>
        )}
      </div>
    </>
  );
};

export default Chart;
