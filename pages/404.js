import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Navbar from '../components/organism/Navbar/Navbar';
import Sidebar from '../components/organism/Sidebar';

const _404 = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, 3000);
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>404 Error Page</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">404 Error Page</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="error-page">
            <h2 className="headline text-warning"> 404</h2>

            <div className="error-content">
              <h3>
                <i className="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.
              </h3>

              <p>
                We could not find the page you were looking for. Meanwhile, you may <Link href="/">return to dashboard</Link> or try using the search form.
              </p>

              <form className="search-form">
                <div className="input-group">
                  <input type="text" name="search" className="form-control" placeholder="Search" />

                  <div className="input-group-append">
                    <button type="submit" name="submit" className="btn btn-warning">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default _404;
