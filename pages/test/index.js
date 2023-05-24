import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="info-box bg-gradient-info">
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6"></div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4 ">
                <h4>4M</h4>
                <h3>15</h3>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <p class="card-text">
                    Man <span id="man">4</span>
                  </p>
                  <p class="card-text">
                    Matl <span id="matl">4</span>
                  </p>
                  <p class="card-text">
                    Machine <span id="machine">4</span>
                  </p>
                  <p class="card-text">
                    Method
                    <span id="method">3</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div class="card shadow-lg p-4 pt-0 bg-info">
            <div className="card-header p-0">
              <h5>Headline</h5>
              <p>Subhead</p>
            </div>
            <div class="card-body p-0">
              <div class="text-start">
                <ul class="p-0 m-0">
                  <li class="py-1 border-bottom d-flex justify-content-between">
                    <span class="fw-light">Title 1</span>
                    <span class="fw-bold">Number</span>
                  </li>
                  <li class="py-1 border-bottom d-flex justify-content-between">
                    <span class="fw-light">Title 1</span>
                    <span class="fw-bold">Number</span>
                  </li>
                  <li class="py-1 border-bottom d-flex justify-content-between">
                    <span class="fw-light">Title 1</span>
                    <span class="fw-bold">Number</span>
                  </li>
                  <li class="py-1  d-flex justify-content-between">
                    <span class="fw-light">Title 1</span>
                    <span class="fw-bold">Number</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
