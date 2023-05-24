// Import React Components
import Link from "next/link";
import { useEffect, useState } from "react";

// Import Atoms
import ParetoChart from "../../../atoms/charts/ParetoChart";
import PieChart from "../../../atoms/charts/PieChart";

// Import Self-Compoenents
import Desc from "../../../moleculs/CardWithChartDesc/Desc";

// Import 3d Party Components
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const index = ({ title, chartData, desc, tableData }) => {
  const [visibiltyTooltip, setVisibiltyTooltip] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisibiltyTooltip(false);
    }, 10000);
  }, []);

  const onInfoBtnHoverHandle = () => {
    setVisibiltyTooltip(true);
  };
  const onInfoBtnNotHoverHandle = () => {
    setVisibiltyTooltip(false);
  };

  return (
    <div className="card collapsed-card">
      <div className="card-header" data-card-widget="collapse">
        {title === "Quality Performance" ? (
          <Tippy
            content="Klik untuk melihat data detail terkait FI "
            visible={visibiltyTooltip}
          >
            <h5
              className="card-title"
              onMouseEnter={onInfoBtnHoverHandle}
              onMouseLeave={onInfoBtnNotHoverHandle}
            >
              {title}
            </h5>
          </Tippy>
        ) : (
          <h5 className="card-title">{title}</h5>
        )}

        <div className="card-tools">
          <button
            type="button"
            className="btn btn-tool"
            data-card-widget="collapse"
          >
            <i className="fas fa-minus"></i>
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
          <div className="col-md-8">
            <div className="chart">
              {title === "Quality Performance" && <ParetoChart title={title} />}
              {title === "Sales Performance" && <ParetoChart title={title} />}
            </div>
          </div>
          <div className="col-md-4">
            <PieChart />
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col-md-12">
            <Link className="btn btn-primary btn-block round-lg" href={"/fi"}>
              <i className="fas fa-eye"></i> Detail
            </Link>
          </div>
        </div>
      </div>
      {/* {desc && (
        <div className="card-footer">
          <div className="row">
            {desc.map((item, index) => (
              <Desc key={index} {...item} />
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default index;
