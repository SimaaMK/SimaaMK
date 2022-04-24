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
  <title>Shift &amp; Schedule - HRMS admin template</title>
  <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png" />
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
  <link rel="stylesheet" href="assets/css/line-awesome.min.css" />
  <link rel="stylesheet" href="assets/css/dataTables.bootstrap4.min.css" />
  <link rel="stylesheet" href="assets/css/select2.min.css" />
  <link rel="stylesheet" href="assets/css/bootstrap-datetimepicker.min.css" />
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
            <div className="col">
              <h3 className="page-title">Daily Scheduling</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="admin-dashboard">Dashboard</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="employees">Employees</a>
                </li>
                <li className="breadcrumb-item active">Shift Scheduling</li>
              </ul>
            </div>
            <div className="col-auto float-end ms-auto">
              <a href="shift-list" className="btn add-btn m-r-5">
                Shifts
              </a>
              <a
                href="#"
                className="btn add-btn m-r-5"
                data-bs-toggle="modal"
                data-bs-target="#add_schedule"
              >
                {" "}
                Assign Shifts
              </a>
            </div>
          </div>
        </div>
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">Employee</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus select-focus">
              <select className="select floating">
                <option>All Department</option>
                <option value={1}>Finance</option>
                <option value={2}>Finance and Management</option>
                <option value={3}>Hr &amp; Finance</option>
                <option value={4}>ITech</option>
              </select>
              <label className="focus-label">Department</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-2">
            <div className="form-group form-focus focused">
              <div className="cal-icon">
                <input
                  className="form-control floating datetimepicker"
                  type="text"
                />
              </div>
              <label className="focus-label">From</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-2">
            <div className="form-group form-focus focused">
              <div className="cal-icon">
                <input
                  className="form-control floating datetimepicker"
                  type="text"
                />
              </div>
              <label className="focus-label">To</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-2">
            <a href="#" className="btn btn-success w-100">
              {" "}
              Search{" "}
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table datatable">
                <thead>
                  <tr>
                    <th>Scheduled Shift</th>
                    <th>Fri 21</th>
                    <th>Sat 22</th>
                    <th>Sun 23</th>
                    <th>Mon 24</th>
                    <th>Tue 25</th>
                    <th>Wed 26</th>
                    <th>Thu 27</th>
                    <th>Fri 28</th>
                    <th>Sat 29</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                        </a>
                        <a href="profile">
                          John Doe <span>Web Designer</span>
                        </a>
                      </h2>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <h2>
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_schedule"
                            style={{ border: "2px dashed #1eb53a" }}
                          >
                            <span className="username-info m-b-10">
                              6:30 am - 9:30 pm ( 14 hrs 15 mins)
                            </span>
                            <span className="userrole-info">
                              Web Designer - SMARTHR
                            </span>
                          </a>
                        </h2>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <h2>
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_schedule"
                            style={{ border: "2px dashed #1eb53a" }}
                          >
                            <span className="username-info m-b-10">
                              6:30 am - 9:30 pm ( 14 hrs 15 mins)
                            </span>
                            <span className="userrole-info">
                              Web Designer - SMARTHR
                            </span>
                          </a>
                        </h2>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-09.jpg" />
                        </a>
                        <a href="profile">
                          Richard Miles <span>Web Developer</span>
                        </a>
                      </h2>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <h2>
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_schedule"
                            style={{ border: "2px dashed #1eb53a" }}
                          >
                            <span className="username-info m-b-10">
                              6:30 am - 9:30 pm ( 14 hrs 15 mins)
                            </span>
                            <span className="userrole-info">
                              Web Designer - SMARTHR
                            </span>
                          </a>
                        </h2>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <h2>
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_schedule"
                            style={{ border: "2px dashed #1eb53a" }}
                          >
                            <span className="username-info m-b-10">
                              6:30 am - 9:30 pm ( 14 hrs 15 mins)
                            </span>
                            <span className="userrole-info">
                              Web Designer - SMARTHR
                            </span>
                          </a>
                        </h2>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-10.jpg" />
                        </a>
                        <a href="profile">
                          John Smith <span>Android Developer</span>
                        </a>
                      </h2>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <h2>
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_schedule"
                            style={{ border: "2px dashed #1eb53a" }}
                          >
                            <span className="username-info m-b-10">
                              6:30 am - 9:30 pm ( 14 hrs 15 mins)
                            </span>
                            <span className="userrole-info">
                              Web Designer - SMARTHR
                            </span>
                          </a>
                        </h2>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <h2>
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_schedule"
                            style={{ border: "2px dashed #1eb53a" }}
                          >
                            <span className="username-info m-b-10">
                              6:30 am - 9:30 pm ( 14 hrs 15 mins)
                            </span>
                            <span className="userrole-info">
                              Web Designer - SMARTHR
                            </span>
                          </a>
                        </h2>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-05.jpg" />
                        </a>
                        <a href="profile">
                          Mike Litorus <span>IOS Developer</span>
                        </a>
                      </h2>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <h2>
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_schedule"
                            style={{ border: "2px dashed #1eb53a" }}
                          >
                            <span className="username-info m-b-10">
                              6:30 am - 9:30 pm ( 14 hrs 15 mins)
                            </span>
                            <span className="userrole-info">
                              Web Designer - SMARTHR
                            </span>
                          </a>
                        </h2>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <h2>
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_schedule"
                            style={{ border: "2px dashed #1eb53a" }}
                          >
                            <span className="username-info m-b-10">
                              6:30 am - 9:30 pm ( 14 hrs 15 mins)
                            </span>
                            <span className="userrole-info">
                              Web Designer - SMARTHR
                            </span>
                          </a>
                        </h2>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-11.jpg" />
                        </a>
                        <a href="profile">
                          Wilmer Deluna <span>Team Leader</span>
                        </a>
                      </h2>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <h2>
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_schedule"
                            style={{ border: "2px dashed #1eb53a" }}
                          >
                            <span className="username-info m-b-10">
                              6:30 am - 9:30 pm ( 14 hrs 15 mins)
                            </span>
                            <span className="userrole-info">
                              Web Designer - SMARTHR
                            </span>
                          </a>
                        </h2>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <h2>
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_schedule"
                            style={{ border: "2px dashed #1eb53a" }}
                          >
                            <span className="username-info m-b-10">
                              6:30 am - 9:30 pm ( 14 hrs 15 mins)
                            </span>
                            <span className="userrole-info">
                              Web Designer - SMARTHR
                            </span>
                          </a>
                        </h2>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-12.jpg" />
                        </a>
                        <a href="profile">
                          Jeffrey Warden <span>Web Developer</span>
                        </a>
                      </h2>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <h2>
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_schedule"
                            style={{ border: "2px dashed #1eb53a" }}
                          >
                            <span className="username-info m-b-10">
                              6:30 am - 9:30 pm ( 14 hrs 15 mins)
                            </span>
                            <span className="userrole-info">
                              Web Designer - SMARTHR
                            </span>
                          </a>
                        </h2>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <h2>
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_schedule"
                            style={{ border: "2px dashed #1eb53a" }}
                          >
                            <span className="username-info m-b-10">
                              6:30 am - 9:30 pm ( 14 hrs 15 mins)
                            </span>
                            <span className="userrole-info">
                              Web Designer - SMARTHR
                            </span>
                          </a>
                        </h2>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-13.jpg" />
                        </a>
                        <a href="profile">
                          Bernardo Galaviz <span>Web Developer</span>
                        </a>
                      </h2>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <h2>
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_schedule"
                            style={{ border: "2px dashed #1eb53a" }}
                          >
                            <span className="username-info m-b-10">
                              6:30 am - 9:30 pm ( 14 hrs 15 mins)
                            </span>
                            <span className="userrole-info">
                              Web Designer - SMARTHR
                            </span>
                          </a>
                        </h2>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <h2>
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_schedule"
                            style={{ border: "2px dashed #1eb53a" }}
                          >
                            <span className="username-info m-b-10">
                              6:30 am - 9:30 pm ( 14 hrs 15 mins)
                            </span>
                            <span className="userrole-info">
                              Web Designer - SMARTHR
                            </span>
                          </a>
                        </h2>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="user-add-shedule-list">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_schedule"
                        >
                          <span>
                            <i className="fa fa-plus" />
                          </span>
                        </a>
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
    <div id="add_schedule" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Schedule</h5>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Department <span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option value="">Select</option>
                      <option value="">Development</option>
                      <option value={1}>Finance</option>
                      <option value={2}>Finance and Management</option>
                      <option value={3}>Hr &amp; Finance</option>
                      <option value={4}>ITech</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Employee Name <span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option value="">Select </option>
                      <option value={1}>Richard Miles </option>
                      <option value={2}>John Smith</option>
                      <option value={3}>Mike Litorus </option>
                      <option value={4}>Wilmer Deluna</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">Date</label>
                    <div className="cal-icon">
                      <input
                        className="form-control datetimepicker"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Shifts <span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option value="">Select </option>
                      <option value={1}>10'o clock Shift</option>
                      <option value={2}>10:30 shift</option>
                      <option value={3}>Daily Shift </option>
                      <option value={4}>New Shift</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label className="col-form-label">
                      Min Start Time <span className="text-danger">*</span>
                    </label>
                    <div className="input-group time timepicker">
                      <input className="form-control" />
                      <span className="input-group-text">
                        <i className="fa fa-clock-o" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label className="col-form-label">
                      Start Time <span className="text-danger">*</span>
                    </label>
                    <div className="input-group time timepicker">
                      <input className="form-control" />
                      <span className="input-group-text">
                        <i className="fa fa-clock-o" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label className="col-form-label">
                      Max Start Time <span className="text-danger">*</span>
                    </label>
                    <div className="input-group time timepicker">
                      <input className="form-control" />
                      <span className="input-group-text">
                        <i className="fa fa-clock-o" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label className="col-form-label">
                      Min End Time <span className="text-danger">*</span>
                    </label>
                    <div className="input-group time timepicker">
                      <input className="form-control" />
                      <span className="input-group-text">
                        <i className="fa fa-clock-o" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label className="col-form-label">
                      End Time <span className="text-danger">*</span>
                    </label>
                    <div className="input-group time timepicker">
                      <input className="form-control" />
                      <span className="input-group-text">
                        <i className="fa fa-clock-o" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label className="col-form-label">
                      Max End Time <span className="text-danger">*</span>
                    </label>
                    <div className="input-group time timepicker">
                      <input className="form-control" />
                      <span className="input-group-text">
                        <i className="fa fa-clock-o" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label className="col-form-label">
                      Break Time <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label className="col-form-label">
                      Accept Extra Hours{" "}
                    </label>
                    <div className="form-check form-switch">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch1"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitch1"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label className="col-form-label">Publish </label>
                    <div className="form-check form-switch">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch2"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitch2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div id="edit_schedule" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Schedule</h5>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Department <span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option value="">Select</option>
                      <option selected="" value="">
                        Development
                      </option>
                      <option value={1}>Finance</option>
                      <option value={2}>Finance and Management</option>
                      <option value={3}>Hr &amp; Finance</option>
                      <option value={4}>ITech</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Employee Name <span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option value="">Select </option>
                      <option selected="" value={1}>
                        Richard Miles{" "}
                      </option>
                      <option value={2}>John Smith</option>
                      <option value={3}>Mike Litorus </option>
                      <option value={4}>Wilmer Deluna</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Date <span className="text-danger">*</span>
                    </label>
                    <div className="cal-icon">
                      <input
                        className="form-control datetimepicker"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      Shifts <span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option value="">Select </option>
                      <option value={1}>10'o clock Shift</option>
                      <option value={2}>10:30 shift</option>
                      <option value={3}>Daily Shift </option>
                      <option selected="" value={4}>
                        New Shift
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label className="col-form-label">
                      Min Start Time <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="06:11 am"
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label className="col-form-label">
                      Start Time <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="06:30 am"
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label className="col-form-label">
                      Max Start Time <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="08:12 am"
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label className="col-form-label">
                      Min End Time <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="09:12 pm"
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label className="col-form-label">
                      End Time <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="09:30 pm"
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label className="col-form-label">
                      Max End Time <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="09:45 pm"
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label className="col-form-label">
                      Break Time <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue={45}
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="custom-control form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheck1"
                    />
                    <label className="form-check-label" htmlFor="customCheck1">
                      Recurring Shift
                    </label>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label className="col-form-label">Repeat Every</label>
                    <select className="select">
                      <option value="">1 </option>
                      <option value={1}>2</option>
                      <option value={2}>3</option>
                      <option value={3}>4</option>
                      <option selected="" value={4}>
                        5
                      </option>
                      <option value={3}>6</option>
                    </select>
                    <label className="col-form-label">Week(s)</label>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group wday-box">
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        name="week_days[]"
                        defaultValue="monday"
                        className="days recurring"
                        defaultChecked=""
                        onclick="return false;"
                      />
                      <span className="checkmark">M</span>
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        name="week_days[]"
                        defaultValue="tuesday"
                        className="days recurring"
                        defaultChecked=""
                        onclick="return false;"
                      />
                      <span className="checkmark">T</span>
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        name="week_days[]"
                        defaultValue="wednesday"
                        className="days recurring"
                        defaultChecked=""
                        onclick="return false;"
                      />
                      <span className="checkmark">W</span>
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        name="week_days[]"
                        defaultValue="thursday"
                        className="days recurring"
                        defaultChecked=""
                        onclick="return false;"
                      />
                      <span className="checkmark">T</span>
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        name="week_days[]"
                        defaultValue="friday"
                        className="days recurring"
                        defaultChecked=""
                        onclick="return false;"
                      />
                      <span className="checkmark">F</span>
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        name="week_days[]"
                        defaultValue="saturday"
                        className="days recurring"
                        onclick="return false;"
                      />
                      <span className="checkmark">S</span>
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        name="week_days[]"
                        defaultValue="sunday"
                        className="days recurring"
                        onclick="return false;"
                      />
                      <span className="checkmark">S</span>
                    </label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="col-form-label">
                      End On <span className="text-danger">*</span>
                    </label>
                    <div className="cal-icon">
                      <input
                        className="form-control datetimepicker"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="custom-control form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheck2"
                    />
                    <label className="form-check-label" htmlFor="customCheck2">
                      Indefinite
                    </label>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label className="col-form-label">
                      Accept Extra Hours{" "}
                    </label>
                    <div className="form-check form-switch">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch3"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitch3"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label className="col-form-label">Publish </label>
                    <div className="form-check form-switch">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch4"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customSwitch4"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Submit</button>
              </div>
            </form>
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

