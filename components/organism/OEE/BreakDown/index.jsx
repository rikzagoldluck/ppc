// import { HighchartsReact } from "highcharts-react-official";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ITEM_LOSS_CATEGORY } from "../../../../constants";
import { forwardRef, useState } from "react";
import Losstime from "./Losstime";

export default function index({ section, losses, periodicity, date }) {
  const [selectedSection, setSelectedSection] = useState(section);
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
          <div className="col-3">
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
          <div className="col-3">
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
          <div className="col-3">
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
          <div className="col-3">
            <div className="form-group">
              <label>Periodicity</label>
              {selectedPeriodicity === "monthly" && (
                <ReactDatePicker
                  selected={startDate}
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
                  selected={startDate}
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
      <div className="col-md-12">
        <Losstime
          selectedLosses={selectedLosses}
          selectedSection={selectedSection}
          startDate={startDate}
          selectedPeriodicity={selectedPeriodicity}
        />
      </div>
    </div>
  );
}
