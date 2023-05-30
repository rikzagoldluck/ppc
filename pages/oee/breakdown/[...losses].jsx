import { useState } from "react";
import ContentHeader from "../../../components/moleculs/ContentHeader";
import Navbar from "../../../components/organism/Navbar/Navbar";
import BreakDown from "../../../components/organism/OEE/BreakDown";
import Sidebar from "../../../components/organism/Sidebar";
import { useRouter } from "next/router";
import { ITEM_LOSS_CATEGORY } from "../../../constants";

export default function BreakDownLosses() {
  const router = useRouter();
  const [losses, periodicity, date] = router.query.losses;
  const [selectedLosses, setSelectedLosses] = useState(losses);
  const [selectedPeriodicity, setSelectedPeriodicity] = useState(periodicity);
  const [selectedDate, setSelectedDate] = useState(date);
  return (
    <>
      <Navbar />
      <Sidebar page={"breakdown"} />
      <main className="content-wrapper">
        <ContentHeader
          title={`Losses Breakdown for ${
            ITEM_LOSS_CATEGORY.find((obj) => obj.id === selectedLosses).name
          }`}
        />

        <section className="content">
          <div className="container-fluid">
            <BreakDown
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
