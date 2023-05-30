// import { HighchartsReact } from "highcharts-react-official";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ITEM_LOSS_CATEGORY } from "../../../constants";
import { forwardRef, useState } from "react";

export default function BreakDown({ losses, periodicity, date }) {
  const [selectedPeriodicity, setSelectedPeriodicity] = useState(periodicity);
  const [selectedLosses, setSelectedLosses] = useState(losses);
  const [startDate, setStartDate] = useState(date);
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
    <div className="row">
      <div className="col-md-12 mr-2 mb-3">
        {/* <HighchartsReact highcharts={Highcharts} options={chartOpt} /> */}
      </div>
      <div className="col-md-12">
        <div className="row">
          <div className="col-4">
            <div className="form-group">
              <label>Losses</label>
              <select
                className="form-control select2bs4"
                style={{ width: "100%" }}
                onChange={(e) => setSelectedLosses(e.target.value)}
                value={selectedLosses}
              >
                <option value="pilih-losses">Pilih Losses</option>
                {ITEM_LOSS_CATEGORY.map((item, index) => (
                  <option value={item.id} key={index}>
                    {item.name}
                  </option>
                ))}
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
                  //   selected={startDate}
                  value={startDate}
                  onChange={(date) => setStartDate(date)}
                  showYearPicker
                  dateFormat="yyyy"
                  customInput={<DateRangeCustomInput />}
                  maxDate={addMonths(new Date(), 0)}
                />
              )}{" "}
              {selectedPeriodicity === "daily" && (
                <ReactDatePicker
                  value={startDate.replace("-", "/")}
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
      {/* <LossTime
    selectedSection={selectedSection}
    startDate={startDate}
    selectedPeriodicity={selectedPeriodicity}
    chartOptProps={(opt) => setChartOpt(opt)}
  /> */}
    </div>
  );
}
