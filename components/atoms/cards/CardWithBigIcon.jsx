import React from 'react';

const CardWithBigIcon = ({ name, value = 0, icon, bg }) => {
  return (
    <div className="col-12 col-sm-6 col-md-3">
      <div className="info-box">
        <span className={'info-box-icon elevation-1 bg-' + bg}>
          <i className={icon}></i>
        </span>

        <div className="info-box-content">
          <span className="info-box-text">{name}</span>
          <span className="info-box-number">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default CardWithBigIcon;
