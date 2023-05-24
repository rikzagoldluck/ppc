import useSWR from "swr";

// Import Services
import { getAll4M } from "../../../services/building";

// Import Loader Components
import CardSkeleton from "../skeleton/CardSkeleton";

// Import 3d PArty Components
import moment from "moment-timezone";

// Import Error Components
import _500 from "../../../pages/_500";
import { useState } from "react";
import Tippy from "@tippyjs/react";

const CardBestOEE = ({ section }) => {
  const [visibiltyTooltip, setVisibiltyTooltip] = useState(false);

  const { data, error } = useSWR("mcnstop", () => getAll4M());
  if (error) return <_500 />;
  if (!data) return <CardSkeleton />;

  if (data.length == 0 || !Array.isArray(data)) {
    return <CardSkeleton />;
  }
  const onInfoBtnHoverHandle = () => {
    setVisibiltyTooltip(true);
  };
  const onInfoBtnNotHoverHandle = () => {
    setVisibiltyTooltip(false);
  };

  return (
    <div className="card mb-3 bg-danger">
      <div className="card-header p-0 pt-1 pb-1">
        <p className="font-weight-bold text-small text-center m-0">
          Best Capacity Losses
        </p>
        <Tippy
          content={
            "Best Capacity Losses (OEE) = Availabilty x Performance x Quality"
          }
          interactive={true}
          interactiveBorder={20}
          delay={300}
          visible={visibiltyTooltip}
          placement={"bottom-end"}
        >
          <button
            className="position-absolute text-right bg-transparent border-0 text-white"
            style={{ top: 3, right: 3 }}
            onMouseOver={onInfoBtnHoverHandle}
            onMouseLeave={onInfoBtnNotHoverHandle}
          >
            <i className="fas fa-info-circle"></i>
          </button>
        </Tippy>
      </div>
      <div className="card-body">
        <div className="row no-gutters">
          <div className="col-md-6 d-flex align-items-center justify-content-center flex-md-column">
            <h5 className="font-weight-bold">12 May 22</h5>
            <h3 className="font-weight-bold ml-3 ml-md-0">
              {/* {mcnStopOnShiftNow.length} */}
              90%
            </h3>
          </div>
          <div className="col-md-6">
            <div className="text-start">
              <ul className="p-0 m-0">
                <li className="py-1 border-bottom d-flex justify-content-between">
                  <span className="font-weight-normal">Availabilty</span>
                  <span className="font-weight-bold">90%</span>
                </li>
                <li className="py-1 border-bottom d-flex justify-content-between">
                  <span className="font-weight-normal ">Performance</span>
                  <span className="font-weight-bold">90%</span>
                </li>

                <li className="py-1 border-bottom  d-flex justify-content-between">
                  <span className="font-weight-normal">Quality</span>
                  <span className="font-weight-bold">90%</span>
                </li>
                <li className="py-1 d-flex justify-content-between">
                  <span className="font-weight-normal text-danger">z</span>
                  <span className="font-weight-bold text-danger">z</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBestOEE;
