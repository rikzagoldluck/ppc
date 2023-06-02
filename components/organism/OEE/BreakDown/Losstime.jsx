import React, { useEffect, useState } from "react";
import { getMcnStop } from "../../../../services/oee";

export default function Losstime({
  selectedSection,
  selectedLosses,
  selectedPeriodicity,
  startDate,
}) {
  const [choosenDate, setchoosenDate] = useState("");
  const [periodInMinute, setPeriodInMinute] = useState(0);
  const [mcnStopResult, setMcnStopResult] = useState([]);
  const [mcnStop, setmcnStop] = useState([]);

  useEffect(() => {
    if (!$.fn.DataTable.isDataTable("table#table-breakdown")) {
      $(document).ready(function () {
        setTimeout(() => {
          const table = $("table#table-breakdown").DataTable({
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
        }, 1000);
      });
    }
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
    }
    // KETIKA PERIODICITY MONTHLY MAKA ENABLE INPUT YEAR DAN TAMPILKAN DATA BERDASARKAN SECTION DAN YEAR
    if (selectedPeriodicity === "monthly") {
      getMcnStop(selectedSection).then((res) => {
        setmcnStop(res);
      });

      setPeriodInMinute(43200);
    }
    // KETIKA PERIODICITY DAILY MAKA ENABLE INPUT YEAR DAN MONTH DAN TAMPILKAN DATA BERDASARKAN SECTION DAN YEAR DAN MONTH
    if (selectedPeriodicity === "daily") {
      getMcnStop(selectedSection).then((res) => {
        setmcnStop(res);
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
        return year === startDate.toString();
      }); // Mengembalikan array of object
      setchoosenDate(startDate.toString());

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

        if (month.length === 2 && month.charAt(0) === "0") {
          month = month.charAt(1);
        }

        let [dayChoosen, monthChoosen] = startDate.split("-");
        let date = dayChoosen + "/" + monthChoosen;
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

  useEffect(() => {
    console.log(mcnStopResult);
  }, [mcnStopResult]);

  // LOSS TIME
  useEffect(() => {
    if ($.fn.DataTable.isDataTable("#table-breakdown")) {
      const t = $("#table-breakdown").DataTable();
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

  return (
    <table
      id="table-breakdown"
      className="table table-striped table-bordered text-center align-middle table-hover"
      // style={{ width: "100%" }}
    >
      <thead>
        <tr>
          <th>Period</th>
          <th>Planned Closing</th>
          <th>No Schedule</th>
          <th>Planned Maintenance</th>
          <th>Rest</th>
          <th>Test & Dev</th>
          <th>Set Up</th>
          <th>Util</th>
          <th>MC Breakdown</th>
          <th>Matl Shortage</th>
          <th>Low Eff</th>
          <th>Delay Prod</th>
          <th>Quality Loss</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}
