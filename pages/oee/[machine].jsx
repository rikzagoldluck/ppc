import React, { useEffect } from "react";
import CardWithChartDesc from "../../components/moleculs/CardWithChartDesc";
import { GetStaticPaths, GetStaticProps } from "next";
import next from "next";
import Sidebar from "../../components/organism/Sidebar";
import Navbar from "../../components/organism/Navbar/Navbar";
import ContentHeader from "../../components/moleculs/ContentHeader";
import { CURING_MACHINE_LIST } from "../../constants";

const OEE = ({ params }) => {
  const { machine } = params;
  return (
    <>
      <Navbar />
      <Sidebar page={"OEE"} />
      <main className="content-wrapper">
        <ContentHeader title={`OEE Analyze for ${machine.toUpperCase()}`} />

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              {/* OEE */}
              <CardWithChartDesc
                chartFor="oee"
                // chartFor="curing"
                // endPoint="/prodcure"
                title={`OEE Performance Recap For ${machine.toUpperCase()}`}
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
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default OEE;

export async function getStaticPaths() {
  // Return a list of possible value for id

  // if (process.env.isDev) {
  //   return {
  //     paths: [],
  //     fallback: "blocking",
  //   };
  // }

  let paths = Object.entries(CURING_MACHINE_LIST).map((machine) => {
    return {
      params: {
        machine: machine[0].toString().toLowerCase(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  return {
    props: { params },
  };
}
