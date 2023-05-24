import Image from "next/image";
import { useEffect } from "react";
import Menu from "./Menu";
import User from "./User";
import Link from "next/link";

const Sidebar = ({ page }) => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link href="/" className="brand-link">
        <img
          src="/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
        />
        <span className="brand-text font-weight-light">PPC Dashboard</span>
      </Link>

      <section className="sidebar">
        <User />

        {/* <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div> */}

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <Menu
              active={page === "dashboard" ? true : false}
              href="/"
              name={"Dashboard"}
              icon={"fas fa-tachometer-alt"}
            />
            <li className="nav-header">PRODUCTION</li>

            <Menu
              active={
                page === "material1" ||
                page === "material2" ||
                page === "building" ||
                page === "curing"
                  ? true
                  : false
              }
              href="#"
              name={"Our Section"}
              icon={"fas fa-hands-helping"}
              treeview={[
                {
                  name: "Material 1",
                  href: "/material1",
                  icon: "fas fa-ring",
                  active: page === "material1" ? true : false,
                },
                {
                  name: "Material 2",
                  href: "/material2",
                  icon: "fas fa-drum-steelpan",
                  active: page === "material2" ? true : false,
                },
                {
                  name: "Building",
                  href: "/building",
                  icon: "fas fa-hockey-puck",
                  active: page === "building" ? true : false,
                },
                {
                  name: "Curing",
                  href: "/curing",
                  icon: "fas fa-compact-disc",
                  active: page === "curing" ? true : false,
                },
              ]}
              menuOpen={true}
            />
            <li className="nav-header">QUALITY</li>
            <Menu
              active={
                page === "fi" ||
                page === "scrap" ||
                page === "repair" ||
                page === "oes"
                  ? true
                  : false
              }
              href="#"
              name={"Section"}
              icon={"fas fa-hands-helping"}
              treeview={[
                {
                  name: "Final Inspection",
                  href: "/fi",
                  icon: "fas fa-microscope",
                  active: page === "fi" ? true : false,
                },
                {
                  name: "Scrap",
                  href: "/scrap",
                  icon: "fas fa-cookie-bite",
                  active: page === "scrap" ? true : false,
                },
                {
                  name: "Repair",
                  href: "/repair",
                  icon: "fas fa-tools",
                  active: page === "repair" ? true : false,
                },
                {
                  name: "OES",
                  href: "/oes",
                  icon: "fas fa-recycle",
                  active: page === "oes" ? true : false,
                },
              ]}
              menuOpen={
                page === "fi" ||
                page === "scrap" ||
                page === "repair" ||
                page === "oes"
                  ? true
                  : false
              }
            />

            <li className="nav-header">SHARE WITH US</li>
            <Menu href="/#" name={"Discussion"} icon={"fas fa-users"} />
            <li className="nav-header">ANALYSIS</li>
            <Menu href="/oee" name={"OEE"} icon={"fas fa-chart-line"} />

            <li className="nav-header">DATA PROCESS</li>
          </ul>
        </nav>
      </section>
    </aside>
  );
};

export default Sidebar;
