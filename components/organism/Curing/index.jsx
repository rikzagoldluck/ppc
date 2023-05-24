// Import React Components
import useSWR from "swr";
import { useEffect } from "react";

// Import Services
import { getProd } from "../../../services/production";

// Import Atoms
import CardWithBigIcon from "../../atoms/cards/CardWithBigIcon";
import CardWith4Param from "../../atoms/cards/CardMachineRunning";

// Import Moleculs
import CardWithChartDesc from "../../moleculs/CardWithChartDesc";

// Import Self-Components
import MachineLine from "./MachineLine";

// Import Error Components
import _500 from "../../../pages/_500";

// Import 3d party Components
import { toast } from "react-toastify";

const index = () => {
  const { data, error } = useSWR("prodcure", () => getProd("/prodcure"));

  useEffect(() => {
    toast.info("Actual Green Tyre: " + 4 + " Green Tyre(s)");
  }, []);

  // if (error) return <_500 />;
  // if (!data) return <SkeletonLoader />;

  return (
    <section className="content">
      <div className="container-fluid">
        {/* START CARDS CONTAINER */}
        <div className="row">
          <div className="col-md-3 col-12 col-sm-6">
            <CardWith4Param section={"curing"} />
          </div>
          <CardWithBigIcon
            name="Schedule"
            value={800}
            bg="success"
            icon="fas fa-calendar-alt"
          />
          <div className="clearfix hidden-md-up"></div>
          <CardWithBigIcon
            name="4M"
            value={12}
            bg="danger"
            icon="fas fa-exclamation-triangle"
          />
          <CardWithBigIcon
            name="GT Stock"
            value={1200}
            bg="warning"
            icon="fas fa-hockey-puck"
          />
        </div>
        {/* END CARDS CONTAINER */}

        {/* START MACHINE LINE CARDS */}
        <div className="row">
          <MachineLine /> {/*  LINE A */}
        </div>
        {/* END MACHINE LINE CARDS */}

        <div className="row ">
          {/* PRODUCTION PERFORMANCE */}
          <CardWithChartDesc
            chartFor="curing"
            endPoint="/prodcure"
            desc={[
              {
                color: "success",
                icon: "fa-caret-up",
                percentage: "17%",
                header: "$35,210.43",
                text: "TOTAL REVENUE",
              },
              {
                color: "success",
                icon: "fa-caret-up",
                percentage: "20%",
                header: "$24,813.53",
                text: "TOTAL PROFIT",
              },
              {
                color: "danger",
                icon: "fa-caret-down",
                percentage: "18%",
                header: "1200",
                text: "GOAL COMPLETIONS",
              },
              {
                color: "warning",
                icon: "fa-caret-left",
                percentage: "0%",
                header: "00:01:20",
                text: "AVG. TIME ON PAGE",
              },
            ]}
            title="Production Performance Recap"
          />

          {/* OEE */}
          <CardWithChartDesc
            chartFor="oee"
            // endPoint="/prodcure"
            title="OEE Performance Recap"
            desc={[
              {
                color: "success",
                icon: "fa-caret-up",
                percentage: "53%",
                header: "$35,210.43",
                text: "USEFULL TIME",
              },
              {
                color: "success",
                icon: "fa-caret-up",
                percentage: "20%",
                header: "$24,813.53",
                text: "LOSS TIMES",
              },
              {
                color: "danger",
                icon: "fa-caret-down",
                percentage: "18%",
                header: "1200",
                text: "OEE",
              },
              {
                color: "warning",
                icon: "fa-caret-left",
                percentage: "0%",
                header: "00:01:20",
                text: "TEEP",
              },
            ]}
          />

          {/* 4M Losses */}
          <CardWithChartDesc title="4M Losses Recap" />
        </div>
      </div>
    </section>
  );
};

export default index;
