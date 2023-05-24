import React from "react";

const index = () => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Goal Completion</h3>

          {/* <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="remove"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div> */}
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-8">
              <div className="chart-responsive">
                <canvas id="pieChart" height="150"></canvas>
              </div>
            </div>

            <div className="col-md-4">
              <ul className="chart-legend clearfix">
                <li>
                  <i className="far fa-circle text-danger"></i> Chrome
                </li>
                <li>
                  <i className="far fa-circle text-success"></i> IE
                </li>
                <li>
                  <i className="far fa-circle text-warning"></i> FireFox
                </li>
                <li>
                  <i className="far fa-circle text-info"></i> Safari
                </li>
                <li>
                  <i className="far fa-circle text-primary"></i> Opera
                </li>
                <li>
                  <i className="far fa-circle text-secondary"></i> Navigator
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card-footer p-0">
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <a href="#" className="nav-link">
                United States of America
                <span className="float-right text-danger">
                  <i className="fas fa-arrow-down text-sm"></i>
                  12%
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                India
                <span className="float-right text-success">
                  <i className="fas fa-arrow-up text-sm"></i> 4%
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                China
                <span className="float-right text-warning">
                  <i className="fas fa-arrow-left text-sm"></i> 0%
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
