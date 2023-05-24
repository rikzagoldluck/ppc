import useSWR from "swr";

// Import Services
import { getAll4M } from "../../../services/building";

// Import Loader Components
import CardSkeleton from "../skeleton/CardSkeleton";

// Import 3d PArty Components
import moment from "moment-timezone";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

// Import Error Components
import _500 from "../../../pages/_500";
import { useState } from "react";

const getShiftNow = () => {
  moment.tz.setDefault("Asia/Jakarta");

  //   const currentTime = moment(date, "DD/MM/YYYY HH:mm:ss").utcOffset("+07:00");
  const currentTime = moment();

  const shift1Start = moment().set({
    hour: 7,
    minute: 0,
    second: 0,
    millisecond: 0,
  });

  const shiftDuration = moment.duration(8, "hours");

  const timeDiff = currentTime.diff(shift1Start);

  let shiftNumber = Math.floor(timeDiff / shiftDuration.asMilliseconds()) + 1;

  if (currentTime.isBefore(shift1Start)) {
    shiftNumber = 3;
  } else if (shiftNumber > 3) {
    shiftNumber = shiftNumber % 3;
  }

  if (shiftNumber === 1) return "I";
  if (shiftNumber === 2) return "II";
  if (shiftNumber === 3) return "III";
};

const convertDateFormat = (date) => {
  const momentDateTime = moment(date, "DD/MM/YYYY HH:mm:ss");
  return momentDateTime.format("DD/MM/YYYY");
};

const CardMachineRunning = ({ section }) => {
  const [visibiltyTooltip, setVisibiltyTooltip] = useState(false);

  const { data, error } = useSWR("mcnstop", () => getAll4M());
  if (error) return <_500 />;
  if (!data) return <CardSkeleton />;

  if (data.length == 0 || !Array.isArray(data)) {
    return <CardSkeleton />;
  }

  const dateNow = moment().format("DD/MM/YYYY");
  const shiftNow = getShiftNow();
  let sectionCode = "";
  switch (section) {
    case "curing":
      sectionCode = "C";
      break;
    case "building":
      sectionCode = "B";
      break;
    default:
      break;
  }

  const mcnStopOnShiftNow = data.filter((prob) => {
    if (
      convertDateFormat(prob.tstart) === dateNow &&
      shiftNow === prob.vshift &&
      prob.mcn.charAt(2) === sectionCode
    )
      return true;
  });

  const mcnStopByReasonGroup = mcnStopOnShiftNow.reduce((acc, curr) => {
    const reason = curr.reasongrou.toLowerCase();

    if (!acc[reason]) {
      acc[reason] = [];
    }
    acc[reason].push(curr);
    return acc;
  }, {});

  const onInfoBtnHoverHandle = () => {
    setVisibiltyTooltip(true);
  };
  const onInfoBtnNotHoverHandle = () => {
    setVisibiltyTooltip(false);
  };

  return (
    <div className="card mb-3 bg-maroon">
      <div className="card-header p-0 pt-1 pb-1">
        <p className="font-weight-bold text-small text-center m-0">
          Best M/C Running
        </p>
        <Tippy
          content={"M/C Running = 100 - ((M/C Stop / Total M/C) x 100)"}
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
              98%
            </h3>
          </div>
          <div className="col-md-6">
            <div className="text-start">
              <ul className="p-0 m-0">
                <li className="py-1 border-bottom d-flex justify-content-between">
                  <span className="font-weight-normal">Man</span>
                  <span className="font-weight-bold">
                    {mcnStopByReasonGroup.man
                      ? mcnStopByReasonGroup.man.length
                      : 0}
                  </span>
                </li>
                <li className="py-1 border-bottom d-flex justify-content-between">
                  <span className="font-weight-normal">Material</span>
                  <span className="font-weight-bold">
                    {mcnStopByReasonGroup.material
                      ? mcnStopByReasonGroup.material.length
                      : 0}
                  </span>
                </li>

                <li className="py-1 border-bottom  d-flex justify-content-between">
                  <span className="font-weight-normal">Machine</span>
                  <span className="font-weight-bold">
                    {mcnStopByReasonGroup.machine
                      ? mcnStopByReasonGroup.machine.length
                      : 0}
                  </span>
                </li>
                <li className="py-1 d-flex justify-content-between">
                  <span className="font-weight-normal">Others</span>
                  <span className="font-weight-bold">
                    {mcnStopByReasonGroup.others
                      ? mcnStopByReasonGroup.others.length
                      : 0}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMachineRunning;
