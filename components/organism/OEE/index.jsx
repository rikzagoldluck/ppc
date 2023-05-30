import React, { forwardRef, useState } from "react";
import LossTime from "./LossTime";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Highcharts from "highcharts";
import HighchartsData from "highcharts/modules/data";
import HighchartsDrilldown from "highcharts/modules/drilldown";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsAccessibilty from "highcharts/modules/accessibility";
import { HighchartsReact } from "highcharts-react-official";

// START HIGHCHARTS SETUP OPTION
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
    type: "column",
  },
  title: {
    text: "OEE for Capacity Losses per Period",
  },
  xAxis: {
    categories: [],
    crosshair: true,
  },
  yAxis: [
    {
      id: "total_oee",
      min: 0,
      title: {
        text: "OEE Percentage (%)",
      },
    },
    {
      title: {
        id: "oee_target",
        text: "OEE Target (%)",
      },

      opposite: true,
    },
  ],
  tooltip: {
    headerFormat: "<span style={{fontSize:15px}}>{point.key}</span><table>",
    pointFormat:
      "<tr><td style={{color:series.color,padding:0}}>{series.name}: </td>" +
      "<td style={{padding:0}}><b>{point.y:.2f} %</b></td></tr>",
    footerFormat: "</table>",
    shared: true,
    useHTML: true,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 1,
    },
  },

  series: [],
};
export default function index() {
  const [selectedPeriodicity, setSelectedPeriodicity] =
    useState("pilih-periode");
  const [selectedSection, setSelectedSection] = useState("pilih-section");
  const [startDate, setStartDate] = useState(new Date());
  const [chartOpt, setChartOpt] = useState(opt);

  const DateRangeCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="btn btn-dark w-100 text-left"
      onClick={onClick}
      ref={ref}
    >
      <i className="fas fa-calendar-alt"></i> {value}
    </button>
  ));

  const addMonths = (date, months) => {
    let d = date.getDate();
    date.setMonth(date.getMonth() + +months);
    if (date.getDate() != d) {
      date.setDate(0);
    }
    return date;
  };

  return (
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 mr-2 mb-3">
            <HighchartsReact highcharts={Highcharts} options={chartOpt} />
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <label>Section</label>
                  <select
                    className="form-control select2bs4"
                    style={{ width: "100%" }}
                    onChange={(e) => setSelectedSection(e.target.value)}
                    value={selectedSection}
                  >
                    <option value="pilih-section">Pilih Section</option>
                    <option value="Material">Material</option>
                    <option value="Building">Building</option>
                    <option value="Curing">Curing</option>
                  </select>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label>Period</label>
                  <select
                    className="form-control select2bs4"
                    style={{ width: "100%" }}
                    onChange={(e) => setSelectedPeriodicity(e.target.value)}
                    value={selectedPeriodicity}
                  >
                    <option value="pilih-periode">Pilih Periode</option>
                    <option value="yearly">Yearly</option>
                    <option value="monthly">Monthly</option>
                    <option value="daily">Daily</option>
                  </select>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label>Periodicity</label>
                  {selectedPeriodicity === "monthly" && (
                    <ReactDatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showYearPicker
                      dateFormat="yyyy"
                      customInput={<DateRangeCustomInput />}
                      maxDate={addMonths(new Date(), 0)}
                    />
                  )}{" "}
                  {selectedPeriodicity === "daily" && (
                    <ReactDatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="MM/yyyy"
                      showMonthYearPicker
                      customInput={<DateRangeCustomInput />}
                      maxDate={addMonths(new Date(), 0)}
                    />
                  )}
                  {(selectedPeriodicity === "yearly" ||
                    selectedPeriodicity === "pilih-periode") && (
                    <ReactDatePicker
                      disabled
                      placeholderText="This can use in monthly or daily"
                      customInput={<DateRangeCustomInput />}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <LossTime
            selectedSection={selectedSection}
            startDate={startDate}
            selectedPeriodicity={selectedPeriodicity}
            chartOptProps={(opt) => setChartOpt(opt)}
          />
        </div>
      </div>
    </section>
  );
}
