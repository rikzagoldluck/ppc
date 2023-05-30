import ContentHeader from "../../components/moleculs/ContentHeader";
import Navbar from "../../components/organism/Navbar/Navbar";
import Sidebar from "../../components/organism/Sidebar";
import Content from "../../components/organism/OEE";
const index = () => {
  return (
    <>
      <Navbar />
      <Sidebar page="oee" />

      <main className="content-wrapper">
        <ContentHeader title="Capacity Losses" />
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Content />
        {/* </Suspense> */}
      </main>
    </>
  );
};

export default index;
