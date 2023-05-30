import Head from "next/head";
import Script from "next/script";

import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
import "../styles/globals.css";
import "../styles/PaginationSwiper.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PPC Dashboard</title>
        <meta name="description" content="Memudahkan pekerjaan mu" />
        <meta property="og:title" content="PPC Dashboard" />
        <meta property="og:description" content="Memudahkan pekerjaan mu" />
        <meta property="og:image" content="http://localhost:3000/img/a.jpg" />
        <meta property="og:url" content="http://localhost:3000" />
      </Head>

      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
