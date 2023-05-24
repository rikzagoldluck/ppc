// Import React Components
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

// Import Services
import { getProd } from "../../../../services/production";

// Import Moleculs
import Desc from "../../../moleculs/CardWithChartDesc/Desc";

// Import Self Components
import TabContentItem from "./NavTab/TabContentItem";
import TabHeaderItem from "./NavTab/TabHeaderItem";

// Import Error Components
import _500 from "../../../../pages/_500";

const index = ({ desc }) => {
  const [prodCure, setProdCure] = useState([]);

  const [prodBld, setProdBld] = useState([]);
  const { data: curedData, error: curedErr } = useSWR("/prodcure", () =>
    getProd("/prodcure")
  );
  const { data: bldData, error: bldErr } = useSWR("/prodbld", () =>
    getProd("/prodbld")
  );

  const [activeTab, setActiveTab] = useState("matl_1");

  const router = useRouter();

  useEffect(() => {
    if (curedErr) return <_500 />;

    if (!curedData) return;
    setProdCure(curedData);
  }, [curedData, curedErr]);

  useEffect(() => {
    if (bldErr) return <_500 />;

    if (!bldData) return;
    setProdBld(bldData);
  }, [bldData, bldErr]);

  const onTabClickHander = (tab) => {
    switch (tab) {
      case "matl1":
        break;
      case "matl2":
        break;
      default:
        break;
    }
  };

  return (
    <div className="card p-0">
      <div className="card-body p-0">
        <div className="d-md-flex">
          <div className="flex-fill" style={{ overflow: "hidden" }}>
            <div style={{ overflow: "hidden" }}>
              <div className="card card-dark card-tabs mb-0 ">
                <div className="card-header p-0 pt-1">
                  <ul
                    className="nav nav-tabs"
                    id="custom-tabs-two-tab"
                    role="tablist"
                  >
                    <li className="pt-2 px-3 point" data-card-widget="collapse">
                      <button className="bg-transparent text-white border-0">
                        <h3 className="card-title">Production Performance</h3>
                      </button>
                    </li>
                    <TabHeaderItem
                      active
                      tab="matl_1"
                      content={"Matl 1"}
                      onTabClick={onTabClickHander}
                    />
                    <TabHeaderItem
                      tab="matl_2"
                      content={"Matl 2"}
                      onTabClick={onTabClickHander}
                    />
                    <TabHeaderItem
                      tab="building"
                      content={"Building"}
                      onTabClick={onTabClickHander}
                    />
                    <TabHeaderItem
                      tab="curing"
                      content={"Curing"}
                      onTabClick={onTabClickHander}
                    />
                    <TabHeaderItem
                      tab="fi"
                      content={"FI"}
                      onTabClick={onTabClickHander}
                    />
                  </ul>
                </div>
                <div className="card-body p-0">
                  <div className="tab-content" id="custom-tabs-two-tabContent">
                    <TabContentItem active tab="matl_1" content={"Matl 1"} />
                    <TabContentItem tab="matl_2" content={"Matl 2"} />
                    <TabContentItem
                      tab="building"
                      content={"Building"}
                      chartData={prodBld}
                    />
                    <TabContentItem
                      tab="curing"
                      content={"Curing"}
                      chartData={prodCure}
                    />
                    <TabContentItem tab="fi" content={"FI"} />
                  </div>
                </div>
                <div className="card-footer">
                  <div className="row">
                    {desc &&
                      desc.map((item, index) => <Desc key={index} {...item} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pie Chart */}
        </div>
      </div>
    </div>
  );
};

export default index;
