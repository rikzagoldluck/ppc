import Desc from "./Desc";
import Chart from "./DrilldownChart";
import WaterFallChart from "../../atoms/charts/WaterFallChart";

const index = ({ title, desc, endPoint, chartFor }) => {
  return (
    <div className="col-md-12">
      <div className="card collapsed-card">
        <div className="card-header" data-card-widget="collapse">
          <h5 className="card-title">{title}</h5>

          <div className="card-tools">
            <button
              type="button"
              className="btn btn-tool"
              data-card-widget="collapse"
            >
              <i className="fas fa-plus"></i>
            </button>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-tool dropdown-toggle"
                data-toggle="dropdown"
              >
                <i className="fas fa-wrench"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-right" role="menu">
                <a href="#" className="dropdown-item">
                  Action
                </a>
                <a href="#" className="dropdown-item">
                  Another action
                </a>
                <a href="#" className="dropdown-item">
                  Something else here
                </a>
                <a className="dropdown-divider"></a>
                <a href="#" className="dropdown-item">
                  Separated link
                </a>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-tool"
              data-card-widget="remove"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              {chartFor === "curing" && (
                <Chart chartFor={chartFor} endPoint={endPoint} />
              )}
              {chartFor === "building" && (
                <Chart chartFor={chartFor} endPoint={endPoint} />
              )}
              {chartFor === "oee" && <WaterFallChart />}
            </div>
          </div>
        </div>

        <div className="card-footer">
          <div className="row">
            {desc && desc.map((item, index) => <Desc key={index} {...item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
