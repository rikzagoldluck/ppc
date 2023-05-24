import Head from "next/head";
import Script from "next/script";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <link href="./docs/assets/bass.css" rel="stylesheet" />
        <link href="./docs/assets/style.css" rel="stylesheet" />
        <link href="./docs/assets/github.css" rel="stylesheet" />
        <link href="./docs/assets/split.css" rel="stylesheet" />
      </Head>
      <div className="documentation m0">
        <div className="flex">
          <div
            id="split-left"
            className="overflow-auto fs0 height-viewport-100"
          >
            <div className="py1 px2">
              <h3 className="mb0 no-anchor"></h3>
              <div className="mb1">
                <code></code>
              </div>
              <input
                placeholder="Filter"
                id="filter-input"
                className="col12 block input"
                spellcheck="false"
                autocapitalize="off"
                autocorrect="off"
                type="text"
              />
              <div id="toc">
                <ul className="list-reset h5 py1-ul">
                  <li>
                    <a href="#getall4m" className="">
                      getAll4M
                    </a>
                  </li>

                  <li>
                    <a href="#getprod" className="">
                      getProd
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt1 h6 quiet">
                <a href="https://documentation.js.org/reading-documentation.html">
                  Need help reading this?
                </a>
              </div>
            </div>
          </div>
          <div
            id="split-right"
            className="relative overflow-auto height-viewport-100"
          >
            <section className="p2 mb2 clearfix bg-white minishadow">
              <div className="clearfix">
                <h3 className="fl m0" id="getall4m">
                  getAll4M
                </h3>
              </div>
              <p>This function is used to get all machine stops from the API</p>
              <div className="pre p1 fill-light mt0">
                getAll4M():{" "}
                <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array">
                  array
                </a>
              </div>
              <div className="py1 quiet mt1 prose-big">Returns</div>
              <code>
                <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array">
                  array
                </a>
              </code>
              : response array of machine stops or empty array
            </section>

            <section className="p2 mb2 clearfix bg-white minishadow">
              <div className="clearfix">
                <h3 className="fl m0" id="getprod">
                  getProd
                </h3>
              </div>
              <p>This function is used to get all products from the API</p>
              <div className="pre p1 fill-light mt0">
                getProd(endpoint:{" "}
                <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String">
                  string
                </a>
                ):{" "}
                <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array">
                  array
                </a>
              </div>
              <div className="py1 quiet mt1 prose-big">Parameters</div>
              <div className="prose">
                <div className="space-bottom0">
                  <div>
                    <span className="code bold">endpoint</span>{" "}
                    <code className="quiet">
                      (
                      <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String">
                        string
                      </a>
                      )
                    </code>
                  </div>
                </div>
              </div>
              <div className="py1 quiet mt1 prose-big">Returns</div>
              <code>
                <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array">
                  array
                </a>
              </code>
              : response array of products or empty array
            </section>
          </div>
        </div>
        <Script src="./docs/assets/anchor.js" />
        <Script src="./docs/assets/split.js" />
        <Script src="./docs/assets/site.js" />
      </div>
    </>
  );
};

export default index;
