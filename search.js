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
  <title>Search Results - HRMS admin template</title>
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
              <h3 className="page-title">Search</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="admin-dashboard">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Search</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="main-search">
              <form action="#">
                <div className="input-group">
                  <input type="text" className="form-control" />
                  <button className="btn btn-primary" type="button">
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="search-result">
              <h3>
                Search Result Found For: <u>Keyword</u>
              </h3>
              <p>215 Results found</p>
            </div>
            <div className="search-lists">
              <ul className="nav nav-tabs nav-tabs-solid">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#results_projects"
                    data-bs-toggle="tab"
                  >
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#results_clients"
                    data-bs-toggle="tab"
                  >
                    Clients
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#results_users"
                    data-bs-toggle="tab"
                  >
                    Users
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane show active" id="results_projects">
                  <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="dropdown dropdown-action profile-action">
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
                                data-bs-target="#edit_project"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_project"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                          <h4 className="project-title">
                            <a href="project-view">Office Management</a>
                          </h4>
                          <small className="block text-ellipsis m-b-15">
                            <span className="text-xs">1</span>{" "}
                            <span className="text-muted">open tasks, </span>
                            <span className="text-xs">9</span>{" "}
                            <span className="text-muted">tasks completed</span>
                          </small>
                          <p className="text-muted">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. When an unknown printer took a
                            galley of type and scrambled it...
                          </p>
                          <div className="pro-deadline m-b-15">
                            <div className="sub-title">Deadline:</div>
                            <div className="text-muted">17 Apr 2019</div>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Project Leader :</div>
                            <ul className="team-members">
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  title="Jeffery Lalor"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-16.jpg"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Team :</div>
                            <ul className="team-members">
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  title="John Doe"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-02.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  title="Richard Miles"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-09.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  title="John Smith"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-10.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  title="Mike Litorus"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-05.jpg"
                                  />
                                </a>
                              </li>
                              <li className="dropdown avatar-dropdown">
                                <a
                                  href="#"
                                  className="all-users dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  +15
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <div className="avatar-group">
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-02.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-09.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-10.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-05.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-11.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-12.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-13.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-01.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-16.jpg"
                                      />
                                    </a>
                                  </div>
                                  <div className="avatar-pagination">
                                    <ul className="pagination">
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Previous"
                                        >
                                          <span aria-hidden="true">«</span>
                                          <span className="visually-hidden">
                                            Previous
                                          </span>
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          1
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          2
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Next"
                                        >
                                          <span aria-hidden="true">»</span>
                                          <span className="visually-hidden">
                                            Next
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <p className="m-b-5">
                            Progress{" "}
                            <span className="text-success float-end">40%</span>
                          </p>
                          <div className="progress progress-xs mb-0">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              data-bs-toggle="tooltip"
                              title="40%"
                              style={{ width: "40%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="dropdown dropdown-action profile-action">
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
                                data-bs-target="#edit_project"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_project"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                          <h4 className="project-title">
                            <a href="project-view">Project Management</a>
                          </h4>
                          <small className="block text-ellipsis m-b-15">
                            <span className="text-xs">2</span>{" "}
                            <span className="text-muted">open tasks, </span>
                            <span className="text-xs">5</span>{" "}
                            <span className="text-muted">tasks completed</span>
                          </small>
                          <p className="text-muted">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. When an unknown printer took a
                            galley of type and scrambled it...
                          </p>
                          <div className="pro-deadline m-b-15">
                            <div className="sub-title">Deadline:</div>
                            <div className="text-muted">17 Apr 2019</div>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Project Leader :</div>
                            <ul className="team-members">
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  title="Jeffery Lalor"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-16.jpg"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Team :</div>
                            <ul className="team-members">
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  title="John Doe"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-02.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  title="Richard Miles"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-09.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  title="John Smith"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-10.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  title="Mike Litorus"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-05.jpg"
                                  />
                                </a>
                              </li>
                              <li className="dropdown avatar-dropdown">
                                <a
                                  href="#"
                                  className="all-users dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  +15
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <div className="avatar-group">
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-02.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-09.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-10.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-05.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-11.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-12.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-13.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-01.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-16.jpg"
                                      />
                                    </a>
                                  </div>
                                  <div className="avatar-pagination">
                                    <ul className="pagination">
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Previous"
                                        >
                                          <span aria-hidden="true">«</span>
                                          <span className="visually-hidden">
                                            Previous
                                          </span>
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          1
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          2
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Next"
                                        >
                                          <span aria-hidden="true">»</span>
                                          <span className="visually-hidden">
                                            Next
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <p className="m-b-5">
                            Progress{" "}
                            <span className="text-success float-end">40%</span>
                          </p>
                          <div className="progress progress-xs mb-0">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              data-bs-toggle="tooltip"
                              title="40%"
                              style={{ width: "40%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="dropdown dropdown-action profile-action">
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
                                data-bs-target="#edit_project"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_project"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                          <h4 className="project-title">
                            <a href="project-view">Video Calling App</a>
                          </h4>
                          <small className="block text-ellipsis m-b-15">
                            <span className="text-xs">3</span>{" "}
                            <span className="text-muted">open tasks, </span>
                            <span className="text-xs">3</span>{" "}
                            <span className="text-muted">tasks completed</span>
                          </small>
                          <p className="text-muted">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. When an unknown printer took a
                            galley of type and scrambled it...
                          </p>
                          <div className="pro-deadline m-b-15">
                            <div className="sub-title">Deadline:</div>
                            <div className="text-muted">17 Apr 2019</div>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Project Leader :</div>
                            <ul className="team-members">
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  title="Jeffery Lalor"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-16.jpg"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Team :</div>
                            <ul className="team-members">
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  title="John Doe"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-02.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  title="Richard Miles"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-09.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  title="John Smith"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-10.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  title="Mike Litorus"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-05.jpg"
                                  />
                                </a>
                              </li>
                              <li className="dropdown avatar-dropdown">
                                <a
                                  href="#"
                                  className="all-users dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  +15
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <div className="avatar-group">
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-02.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-09.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-10.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-05.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-11.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-12.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-13.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-01.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-16.jpg"
                                      />
                                    </a>
                                  </div>
                                  <div className="avatar-pagination">
                                    <ul className="pagination">
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Previous"
                                        >
                                          <span aria-hidden="true">«</span>
                                          <span className="visually-hidden">
                                            Previous
                                          </span>
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          1
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          2
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Next"
                                        >
                                          <span aria-hidden="true">»</span>
                                          <span className="visually-hidden">
                                            Next
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <p className="m-b-5">
                            Progress{" "}
                            <span className="text-success float-end">40%</span>
                          </p>
                          <div className="progress progress-xs mb-0">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              data-bs-toggle="tooltip"
                              title="40%"
                              style={{ width: "40%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="dropdown dropdown-action profile-action">
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
                                data-bs-target="#edit_project"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_project"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                          <h4 className="project-title">
                            <a href="project-view">
                              Hospital Administration
                            </a>
                          </h4>
                          <small className="block text-ellipsis m-b-15">
                            <span className="text-xs">12</span>{" "}
                            <span className="text-muted">open tasks, </span>
                            <span className="text-xs">4</span>{" "}
                            <span className="text-muted">tasks completed</span>
                          </small>
                          <p className="text-muted">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. When an unknown printer took a
                            galley of type and scrambled it...
                          </p>
                          <div className="pro-deadline m-b-15">
                            <div className="sub-title">Deadline:</div>
                            <div className="text-muted">17 Apr 2019</div>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Project Leader :</div>
                            <ul className="team-members">
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  title="Jeffery Lalor"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-16.jpg"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Team :</div>
                            <ul className="team-members">
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  title="John Doe"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-02.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  title="Richard Miles"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-09.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  title="John Smith"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-10.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  title="Mike Litorus"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-05.jpg"
                                  />
                                </a>
                              </li>
                              <li className="dropdown avatar-dropdown">
                                <a
                                  href="#"
                                  className="all-users dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  +15
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <div className="avatar-group">
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-02.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-09.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-10.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-05.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-11.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-12.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-13.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-01.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-16.jpg"
                                      />
                                    </a>
                                  </div>
                                  <div className="avatar-pagination">
                                    <ul className="pagination">
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Previous"
                                        >
                                          <span aria-hidden="true">«</span>
                                          <span className="visually-hidden">
                                            Previous
                                          </span>
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          1
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          2
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Next"
                                        >
                                          <span aria-hidden="true">»</span>
                                          <span className="visually-hidden">
                                            Next
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <p className="m-b-5">
                            Progress{" "}
                            <span className="text-success float-end">40%</span>
                          </p>
                          <div className="progress progress-xs mb-0">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              data-bs-toggle="tooltip"
                              title="40%"
                              style={{ width: "40%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="results_clients">
                  <div className="row staff-grid-row">
                    <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                      <div className="profile-widget">
                        <div className="profile-img">
                          <a href="client-profile" className="avatar">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-19.jpg"
                            />
                          </a>
                        </div>
                        <div className="dropdown profile-action">
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
                              data-bs-target="#edit_client"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_client"
                            >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                            </a>
                          </div>
                        </div>
                        <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile">Global Technologies</a>
                        </h4>
                        <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile">Barry Cuda</a>
                        </h5>
                        <div className="small text-muted">CEO</div>
                        <a
                          href="chat"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          Message
                        </a>
                        <a
                          href="client-profile"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                      <div className="profile-widget">
                        <div className="profile-img">
                          <a href="client-profile" className="avatar">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-29.jpg"
                            />
                          </a>
                        </div>
                        <div className="dropdown profile-action">
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
                              data-bs-target="#edit_client"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_client"
                            >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                            </a>
                          </div>
                        </div>
                        <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile">Delta Infotech</a>
                        </h4>
                        <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile">Tressa Wexler</a>
                        </h5>
                        <div className="small text-muted">Manager</div>
                        <a
                          href="chat"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          Message
                        </a>
                        <a
                          href="client-profile"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                      <div className="profile-widget">
                        <div className="profile-img">
                          <a href="client-profile" className="avatar">
                            <img
                              src="assets/img/profiles/avatar-07.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="dropdown profile-action">
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
                              data-bs-target="#edit_client"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_client"
                            >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                            </a>
                          </div>
                        </div>
                        <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile">Cream Inc</a>
                        </h4>
                        <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile">Ruby Bartlett</a>
                        </h5>
                        <div className="small text-muted">CEO</div>
                        <a
                          href="chat"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          Message
                        </a>
                        <a
                          href="client-profile"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                      <div className="profile-widget">
                        <div className="profile-img">
                          <a href="client-profile" className="avatar">
                            <img
                              src="assets/img/profiles/avatar-06.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="dropdown profile-action">
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
                              data-bs-target="#edit_client"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_client"
                            >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                            </a>
                          </div>
                        </div>
                        <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile">Wellware Company</a>
                        </h4>
                        <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile">Misty Tison</a>
                        </h5>
                        <div className="small text-muted">CEO</div>
                        <a
                          href="chat"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          Message
                        </a>
                        <a
                          href="client-profile"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                      <div className="profile-widget">
                        <div className="profile-img">
                          <a href="client-profile" className="avatar">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-14.jpg"
                            />
                          </a>
                        </div>
                        <div className="dropdown profile-action">
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
                              data-bs-target="#edit_client"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_client"
                            >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                            </a>
                          </div>
                        </div>
                        <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile">Mustang Technologies</a>
                        </h4>
                        <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile">Daniel Deacon</a>
                        </h5>
                        <div className="small text-muted">CEO</div>
                        <a
                          href="chat"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          Message
                        </a>
                        <a
                          href="client-profile"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                      <div className="profile-widget">
                        <div className="profile-img">
                          <a href="client-profile" className="avatar">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-18.jpg"
                            />
                          </a>
                        </div>
                        <div className="dropdown profile-action">
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
                              data-bs-target="#edit_client"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_client"
                            >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                            </a>
                          </div>
                        </div>
                        <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile">
                            International Software Inc
                          </a>
                        </h4>
                        <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile">Walter Weaver</a>
                        </h5>
                        <div className="small text-muted">CEO</div>
                        <a
                          href="chat"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          Message
                        </a>
                        <a
                          href="client-profile"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                      <div className="profile-widget">
                        <div className="profile-img">
                          <a href="client-profile" className="avatar">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-28.jpg"
                            />
                          </a>
                        </div>
                        <div className="dropdown profile-action">
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
                              data-bs-target="#edit_client"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_client"
                            >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                            </a>
                          </div>
                        </div>
                        <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile">Mercury Software Inc</a>
                        </h4>
                        <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile">Amanda Warren</a>
                        </h5>
                        <div className="small text-muted">CEO</div>
                        <a
                          href="chat"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          Message
                        </a>
                        <a
                          href="client-profile"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                      <div className="profile-widget">
                        <div className="profile-img">
                          <a href="client-profile" className="avatar">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-13.jpg"
                            />
                          </a>
                        </div>
                        <div className="dropdown profile-action">
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
                              data-bs-target="#edit_client"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_client"
                            >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                            </a>
                          </div>
                        </div>
                        <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile">Carlson Tech</a>
                        </h4>
                        <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile">Betty Carlson</a>
                        </h5>
                        <div className="small text-muted">CEO</div>
                        <a
                          href="chat"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          Message
                        </a>
                        <a
                          href="client-profile"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="results_users">
                  <div className="table-responsive">
                    <table className="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Company</th>
                          <th>Created Date</th>
                          <th>Role</th>
                          <th className="text-end">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile" className="avatar">
                                <img
                                  src="assets/img/profiles/avatar-21.jpg"
                                  alt=""
                                />
                              </a>
                              <a href="profile">
                                Daniel Porter <span>Admin</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <a
                              href="/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="eb8f8a85828e879b84999f8e99ab8e938a869b878ec5888486"
                            >
                              [email&nbsp;protected]
                            </a>
                          </td>
                          <td>Dreamguy's Technologies</td>
                          <td>1 Jan 2013</td>
                          <td>
                            <span className="badge bg-inverse-danger">
                              Admin
                            </span>
                          </td>
                          <td className="text-end">
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
                                  data-bs-target="#edit_user"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_user"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-02.jpg"
                                />
                              </a>
                              <a href="profile">
                                John Doe <span>Web Designer</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <a
                              href="/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="87ede8efe9e3e8e2c7e2ffe6eaf7ebe2a9e4e8ea"
                            >
                              [email&nbsp;protected]
                            </a>
                          </td>
                          <td>Dreamguy's Technologies</td>
                          <td>1 Jan 2013</td>
                          <td>
                            <span className="badge bg-inverse-success">
                              Employee
                            </span>
                          </td>
                          <td className="text-end">
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
                                  data-bs-target="#edit_user"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_user"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-09.jpg"
                                />
                              </a>
                              <a href="profile">
                                Richard Miles <span>Admin</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <a
                              href="/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="493b202a21283b2d2420252c3a092c31282439252c672a2624"
                            >
                              [email&nbsp;protected]
                            </a>
                          </td>
                          <td>Dreamguy's Technologies</td>
                          <td>1 Jan 2013</td>
                          <td>
                            <span className="badge bg-inverse-success">
                              Employee
                            </span>
                          </td>
                          <td className="text-end">
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
                                  data-bs-target="#edit_user"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_user"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-10.jpg"
                                />
                              </a>
                              <a href="profile">
                                John Smith <span>Android Developer</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <a
                              href="/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="a2c8cdcaccd1cfcbd6cae2c7dac3cfd2cec78cc1cdcf"
                            >
                              [email&nbsp;protected]
                            </a>
                          </td>
                          <td>Dreamguy's Technologies</td>
                          <td>1 Jan 2013</td>
                          <td>
                            <span className="badge bg-inverse-success">
                              Employee
                            </span>
                          </td>
                          <td className="text-end">
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
                                  data-bs-target="#edit_user"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_user"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-05.jpg"
                                />
                              </a>
                              <a href="profile">
                                Mike Litorus <span>IOS Developer</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <a
                              href="/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="93fefaf8f6fffae7fce1e6e0d3f6ebf2fee3fff6bdf0fcfe"
                            >
                              [email&nbsp;protected]
                            </a>
                          </td>
                          <td>Dreamguy's Technologies</td>
                          <td>1 Jan 2013</td>
                          <td>
                            <span className="badge bg-inverse-success">
                              Employee
                            </span>
                          </td>
                          <td className="text-end">
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
                                  data-bs-target="#edit_user"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_user"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-11.jpg"
                                />
                              </a>
                              <a href="profile">
                                Wilmer Deluna <span>Team Leader</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <a
                              href="/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="77001e1b1a120513121b02191637120f161a071b125914181a"
                            >
                              [email&nbsp;protected]
                            </a>
                          </td>
                          <td>Dreamguy's Technologies</td>
                          <td>1 Jan 2013</td>
                          <td>
                            <span className="badge bg-inverse-success">
                              Employee
                            </span>
                          </td>
                          <td className="text-end">
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
                                  data-bs-target="#edit_user"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_user"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile" className="avatar">
                                <img
                                  src="assets/img/profiles/avatar-19.jpg"
                                  alt=""
                                />
                              </a>
                              <a href="profile">
                                Barry Cuda <span>Global Technologies</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <a
                              href="/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="7d1f1c0f0f041e08191c3d18051c100d1118531e1210"
                            >
                              [email&nbsp;protected]
                            </a>
                          </td>
                          <td>Global Technologies</td>
                          <td>1 Jan 2013</td>
                          <td>
                            <span className="badge bg-inverse-info">
                              Client
                            </span>
                          </td>
                          <td className="text-end">
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
                                  data-bs-target="#edit_user"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_user"
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
  </div>
<script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/plugins/morris/morris.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/plugins/raphael/raphael.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/chart.js"></script>

      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/app.js"></script>
    </>
  );
}

