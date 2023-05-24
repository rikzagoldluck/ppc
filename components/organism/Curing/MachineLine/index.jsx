import React, { useEffect, useState } from "react";
import Link from "next/link";

import { CURING_MACHINE_LIST } from "../../../../constants";

// Import 3d Party Components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Mousewheel, Keyboard } from "swiper";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Autoplay, Pagination, Mousewheel, Keyboard]);

const index = () => {
  const [visibiltyTooltip, setVisibiltyTooltip] = useState(true);
  const [contentModal, setContentModal] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setVisibiltyTooltip(false);
    }, 10000);

    $("#modal-info").on("show.bs.modal", function (param) {
      let mesin = $(param.relatedTarget).data("mesin");
      let section = $(param.relatedTarget).data("section");

      switch (section) {
        case "curing-4m":
          console.log("curing-4m");
          break;
        case "curing-act":
          console.log("curing-act");

          break;
        default:
          break;
      }

      // FETCH DATA
    });
  }, []);

  const onInfoBtnHoverHandle = () => {
    setVisibiltyTooltip(true);
  };
  const onInfoBtnNotHoverHandle = () => {
    setVisibiltyTooltip(false);
  };

  // Custom Pagination
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        ' swipper-mini swipper-mini-active" >' +
        (index + 1) +
        "</span>"
      );
    },
  };

  return (
    <div className="col-md-12">
      <div className="card">
        <div className="card-header" data-card-widget="collapse">
          <h5 className="card-title">Line A</h5>
          <div className="card-tools">
            <button
              type="button"
              className="btn btn-tool"
              data-card-widget="collapse"
            >
              <i className="fas fa-minus"></i>
            </button>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-tool"
                onMouseOver={onInfoBtnHoverHandle}
                onMouseLeave={onInfoBtnNotHoverHandle}
                data-toggle="modal"
                data-target="#modal-info-parameter-curing"
              >
                <Tippy
                  content={
                    "Klik saya untuk mendapatkan informasi tentang penjelasan data yang ditampilkan"
                  }
                  interactive={true}
                  interactiveBorder={20}
                  delay={300}
                  visible={visibiltyTooltip}
                >
                  <i className="fas fa-info-circle"></i>
                </Tippy>
              </button>

              {/* MODAL INFO PARAMETER */}
              <div className="modal fade" id="modal-info-parameter-curing">
                <div className="modal-dialog modal-xl modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Default Modal</h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>One fine body&hellip;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-tool"
              data-card-widget="remove"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className="card-body">
          <Swiper
            pagination={pagination}
            keyboard={{
              enabled: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            mousewheel={true}
            slidesPerView={1}
            spaceBetween={10}
            grabCursor={true}
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
            {Object.entries(CURING_MACHINE_LIST).map((slideContent, index) => {
              if (slideContent[0].charAt(3) === "A") {
                return (
                  <SwiperSlide key={index}>
                    <div className="machine-card-container mt-3 mb-5">
                      <span className="machine-card-title">
                        <h5>{slideContent[0]}</h5>
                      </span>
                      <div className="row">
                        <div className="col-sm-4 border-right">
                          <Link
                            href={"#"}
                            className="description-block text-white link-parameter"
                          >
                            <span className="description-text">SCH</span>
                            <h5 className="description-header">3,200</h5>
                          </Link>
                        </div>

                        <div
                          className="col-sm-4 border-right"
                          data-toggle="modal"
                          data-target="#modal-info"
                          data-mesin={slideContent[0]}
                          data-section={"curing-act"}
                        >
                          <div className="description-block text-white link-parameter">
                            <span className="description-text">ACT</span>
                            <h5 className="description-header">13,000</h5>
                          </div>
                        </div>

                        <div className="col-sm-4">
                          <Link
                            href={"#"}
                            className="description-block text-white link-parameter"
                          >
                            <span className="description-text">RATIO</span>
                            <h5 className="description-header">35</h5>
                          </Link>
                        </div>
                      </div>
                      <div className="row justify-content-center align-items-center">
                        <div className="col-4">
                          <Link
                            href={"#"}
                            className="description-block text-white link-parameter"
                          >
                            <span className="description-text">SIZE</span>
                            <h5 className="description-header">RA305</h5>
                          </Link>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-center">
                          {/* <h5 className="description-header">
                            {slideContent[0]}
                          </h5> */}
                        </div>
                        <div className="col-4">
                          <Link
                            href={"#"}
                            className="description-block text-white link-parameter"
                          >
                            <span className="description-text">GT</span>
                            <h5 className="description-header">35</h5>
                          </Link>
                        </div>
                      </div>
                      <div className="row">
                        <div
                          className="col-sm-4 border-right"
                          data-toggle="modal"
                          data-target="#modal-info"
                          data-mesin={slideContent[0]}
                          data-section={"curing-4m"}
                        >
                          <div className="description-block text-white link-parameter">
                            <span className="description-text">4M</span>
                            <h5 className="description-header">3,200</h5>
                          </div>
                        </div>

                        <div className="col-sm-4 border-right">
                          <Link
                            href={`/oee/${slideContent[0].toLocaleLowerCase()}`}
                            className="description-block text-white link-parameter"
                          >
                            <span className="description-text">OEE</span>
                            <h5 className="description-header">13,000</h5>
                          </Link>
                        </div>

                        <div className="col-sm-4">
                          <Link
                            href={"#"}
                            className="description-block text-white link-parameter"
                          >
                            <span className="description-text">COMPLEX</span>
                            <h5 className="description-header">35</h5>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
          <div className="modal fade" id="modal-info">
            <div className="modal-dialog modal-xl modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title"></h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {contentModal === "" ? (
                    <div className="d-flex justify-content-center">
                      <div
                        className="spinner-border text-white"
                        role="status"
                      ></div>
                      <h5>Creating a magic&hellip; </h5>
                    </div>
                  ) : (
                    contentModal
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
