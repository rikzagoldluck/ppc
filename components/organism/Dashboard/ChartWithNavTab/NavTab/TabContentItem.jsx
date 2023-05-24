// Import Atoms
import { DonutChart } from "../../../../atoms/charts/DonutChart";

// Import 3d Party Components
import Highcharts from "highcharts";

import HighchartsData from "highcharts/modules/data";
import HighchartsDrilldown from "highcharts/modules/drilldown";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";

import HighchartsAccessibilty from "highcharts/modules/accessibility";
import { HighchartsReact } from "highcharts-react-official";
import classNames from "classnames";

if (typeof Highcharts === "object") {
  HighchartsData(Highcharts);
  HighchartsDrilldown(Highcharts);
  HighchartsExporting(Highcharts);
  HighchartsExportData(Highcharts);
  HighchartsAccessibilty(Highcharts);
}

// Options for Highcharts
const options = {
  chart: {
    type: "spline",
  },
  title: {
    text: "Actual vs Schedule Production",
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yAxis: {
    title: {
      text: "Production (pcs)",
    },
  },
  tooltip: {
    shared: true,
  },
  series: [
    {
      name: "Actual Production",
      data: [100, 120, 150, 180, 200, 220, 230, 240, 250, 260, 270, 280],
      zIndex: 1,
      marker: {
        fillColor: "white",
        lineWidth: 3,
        lineColor:
          typeof Highcharts === "object" && Highcharts.getOptions().colors[0],
      },
    },
    {
      name: "Schedule Production",
      data: [110, 130, 140, 170, 190, 210, 220, 230, 240, 250, 260, 270],
      zIndex: 1,
      marker: {
        fillColor: "white",
        lineWidth: 3,
        lineColor:
          typeof Highcharts === "object" && Highcharts.getOptions().colors[1],
      },
    },
    {
      name: "Variance",
      data: [-10, -10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      zIndex: 0,
      marker: {
        fillColor:
          typeof Highcharts === "object" && Highcharts.getOptions().colors[2],
        lineWidth: 3,
        lineColor:
          typeof Highcharts === "object" && Highcharts.getOptions().colors[2],
      },
    },
  ],
  plotOptions: {
    series: {
      cursor: "pointer",
      point: {
        events: {
          click: function () {
            var drilldown = this.drilldown;
            if (drilldown) {
              Highcharts.chart("container", {
                chart: {
                  type: "spline",
                },
                title: {
                  text: drilldown.name,
                },
                xAxis: {
                  categories: drilldown.categories,
                },
                yAxis: {
                  title: {
                    text: "Production (units)",
                  },
                },
                series: drilldown.series,
              });
            }
          },
        },
      },
    },
  },
  drilldown: {
    series: [
      {
        name: "Jan",
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [20, 30, 40, 10],
      },
      {
        name: "Feb",
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [30, 20, 50, 20],
      },
      {
        name: "Mar",
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [40, 50, 60, 0],
      },
      {
        name: "Apr",
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [50, 70, 60, 0],
      },
      {
        name: "May",
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [60, 80, 70, 0],
      },
      {
        name: "Jun",
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [70, 90, 80, 0],
      },
      {
        name: "Jul",
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [80, 100, 90, 0],
      },
      {
        name: "Aug",
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [90, 110, 100, 0],
      },
      {
        name: "Sep",
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [100, 120, 110, 0],
      },
      {
        name: "Oct",
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [110, 130, 120, 0],
      },
      {
        name: "Nov",
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [120, 140, 130, 0],
      },
      {
        name: "Dec",
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        data: [130, 150, 140, 0],
      },
    ],
  },
};

const TabContentItem = ({ content, tab, active, chartData }) => {
  const classActive = classNames("tab-pane fade row", {
    active,
    show: active,
  });
  return (
    <div
      className={classActive}
      id={"custom-tabs-two-" + tab}
      role="tabpanel"
      aria-labelledby={"custom-tabs-two-" + tab + "-tab"}
    >
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-8">
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
          <div className="col-md-4">
            <DonutChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContentItem;
