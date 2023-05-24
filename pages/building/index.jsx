import { Suspense } from "react";
import ContentHeader from "../../components/moleculs/ContentHeader";
import Navbar from "../../components/organism/Navbar/Navbar";
import Sidebar from "../../components/organism/Sidebar";
import Content from "../../components/organism/Building";

const index = () => {
  return (
    <>
      <Navbar />
      <Sidebar page="building" />

      <main className="content-wrapper">
        <ContentHeader title="Building" />
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Content />
        {/* </Suspense> */}
      </main>
    </>
  );
};

export default index;
