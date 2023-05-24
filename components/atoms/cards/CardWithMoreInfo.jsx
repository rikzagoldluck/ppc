const CardWithMoreInfo = ({ bg, value, title, href }) => {
  return (
    // <div className="col-lg-3 col-6">
    <div className={"small-box bg-" + bg}>
      <div className="inner">
        <h3>{value}</h3>

        <p>{title}</p>
      </div>
      <div className="icon">
        <i className="ion ion-bag"></i>
      </div>
      <a href={href} className="small-box-footer">
        More info <i className="fas fa-arrow-circle-right"></i>
      </a>
    </div>
    // </div>
  );
};

export default CardWithMoreInfo;
