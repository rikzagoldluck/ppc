import React from 'react';

const Desc = ({ color, icon, percentage, header, text }) => {
  return (
    <div className="col-sm-3 col-6">
      <div className="description-block border-right">
        <span className={'description-percentage text-' + color}>
          <i className={'fas ' + icon}></i> {percentage}
        </span>
        <h5 className="description-header">{header}</h5>
        <span className="description-text">{text}</span>
      </div>
    </div>
  );
};

export default Desc;
