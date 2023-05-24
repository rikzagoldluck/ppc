// import Head from 'next/head';
// import styles from '../styles/Home.module.css';

import Navbar from '../components/organism/Navbar/Navbar';
import Dashboard from '../components/organism/Dashboard';
import Preloader from '../components/organism/Navbar/Preloader';
import Sidebar from '../components/organism/Sidebar';

export default function Home() {
  return (
    <>
      {/* <Preloader /> */}
      <Navbar />
      <Sidebar page="dashboard" />

      <main className="content-wrapper">
        <Dashboard />
      </main>
    </>
  );
}
