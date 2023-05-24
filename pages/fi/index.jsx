import ContentHeader from "../../components/moleculs/ContentHeader";
import Navbar from "../../components/organism/Navbar/Navbar";
import Sidebar from "../../components/organism/Sidebar";
import Content from "../../components/organism/FI";

const index = () => {
  return (
    <>
      <Navbar />
      <Sidebar page="fi" />

      <main className="content-wrapper">
        <ContentHeader title="Final Inspection" />
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Content />
        {/* </Suspense> */}
      </main>
    </>
  );
};

export default index;
