import { getProd } from "../../../services/production";
import useSWR from "swr";
import _500 from "../../../pages/_500";
import CardWithBigIcon from "../../atoms/CardWithBigIcon";
import CardWithChartDesc from "../../moleculs/CardWithChartDesc";

import { toast } from "react-toastify";
import { useEffect } from "react";

const index = () => {
  const { data, error } = useSWR("prodcure", () => getProd("/prodcure"));

  useEffect(() => {
    toast.info("Actual Green Tyre: " + 4 + " Green Tyre(s)");
  }, []);
  if (error) return <_500 />;
  if (!data) return;

  return (
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <CardWithBigIcon
            name="Tyre Cured"
            value={data.length}
            bg="info"
            icon="fas fa-thumbs-up"
          />
          <CardWithBigIcon
            name="Schedule"
            value={800}
            bg="success"
            icon="fas fa-shopping-cart"
          />
          <div className="clearfix hidden-md-up"></div>
          <CardWithBigIcon
            name="4M"
            value={12}
            bg="danger"
            icon="fas fa-thumbs-up"
          />
          <CardWithBigIcon
            name="GT Stock"
            value={1200}
            bg="warning"
            icon="fas fa-thumbs-up"
          />
        </div>

        <div className="row">
          <CardWithChartDesc
            title="Curing Performance Recap"
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
          />
        </div>
      </div>
    </section>
  );
};

export default index;
