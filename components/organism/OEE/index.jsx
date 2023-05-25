import React, { useCallback, useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsData from "highcharts/modules/data";
import HighchartsDrilldown from "highcharts/modules/drilldown";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsAccessibilty from "highcharts/modules/accessibility";
import HighchartsReact from "highcharts-react-official";
import Script from "next/script";
import Head from "next/head";
// import $ from "jquery";
import { getMcnStop } from "../../../services/oee";
// import { DateTimePicker } from "react-tempusdominus-bootstrap";
// import "datatables.net-responsive-bs4";

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
    zoomType: "xy",
    type: "column",
  },
  title: {
    align: "left",
    text: "OEE Breakdown",
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
    type: "Period",
    labels: {
      style: {
        color: "white",
      },
    },
  },
  yAxis: {
    labels: {
      format: "{value} %",
    },
    title: {
      text: "Total Percentage",
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

// END HIGHCHARTS SETUP OPTION
const index = () => {
  const [chartOpt, setChartOpt] = useState(opt);
  const [ready, setReady] = useState(false);

  // ALGORITMA FETCHING DAN PARSING DATA MACHINE STOP UNTUK OEE
  // FETCHING DATA BERDASARKAN PILIHAN PERIODICITY DAN SECTION
  const [mcnStop, setmcnStop] = useState([]);
  //  getMcnStop("Building").then((res) => console.log(res));

  // HITUNG TOTAL DOWNTIME PER ITEM LOSS TIME DALAM MENIT
  // BUAT ARRAY OF OBJECT YANG BERISI DATA BERDASARKAN PERIOD DAN PERSENTASE TOTAL DOWNTIME PER ITEM LOSS TIME
  // (Total Downtime per Item Loss time / Period in minutes) * 100

  useEffect(() => {
    // $(document).ready(function () {
    const table = $("#myTable").DataTable({
      dom: "Bfrtip",
      responsive: true,
      autoFill: true,
      buttons: [
        "copy",
        "csv",
        "excel",
        {
          extend: "pdfHtml5",
          orientation: "landscape",
          pageSize: "A4",
        },
        "print",
        "colvis",
      ],
    });

    $(table.column(0).nodes()).addClass("highlight");

    // DATE RANGE
    // });
    // (Total Downtime per Item Loss time / Period in minutes) * 100
  }, []);

  return (
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 mr-2">
            {/* <HighchartsReact highcharts={Highcharts} options={chartOpt} /> */}
          </div>
          <div className="col-md-12 mt-5">
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <label>Minimal</label>
                  <select
                    className="form-control select2bs4"
                    style={{ width: "100%" }}
                  >
                    <option selected="selected">Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label>Minimal</label>
                  <select
                    className="form-control select2bs4"
                    style={{ width: "100%" }}
                  >
                    <option selected="selected">Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
              </div>
              <div className="col-4">{/* <DateTimePicker /> */}</div>
            </div>

            <table
              id="myTable"
              className="table table-striped table-bordered text-center align-middle table-hover"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th
                    colSpan={1}
                    rowSpan={3}
                    align="center"
                    style={{ verticalAlign: "middle" }}
                  >
                    Period
                  </th>
                  <th colSpan={12}>Category / Item loss time</th>
                  <th
                    colSpan={1}
                    rowSpan={3}
                    align="center"
                    style={{ verticalAlign: "middle" }}
                  >
                    Total Loss Time
                  </th>
                </tr>
                <tr>
                  <th colSpan={1}>Closing Time</th>
                  <th colSpan={4}>Planned Down Time</th>
                  <th colSpan={4}>Unplanned Down Time</th>
                  <th colSpan={2}>Speed Loss Time</th>
                  <th colSpan={1}>Quality Loss Time</th>
                </tr>
                <tr>
                  <th>Planned Closing Time</th>
                  <th>No Schedule</th>
                  <th>Planned Maintenance</th>
                  <th>Rest, Shalat, Toilet</th>
                  <th>Test and Development</th>
                  <th>Set Up</th>
                  <th>Utility & PLN Trip</th>
                  <th>Machine Breakdowns</th>
                  <th>Material Shortage</th>
                  <th>Lower Efficiency</th>
                  <th>Delay Production</th>
                  <th>Quality Loss</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2023</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>2024</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
