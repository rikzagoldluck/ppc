import React, {
  forwardRef,
  use,
  useCallback,
  useEffect,
  useState,
} from "react";
import { getMcnStop } from "../../../services/oee";
import { getProd } from "../../../services/production";
import { ITEM_LOSS_CATEGORY, OEE_TARGET } from "../../../constants";
import { useRouter } from "next/router";
import Link from "next/link";

// END HIGHCHARTS SETUP OPTION
const LossTime = ({
  selectedSection,
  selectedPeriodicity,
  startDate,
  chartOptProps,
}) => {
  const [chartOpt, setChartOpt] = useState({});
  const [choosenDate, setchoosenDate] = useState("");
  const [periodInMinute, setPeriodInMinute] = useState(0);
  const [mcnStopResult, setMcnStopResult] = useState([]);
  const [prodResult, setProdResult] = useState([]);
  const [mcnStop, setmcnStop] = useState([]);
  const [prod, setProd] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (!$.fn.DataTable.isDataTable("table.oee")) {
      $(document).ready(function () {
        setTimeout(() => {
          const table = $("table.oee").DataTable({
            dom: "Blfrtip",
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

          $("#table-losstime thead th").on("click", function () {
            let theadColText = $(this).text();
            if (
              theadColText === "Period" ||
              theadColText === "Closing Time" ||
              theadColText === "Planned Down Time" ||
              theadColText === "Category / Item loss time" ||
              theadColText === "Unplanned Down Time" ||
              theadColText === "Speed Loss Time" ||
              theadColText === "Quality Loss Time"
            )
              return;

            router.push(
              "/oee/breakdown/" + theadColText.toLowerCase().replace(/\s/g, "-")
            );
          });
        }, 1000);
      });
    }

    // (Total Downtime per Item Loss time / Period in minutes) * 100
  }, []);

  // FETCHING DATA BERDASARKAN PILIHAN PERIODICITY DAN SECTION
  useEffect(() => {
    if (
      selectedSection === "pilih-section" ||
      selectedPeriodicity === "pilih-periode"
    ) {
      return;
    }

    let endPoint = "";
    if (selectedSection === "Curing") {
      endPoint = "/prodcure";
    } else if (selectedSection === "Building") {
      endPoint = "/prodbld";
    } else if (selectedSection === "Material") {
      endPoint = "/prodmat";
    }

    // KETIKA PERIODICITY YEARLY MAKA TAMPILKAN SEMUA DATA BERDASARKAN SECTION
    if (selectedPeriodicity === "yearly") {
      setPeriodInMinute(518400);
      getMcnStop(selectedSection).then((res) => {
        setmcnStop(res);
      });

      getProd(endPoint).then((res) => {
        setProd(res);
      });
    }
    // KETIKA PERIODICITY MONTHLY MAKA ENABLE INPUT YEAR DAN TAMPILKAN DATA BERDASARKAN SECTION DAN YEAR
    if (selectedPeriodicity === "monthly") {
      getMcnStop(selectedSection).then((res) => {
        setmcnStop(res);
      });
      getProd(endPoint).then((res) => {
        setProd(res);
      });
      setPeriodInMinute(43200);
    }
    // KETIKA PERIODICITY DAILY MAKA ENABLE INPUT YEAR DAN MONTH DAN TAMPILKAN DATA BERDASARKAN SECTION DAN YEAR DAN MONTH
    if (selectedPeriodicity === "daily") {
      getMcnStop(selectedSection).then((res) => {
        setmcnStop(res);
      });
      getProd(endPoint).then((res) => {
        setProd(res);
      });

      setPeriodInMinute(1440);
    }
  }, [selectedSection, selectedPeriodicity, startDate]);

  // LOSS TIME
  useEffect(() => {
    if (mcnStop.length === 0) return;

    let mcnStopFilteredByPeriod = [];
    let mcnStopSeparatedByPeriod = [];
    // MONTHLY PERIODICITY
    if (selectedPeriodicity === "monthly") {
      mcnStopFilteredByPeriod = mcnStop.filter((val) => {
        const year = val.tstop.split(" ")[0].split("/")[2];
        return year === startDate.getFullYear().toString();
      }); // Mengembalikan array of object
      setchoosenDate(startDate.getFullYear().toString());

      mcnStopSeparatedByPeriod = mcnStopFilteredByPeriod.reduce((acc, curr) => {
        const [day, month, year] = curr.tstop.split(" ")[0].split("/");
        let monthYear = month + "/" + year;

        if (!acc[monthYear]) {
          acc[monthYear] = [];
        }
        acc[monthYear].push(curr);
        return acc; // Mengembalikan object dengan key period dan value array of object data
      }, {});
    }
    // DAILY PERIODICITY
    else if (selectedPeriodicity === "daily") {
      mcnStopFilteredByPeriod = mcnStop.filter((val) => {
        let [day, month, year] = val.tstop.split(" ")[0].split("/");
        let monthInt = startDate.getMonth() + 1;
        let monthString = monthInt.toString();

        if (month.length === 2 && month.charAt(0) === "0") {
          month = month.charAt(1);
        }

        let date = monthString + "/" + startDate.getFullYear().toString();
        setchoosenDate(date);
        return date === month + "/" + year;
      });

      mcnStopSeparatedByPeriod = mcnStopFilteredByPeriod.reduce((acc, curr) => {
        const date = curr.tstop.split(" ")[0].split("/");
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(curr);
        return acc;
      }, {});
      // YEARLY PERIODICITY
    }
    // YEARLY PERIODICITY
    else if (selectedPeriodicity === "yearly") {
      const mcnStopFiltered1 = mcnStop;
      setchoosenDate("Holistic Data");
      mcnStopSeparatedByPeriod = mcnStopFiltered1.reduce((acc, curr) => {
        const year = curr.tstop.split(" ")[0].split("/")[2];

        if (!acc[year]) {
          acc[year] = [];
        }
        acc[year].push(curr);
        return acc; // Mengembalikan object dengan key period dan value array of object data
      }, {});
    }

    // HITUNG TOTAL DOWNTIME PER ITEM LOSS TIME DALAM MENIT
    let totalDowntimePerItemLossTime = {};
    for (const [key, value] of Object.entries(mcnStopSeparatedByPeriod)) {
      totalDowntimePerItemLossTime[key] = value.reduce((acc, cur) => {
        if (!acc[cur.category_losses]) {
          acc[cur.category_losses] = 0.0;
        }
        acc[cur.category_losses] += parseFloat(cur.dlm_menit.replace(",", "."));
        return acc;
      }, {});
    } // Mengembalikan object dengan key period dan value object dengan key category_losses dan value total downtime

    let output = [];

    for (let key in totalDowntimePerItemLossTime) {
      let period = key;
      let entry = totalDowntimePerItemLossTime[key];
      let periodObject = {
        period: period,
        planned_closing: 0,
        no_sch: 0,
        planned_maintain: 0,
        rest: 0,
        test_dev: 0,
        "SET UP": 0,
        util: 0,
        mc_breakdown: 0,
        matl_shortage: 0,
        low_eff: 0,
        "DELAY PROD": 0,
        quality_loss: 0,
        total: 0,
      };

      let total = 0;

      for (let subKey in entry) {
        let value = entry[subKey];
        periodObject[subKey] = (value / periodInMinute) * 100;
        if (typeof value === "number") {
          total += (value / periodInMinute) * 100;
        }
      }
      periodObject.total = total;
      output.push(periodObject);
    }

    setMcnStopResult(output);

    // DATA YANG HARUS DIHASILKAN AGAR BISA DI RENDER KE TABLE
    /*
      [
        {period : 'year/month/day', planned_closing : 0, no_sch : 0, planned_maintain : 0, rest: 0, test_dev : 0, setup : 0, util: 0, mc_breakdown : 0, matl_shortage: 0, low_eff : 0, delay_prod : quality_loss: 0, total : 0 }
      ]
    */
    // (Total Downtime per Item Loss time / Period in minutes) * 100
  }, [mcnStop]);

  // UP TIME
  useEffect(() => {
    if (prod.length == 0) return;

    let prodFilteredByPeriod = [];
    let prodSeparatedByPeriod = [];

    if (selectedPeriodicity === "monthly") {
      prodFilteredByPeriod = prod.filter((val) => {
        const year = val.date_shift.split("-")[0].split("/")[2];
        return year === startDate.getFullYear().toString();
      }); // Mengembalikan array of object

      prodSeparatedByPeriod = prodFilteredByPeriod.reduce((acc, curr) => {
        const [day, month, year] = curr.date_shift.split("-")[0].split("/");
        let monthYear = month + "/" + year;

        if (!acc[monthYear]) {
          acc[monthYear] = [];
        }
        acc[monthYear].push(curr);
        return acc; // Mengembalikan object dengan key period dan value array of object data
      }, {});
    }
    // DAILY PERIODICITY
    else if (selectedPeriodicity === "daily") {
      prodFilteredByPeriod = prod.filter((val) => {
        let [day, month, year] = val.date_shift.split("-")[0].split("/");
        let monthInt = startDate.getMonth() + 1;
        let monthString = monthInt.toString();

        if (month.length === 2 && month.charAt(0) === "0") {
          month = month.charAt(1);
        }

        return (
          monthString + "/" + startDate.getFullYear().toString() ===
          month + "/" + year
        );
      });

      prodSeparatedByPeriod = prodFilteredByPeriod.reduce((acc, curr) => {
        const date = curr.date_shift.split("-")[0].split("/");
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(curr);
        return acc;
      }, {});
      // YEARLY PERIODICITY
    }
    // YEARLY PERIODICITY
    else if (selectedPeriodicity === "yearly") {
      const prodFiltered1 = prod;

      prodSeparatedByPeriod = prodFiltered1.reduce((acc, curr) => {
        const year = curr.date_shift.split("-")[0].split("/")[2];

        if (!acc[year]) {
          acc[year] = [];
        }
        acc[year].push(curr);
        return acc; // Mengembalikan object dengan key period dan value array of object data
      }, {});
    }

    let output = [];

    for (let key in prodSeparatedByPeriod) {
      let period = key;
      let entry = prodSeparatedByPeriod[key];
      let act_output = prodSeparatedByPeriod[key].length;
      let periodObject = {
        period: period,
        act_output,
        tot_time: 0,
        wt_speed: 0,
        useful_time: 0,
        tot_mcn: 0,
      };

      let cur_mcn_total = new Set();
      for (let subKey in entry) {
        periodObject.tot_time += parseInt(entry[subKey].ct);
        let machine = entry[subKey].cur_mcn.replace(/[LR]$/, ""); // Remove trailing L or R
        cur_mcn_total.add(machine);
      }
      periodObject.tot_mcn = cur_mcn_total.size;
      periodObject.wt_speed = periodObject.tot_time / act_output;
      periodObject.useful_time = (periodObject.tot_time / periodInMinute) * 100;
      output.push(periodObject);
    }

    setProdResult(output);
  }, [prod]);

  // LOSS TIME
  useEffect(() => {
    if ($.fn.DataTable.isDataTable("#table-losstime")) {
      const t = $("#table-losstime").DataTable();
      t.clear().draw(false);
      mcnStopResult.length > 0 &&
        mcnStopResult.map((item, index) => {
          if (selectedPeriodicity === "daily") {
            let datePart = item.period.split(",");
            item.period =
              datePart[0] + "/" + datePart[1] + "/" + datePart[2].slice(-2);
          }
          t.row
            .add([
              item.period,
              item.planned_closing.toFixed(2) + "%",
              item.no_sch.toFixed(2) + "%",
              item.planned_maintain.toFixed(2) + "%",
              item.rest.toFixed(2) + "%",
              item.test_dev.toFixed(2) + "%",
              item["SET UP"].toFixed(2) + "%",
              item.util.toFixed(2) + "%",
              item.mc_breakdown.toFixed(2) + "%",
              item.matl_shortage.toFixed(2) + "%",
              item.low_eff.toFixed(2) + "%",
              item["DELAY PROD"].toFixed(2) + "%",
              item.quality_loss.toFixed(2) + "%",
              item.total.toFixed(2) + "%",
            ])
            .draw(false);
        });

      $(t.column(0).nodes()).addClass("highlight");
    }
  }, [mcnStopResult]);

  // UP TIME
  useEffect(() => {
    if ($.fn.DataTable.isDataTable("#table-uptime")) {
      const t = $("#table-uptime").DataTable();
      t.clear().draw(false);
      prodResult.length > 0 &&
        prodResult.map((item, index) => {
          if (selectedPeriodicity === "daily") {
            let datePart = item.period.split(",");
            item.period =
              datePart[0] + "/" + datePart[1] + "/" + datePart[2].slice(-2);
          }
          t.row
            .add([
              item.period,
              item.tot_mcn,
              item.tot_time,
              item.act_output,
              item.wt_speed,
              item.useful_time.toFixed(2) + "%",
            ])
            .draw(false);
        });

      $(t.column(0).nodes()).addClass("highlight");
    }
  }, [prodResult]);

  // OEE
  useEffect(() => {
    if ($.fn.DataTable.isDataTable("#table-oee")) {
      const t = $("#table-oee").DataTable();
      t.clear().draw(false);

      mcnStopResult.length > 0 &&
        mcnStopResult.map((item, index) => {
          let plantClosingTime = item.planned_closing + item.no_sch;
          let plannedDownTime =
            item.planned_maintain + item.rest + item.test_dev;
          let unplannedDownTime =
            item["SET UP"] + item.util + item.mc_breakdown + item.matl_shortage;
          let machineOperatingTime =
            100 - (plantClosingTime + plannedDownTime + unplannedDownTime);

          let plannedProductionTime =
            100 - (plantClosingTime + plannedDownTime);

          let speedLosses = item.low_eff + item["DELAY PROD"];
          let qualityLosses = item.quality_loss;

          let netOperatingTime =
            100 -
            (plantClosingTime +
              plannedDownTime +
              unplannedDownTime +
              speedLosses);

          let productiveTime =
            100 -
            (plantClosingTime +
              plannedDownTime +
              unplannedDownTime +
              speedLosses +
              qualityLosses);

          let availabilty =
            (machineOperatingTime / plannedProductionTime) * 100;
          let performance = (netOperatingTime / machineOperatingTime) * 100;
          let quality = (productiveTime / netOperatingTime) * 100;

          let oee = (availabilty * performance * quality) / 10000;

          prodResult.length > 0 &&
            prodResult.map((prod) => {
              if (item.period === prod.period) {
                let teep = prod.useful_time.toFixed(2) + "%";
                t.row
                  .add([
                    item.period,
                    availabilty.toFixed(2) + "%",
                    performance.toFixed(2) + "%",
                    quality.toFixed(2) + "%",
                    oee.toFixed(2) + "%",
                    teep,
                  ])
                  .draw(false);
              }
            });
        });

      $(t.column(0).nodes()).addClass("highlight");

      function getOEEForChart(table) {
        let periodForChart = [];

        // Get the row indexes for the rows displayed under the current search
        var indexes = table.rows({ search: "applied" }).indexes().toArray();

        let ava = { name: "Availabilty", data: [] };
        let per = { name: "Performance", data: [] };
        let qua = { name: "Quality", data: [] };
        let oee = { name: "OEE", data: [] };
        let teep = { name: "TEEP", data: [] };

        for (var i = 0; i < indexes.length; i++) {
          var period = table.cell(indexes[i], 0).data();
          periodForChart.push(period);
          let availabilty = parseFloat(table.cell(indexes[i], 1).data());
          let performance = parseFloat(table.cell(indexes[i], 2).data());
          let quality = parseFloat(table.cell(indexes[i], 3).data());
          let oeeData = parseFloat(table.cell(indexes[i], 4).data());
          let teepData = parseFloat(table.cell(indexes[i], 5).data());
          ava.data.push(availabilty);
          per.data.push(performance);
          qua.data.push(quality);
          oee.data.push(oeeData);
          teep.data.push(teepData);
        }

        let targetOee = {
          name: "OEE Target",
          type: "line",
          yAxis: 1,

          data: Array.from({ length: periodForChart.length }, () => OEE_TARGET),
          marker: {
            enabled: true,
          },

          tooltip: {
            pointFormat: " - OEE Target: {point.y} %",
          },
        };

        return {
          periodForChart,
          oeeContainer: [ava, per, qua, oee, teep, targetOee],
        };
      }
      let chartData = getOEEForChart(t);

      setChartOpt({
        ...chartOpt,
        xAxis: {
          categories: chartData.periodForChart,
          crosshair: true,
        },
        series: chartData.oeeContainer,
      });

      t.on("draw", function () {
        let chartData1 = getOEEForChart(t);
        setChartOpt({
          ...chartOpt,
          xAxis: {
            categories: chartData1.periodForChart,
            crosshair: true,
          },
          series: chartData1.oeeContainer,
        });
      });
    }
  }, [prodResult, mcnStopResult]);

  useEffect(() => {
    if (chartOpt === {}) return;

    chartOptProps(chartOpt);
  }, [chartOpt]);

  return (
    <>
      <div className="col-md-12">
        <h4 className="text-center mt-3">
          Loss Times{" "}
          {`${selectedSection} - ${selectedPeriodicity} in ${choosenDate}`}
        </h4>

        <table
          id="table-losstime"
          className="oee table table-striped table-bordered text-center align-middle table-hover"
          // style={{ width: "100%" }}
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
              {ITEM_LOSS_CATEGORY.map((item, index) => (
                <th key={index}>
                  <Link
                    href={`/oee/breakdown/${
                      item.id
                    }/${selectedPeriodicity}/${choosenDate.replace("/", "-")}`}
                    className="text-decoration-none text-white"
                  >
                    {item.name}
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <hr />
        <h4 className="text-center">
          Up Time{" "}
          {`${selectedSection} - ${selectedPeriodicity} in ${choosenDate}`}
        </h4>

        <table
          id="table-uptime"
          className="oee table table-striped table-bordered text-center align-middle table-hover"
          // style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <th
                colSpan={1}
                rowSpan={2}
                align="center"
                style={{ verticalAlign: "middle" }}
              >
                Period
              </th>
              <th colSpan={4}>Items</th>
              <th
                colSpan={1}
                rowSpan={2}
                align="center"
                style={{ verticalAlign: "middle" }}
              >
                Useful Production Time
              </th>
            </tr>
            <tr>
              <th>Total Machine (unit)</th>
              <th>Total Time (Minute)</th>
              <th>Actual Output (Pcs)</th>
              <th>Weight CT/Speed (Min/Pcs)</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <hr />

        <h4 className="text-center">
          OEE {`${selectedSection} - ${selectedPeriodicity} in ${choosenDate}`}
        </h4>

        <table
          id="table-oee"
          className="oee table table-striped table-bordered text-center align-middle table-hover"
          // style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <th>Period</th>
              <th>Availabilty</th>
              <th>Performance</th>
              <th>Quality</th>
              <th>OEE</th>
              <th>TEEP</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </>
  );
};

export default LossTime;
