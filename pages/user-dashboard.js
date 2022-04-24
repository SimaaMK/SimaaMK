import Header from "../components/header";
import SideBar from "../components/sidebar";

export default function AdminDash() {
  return (
  <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, user-scalable=0"
  />
  <meta name="description" content="Smarthr - Bootstrap Admin Template" />
  <meta
    name="keywords"
    content="admin, estimates, bootstrap, business, corporate, creative, management, minimal, modern, accounts, invoice, html5, responsive, CRM, Projects"
  />
  <meta name="author" content="Dreamguys - Bootstrap Admin Template" />
  <meta name="robots" content="noindex, nofollow" />
  <title>User Dashboard - HRMS admin template</title>
  <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png" />
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
  <link rel="stylesheet" href="assets/css/line-awesome.min.css" />
  <link rel="stylesheet" href="assets/css/style.css" />
  {/*[if lt IE 9]>
			
			
		<![endif]*/}
  <div className="main-wrapper">
    
     <Header />
        <SideBar />
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">User Job Dashboard</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="admin-dashboard">Dashboard</a>
                </li>
                <li className="breadcrumb-item">Jobs</li>
                <li className="breadcrumb-item">User Dashboard</li>
                <li className="breadcrumb-item">User Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <ul className="nav nav-tabs nav-tabs-solid nav-justified">
              <li className="nav-item">
                <a className="nav-link active" href="user-dashboard">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="user-all-jobs">
                  All{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="saved-jobs">
                  Saved
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="applied-jobs">
                  Applied
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="interviewing">
                  Interviewing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="offered-jobs">
                  Offered
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="visited-jobs">
                  Visitied{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="archived-jobs">
                  Archived{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fa fa-file-text-o" />
                </span>
                <div className="dash-widget-info">
                  <h3>110</h3>
                  <span>Offered</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fa fa-clipboard" />
                </span>
                <div className="dash-widget-info">
                  <h3>40</h3>
                  <span>Applied</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fa fa-retweet" />
                </span>
                <div className="dash-widget-info">
                  <h3>374</h3>
                  <span>Visited</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
              <div className="card-body">
                <span className="dash-widget-icon">
                  <i className="fa fa-floppy-o" />
                </span>
                <div className="dash-widget-info">
                  <h3>220</h3>
                  <span>Saved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6 text-center d-flex">
                <div className="card flex-fill">
                  <div className="card-body">
                    <h3 className="card-title">Overview</h3>
                    <canvas id="lineChart" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex">
                <div className="card flex-fill">
                  <div className="card-body">
                    <h3 className="card-title text-center">Latest Jobs</h3>
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-action">
                        UI Developer{" "}
                        <span className="float-end text-sm text-muted">
                          1 Hours ago
                        </span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Android Developer{" "}
                        <span className="float-end text-sm text-muted">
                          1 Days ago
                        </span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        IOS Developer
                        <span className="float-end text-sm text-muted">
                          2 Days ago
                        </span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        PHP Developer
                        <span className="float-end text-sm text-muted">
                          3 Days ago
                        </span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        UI Developer
                        <span className="float-end text-sm text-muted">
                          3 Days ago
                        </span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        PHP Developer
                        <span className="float-end text-sm text-muted">
                          4 Days ago
                        </span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        UI Developer
                        <span className="float-end text-sm text-muted">
                          4 Days ago
                        </span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Android Developer
                        <span className="float-end text-sm text-muted">
                          6 Days ago
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-table">
              <div className="card-header">
                <h3 className="card-title mb-0">Offered Jobs</h3>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-nowrap custom-table mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Job Title</th>
                        <th>Department</th>
                        <th className="text-center">Job Type</th>
                        <th className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <a href="job-details">Web Developer</a>
                        </td>
                        <td>Development</td>
                        <td className="text-center">
                          <div className="action-label">
                            <a
                              className="btn btn-white btn-sm btn-rounded"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-danger" />{" "}
                              Full Time
                            </a>
                          </div>
                        </td>
                        <td className="text-center">
                          <a
                            href="#"
                            className="btn btn-sm btn-info download-offer"
                          >
                            <span>
                              <i className="fa fa-download me-1" /> Download
                              Offer
                            </span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <a href="job-details">Web Designer</a>
                        </td>
                        <td>Designing</td>
                        <td className="text-center">
                          <div className="action-label">
                            <a
                              className="btn btn-white btn-sm btn-rounded"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-success" />{" "}
                              Part Time
                            </a>
                          </div>
                        </td>
                        <td className="text-center">
                          <a
                            href="#"
                            className="btn btn-sm btn-info download-offer"
                          >
                            <span>
                              <i className="fa fa-download me-1" /> Download
                              Offer
                            </span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <a href="job-details">Android Developer</a>
                        </td>
                        <td>Android</td>
                        <td className="text-center">
                          <div className="action-label">
                            <a
                              className="btn btn-white btn-sm btn-rounded"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-danger" />{" "}
                              Internship
                            </a>
                          </div>
                        </td>
                        <td className="text-center">
                          <a
                            href="#"
                            className="btn btn-sm btn-info download-offer"
                          >
                            <span>
                              <i className="fa fa-download me-1" /> Download
                              Offer
                            </span>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-table">
              <div className="card-header">
                <h3 className="card-title mb-0">Applied Jobs</h3>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-nowrap custom-table mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Job Title</th>
                        <th>Department</th>
                        <th>Start Date</th>
                        <th>Expire Date</th>
                        <th className="text-center">Job Type</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <a href="job-details">Web Developer</a>
                        </td>
                        <td>Development</td>
                        <td>3 Mar 2019</td>
                        <td>31 May 2019</td>
                        <td className="text-center">
                          <div className="action-label">
                            <a
                              className="btn btn-white btn-sm btn-rounded"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-danger" />{" "}
                              Full Time
                            </a>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="action-label">
                            <a
                              className="btn btn-white btn-sm btn-rounded"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-danger" />{" "}
                              Open
                            </a>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="material-icons">more_vert</i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_employee"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <a href="job-details">Web Designer</a>
                        </td>
                        <td>Designing</td>
                        <td>3 Mar 2019</td>
                        <td>31 May 2019</td>
                        <td className="text-center">
                          <div className="action-label">
                            <a
                              className="btn btn-white btn-sm btn-rounded"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-success" />{" "}
                              Part Time
                            </a>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="action-label">
                            <a
                              className="btn btn-white btn-sm btn-rounded"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-success" />{" "}
                              Closed
                            </a>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="material-icons">more_vert</i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_employee"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <a href="job-details">Android Developer</a>
                        </td>
                        <td>Android</td>
                        <td>3 Mar 2019</td>
                        <td>31 May 2019</td>
                        <td className="text-center">
                          <div className="action-label">
                            <a
                              className="btn btn-white btn-sm btn-rounded"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-danger" />{" "}
                              Internship
                            </a>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="action-label">
                            <a
                              className="btn btn-white btn-sm btn-rounded"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-dot-circle-o text-danger" />{" "}
                              Cancelled
                            </a>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="dropdown dropdown-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="material-icons">more_vert</i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_employee"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/plugins/morris/morris.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/plugins/raphael/raphael.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/chart.js"></script>

      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/app.js"></script>
    </>
  );
}
