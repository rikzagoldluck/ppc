// Import React Components
import React from "react";
import Image from "next/image";

// Import Moleculs
import ContentHeader from "../../moleculs/ContentHeader";

// Import Atoms
import CardWithMoreInfo from "../../atoms/cards/CardWithMoreInfo";
import CardMachineRunning from "../../atoms/cards/CardMachineRunning";
import CardBestCuring from "../../atoms/cards/CardBestCuring";
import CardBestBuilding from "../../atoms/cards/CardBestBuilding";
import CardBestOEE from "../../atoms/cards/CardBestOEE";
import CardBestQuality from "../../atoms/cards/CardBestQuality";
import CardBestComplex from "../../atoms/cards/CardBestComplex";

// Import Self Components
import ChartWithNavTab from "./ChartWithNavTab";
import ChartRankDefectDaily from "./ChartRankDefectDaily";

// Import 3d Party Components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import CardBestFTT from "../../atoms/cards/CardBestFTT";

SwiperCore.use([Autoplay, Mousewheel, Pagination]);

const index = () => {
  return (
    <>
      <ContentHeader title="Dashboard" />

      <section className="content">
        <div className="container-fluid ">
          {/* START CARD SLIDER */}
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            mousewheel={true}
            pagination={{
              dynamicBullets: true,
            }}
            slidesPerView={2}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="row"
          >
            <SwiperSlide>
              <CardMachineRunning />
            </SwiperSlide>
            <SwiperSlide>
              <CardBestCuring />
            </SwiperSlide>
            <SwiperSlide>
              <CardBestBuilding />
            </SwiperSlide>
            <SwiperSlide>
              <CardBestOEE />
            </SwiperSlide>
            <SwiperSlide>
              <CardBestQuality />
            </SwiperSlide>
            <SwiperSlide>
              <CardBestComplex />
            </SwiperSlide>
            <SwiperSlide>
              <CardBestFTT />
            </SwiperSlide>
            {/* {[
              { bg: "info", value: 150, title: "Best Curing", href: "#" },
              {
                bg: "success",
                value: "53%",
                title: "Best Building",
                href: "#",
              },
              { bg: "warning", value: 1500, title: "GT Stock", href: "#" },
              { bg: "danger", value: 150, title: "Problem", href: "#" },
              { bg: "secondary", value: 150, title: "Secondary", href: "#" },
            ].map((slideContent, index) => {
              return (
                <SwiperSlide key={index}>
                  <CardWithMoreInfo
                    bg={slideContent.bg}
                    value={slideContent.value}
                    title={slideContent.title}
                    href={slideContent.href}
                  />
                </SwiperSlide>
              );
            })} */}
          </Swiper>

          {/* END CARD SLIDER */}
          {/* START PRODUCTION PERFORMANCE CARD */}
          <div className="row">
            <div className="col-md-12">
              <ChartWithNavTab
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
          {/* END PRODUCTION PERFORMANCE CARD */}

          {/* START QUALITY PERFORMANCE CARD */}
          <div className="row">
            <div className="col-md-12">
              <ChartRankDefectDaily
                title={"Quality Performance"}
                chartData={[]}
                desc={[
                  {
                    color: "success",
                    icon: "fas fa-tachometer-alt",
                    percentage: "10%",
                    header: "ssaas",
                    text: "adasd",
                  },
                ]}
                tableData={[{}]}
              />
            </div>
          </div>
          {/* END QUALITY PERFORMANCE CARD */}

          {/* START SHIPPING PERFORMANCE CARD */}
          <div className="row">
            <div className="col-md-12">
              <ChartRankDefectDaily
                title={"Shipping Performance"}
                tableData={[{}]}
              />
            </div>
          </div>
          {/* END SHIPPING PERFORMANCE CARD */}
        </div>
      </section>
    </>
  );
};

export default index;
