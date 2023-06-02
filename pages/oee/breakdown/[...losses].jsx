import { useState } from "react";
import ContentHeader from "../../../components/moleculs/ContentHeader";
import Navbar from "../../../components/organism/Navbar/Navbar";
import Sidebar from "../../../components/organism/Sidebar";
import BreakDown from "../../../components/organism/OEE/BreakDown";
import { useRouter } from "next/router";
import { ITEM_LOSS_CATEGORY } from "../../../constants";

export default function BreakDownLosses() {
  const router = useRouter();
  const { losses: params } = router.query;
  const [section, losses, periodicity, date] = params;
  const [selectedSection, setSelectedSection] = useState(section);
  const [selectedLosses, setSelectedLosses] = useState(losses);
  const [selectedPeriodicity, setSelectedPeriodicity] = useState(periodicity);
  const [selectedDate, setSelectedDate] = useState(date);
  const [selectedLossesName, setSelectedLossesName] = useState("");
  useState(() => {
    const item = ITEM_LOSS_CATEGORY.find((obj) => obj.id === selectedLosses);
    setSelectedLossesName(item ? item.name : "");
  }, [selectedLosses]);
  return (
    <>
      <Navbar />
      <Sidebar page={"breakdown"} />
      <main className="content-wrapper">
        <ContentHeader title={`Losses Breakdown for ${selectedLossesName}`} />

        <section className="content">
          <div className="container-fluid">
            <BreakDown
              section={selectedSection}
              losses={selectedLosses}
              periodicity={selectedPeriodicity}
              date={selectedDate}
            />
          </div>
        </section>
      </main>
    </>
  );
}
