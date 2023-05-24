import React from "react";

const TableRankDefectDaily = () => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-header">
          <span className="badge bg-danger text-lg ml-2">
            3.8<small> %</small>
          </span>
          <div className="card-tools">
            {/* <button type="button" className="btn btn-tool" data-card-widget="collapse">
            <i className="fas fa-minus"></i>
          </button>
          <button type="button" className="btn btn-tool" data-card-widget="remove">
            <i className="fas fa-times"></i>
          </button> */}
            <ul className="pagination pagination-sm float-right">
              <li className="page-item">
                <a className="page-link text-white" href="#">
                  &laquo;
                </a>
              </li>
              <li className="page-item">
                <a className="page-link text-white" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link text-white" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link text-white" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link text-white" href="#">
                  &raquo;
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card-body p-0">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: 10 }}>#</th>
                <th>Task</th>
                <th>Progress</th>
                <th style={{ width: 40 }}>Label</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Update software</td>
                <td>
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar progress-bar-danger"
                      style={{ width: 55 }}
                    ></div>
                  </div>
                </td>
                <td>
                  <span className="badge bg-danger">55%</span>
                </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Clean database</td>
                <td>
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: 70 }}
                    ></div>
                  </div>
                </td>
                <td>
                  <span className="badge bg-warning">70%</span>
                </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Cron job running</td>
                <td>
                  <div className="progress progress-xs progress-striped active">
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: 30 }}
                    ></div>
                  </div>
                </td>
                <td>
                  <span className="badge bg-primary">30%</span>
                </td>
              </tr>
              <tr>
                <td>5.</td>
                <td>Fix and squish bugs</td>
                <td>
                  <div className="progress progress-xs progress-striped active">
                    <div
                      className="progress-bar bg-success"
                      style={{ width: 90 }}
                    ></div>
                  </div>
                </td>
                <td>
                  <span className="badge bg-success">90%</span>
                </td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Fix and squish bugs</td>
                <td>
                  <div className="progress progress-xs progress-striped active">
                    <div
                      className="progress-bar bg-success"
                      style={{ width: 90 }}
                    ></div>
                  </div>
                </td>
                <td>
                  <span className="badge bg-success">90%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableRankDefectDaily;
