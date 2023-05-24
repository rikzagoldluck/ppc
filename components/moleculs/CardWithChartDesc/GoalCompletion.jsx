import React from 'react';

const GoalCompletion = () => {
  return (
    <div className="col-md-4">
      <p className="text-center">
        <strong>Goal Completion</strong>
      </p>

      <div className="progress-group">
        Add Products to Cart
        <span className="float-right">
          <b>160</b>/200
        </span>
        <div className="progress progress-sm">
          <div className="progress-bar bg-primary" style={{ width: '80%' }}></div>
        </div>
      </div>

      <div className="progress-group">
        Complete Purchase
        <span className="float-right">
          <b>310</b>/400
        </span>
        <div className="progress progress-sm">
          <div className="progress-bar bg-danger" style={{ width: '75%' }}></div>
        </div>
      </div>

      <div className="progress-group">
        <span className="progress-text">Visit Premium Page</span>
        <span className="float-right">
          <b>480</b>/800
        </span>
        <div className="progress progress-sm">
          <div className="progress-bar bg-success" style={{ width: '60%' }}></div>
        </div>
      </div>

      <div className="progress-group">
        Send Inquiries
        <span className="float-right">
          <b>250</b>/500
        </span>
        <div className="progress progress-sm">
          <div className="progress-bar bg-warning" style={{ width: '50%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default GoalCompletion;
