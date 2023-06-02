import ContentHeader from "../../../components/moleculs/ContentHeader";
import Navbar from "../../../components/organism/Navbar/Navbar";
import Sidebar from "../../../components/organism/Sidebar";

export default function index() {
  return (
    <>
      <Navbar />
      <Sidebar page={"breakdown"} />
      <main className="content-wrapper">
        <ContentHeader title={`Losses Breakdown for`} />

        <section className="content">
          <div className="container-fluid">
            <BreakDown />
          </div>
        </section>
      </main>
    </>
  );
}
