import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
        />

        <link
          rel="stylesheet"
          href="/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css"
        />
        <link
          rel="stylesheet"
          href="/plugins/datatables-responsive/css/responsive.bootstrap4.min.css"
        />
        <link
          rel="stylesheet"
          href="/plugins/datatables-buttons/css/buttons.bootstrap4.min.css"
        />
        <link
          rel="stylesheet"
          href="/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css"
        />
        <script type="text/javascript" src="/js/jquery.min.js" />
        <script type="text/javascript" src="/plugins/moment/moment.min.js" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#343a40" />
      </Head>
      <body className="hold-transition dark-mode sidebar-mini sidebar-collapse layout-fixed layout-navbar-fixed layout-footer-fixed">
        <div className="wrapper">
          <Main />
        </div>
        <NextScript />

        <script type="text/javascript" src="/js/bootstrap.bundle.min.js" />
        {/* <script type="text/javascript" src="/overlayScrollbars/js/jquery.overlayScrollbars.min.js" /> */}
        <script type="text/javascript" src="/js/adminlte.min.js" />
        <script type="text/javascript" src="/chart.js/Chart.min.js" />

        <script src="/plugins/datatables/jquery.dataTables.min.js" />
        <script src="/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js" />
        <script src="/plugins/datatables-responsive/js/dataTables.responsive.min.js" />
        <script src="/plugins/datatables-responsive/js/responsive.bootstrap4.min.js" />
        <script src="/plugins/datatables-buttons/js/dataTables.buttons.min.js" />
        <script src="/plugins/datatables-buttons/js/buttons.bootstrap4.min.js" />
        <script src="/plugins/jszip/jszip.min.js" />
        <script src="/plugins/pdfmake/pdfmake.min.js" />
        <script src="/plugins/pdfmake/vfs_fonts.js" />
        <script src="/plugins/datatables-buttons/js/buttons.html5.min.js" />
        <script src="/plugins/datatables-buttons/js/buttons.print.min.js" />
        <script src="/plugins/datatables-buttons/js/buttons.colVis.min.js" />

        <script src="/plugins/select2/js/select2.full.min.js"></script>
        {/* <script
          type="text/javascript"
          src="/plugins/daterangepicker/daterangepicker.js"
        ></script>

        <script
          type="text/javascript"
          src="/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"
        /> */}
      </body>
    </Html>
  );
}
