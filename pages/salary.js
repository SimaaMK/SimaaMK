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
  <title>Salary - HRMS admin template</title>
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
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Employee Salary</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="admin-dashboard">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Salary</li>
              </ul>
            </div>
            <div className="col-auto float-end ms-auto">
              <a
                href="#"
                className="btn add-btn"
                data-bs-toggle="modal"
                data-bs-target="#add_salary"
              >
                <i className="fa fa-plus" /> Add Salary
              </a>
            </div>
          </div>
        </div>
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">Employee Name</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus select-focus">
              <select className="select floating">
                <option value=""> -- Select -- </option>
                <option value="">Employee</option>
                <option value={1}>Manager</option>
              </select>
              <label className="focus-label">Role</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus select-focus">
              <select className="select floating">
                <option> -- Select -- </option>
                <option> Pending </option>
                <option> Approved </option>
                <option> Rejected </option>
              </select>
              <label className="focus-label">Leave Status</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus">
              <div className="cal-icon">
                <input
                  className="form-control floating datetimepicker"
                  type="text"
                />
              </div>
              <label className="focus-label">From</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
            <div className="form-group form-focus">
              <div className="cal-icon">
                <input
                  className="form-control floating datetimepicker"
                  type="text"
                />
              </div>
              <label className="focus-label">To</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
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
                    <th>Employee</th>
                    <th>Employee ID</th>
                    <th>Email</th>
                    <th>Join Date</th>
                    <th>Role</th>
                    <th>Salary</th>
                    <th>Payslip</th>
                    <th className="text-end">Action</th>
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
                    <td>FT-0001</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="52383d3a3c363d3712372a333f223e377c313d3f"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>1 Jan 2013</td>
                    <td>
                      <div className="dropdown">
                        <a
                          href=""
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Web Designer{" "}
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Software Engineer
                          </a>
                          <a className="dropdown-item" href="#">
                            Software Tester
                          </a>
                          <a className="dropdown-item" href="#">
                            Frontend Developer
                          </a>
                          <a className="dropdown-item" href="#">
                            UI/UX Developer
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>$59698</td>
                    <td>
                      <a
                        className="btn btn-sm btn-primary"
                        href="salary-view"
                      >
                        Generate Slip
                      </a>
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
                            data-bs-target="#edit_salary"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_salary"
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
                          <img src="assets/img/profiles/avatar-09.jpg" alt="" />
                        </a>
                        <a href="profile">
                          Richard Miles <span>Web Developer</span>
                        </a>
                      </h2>
                    </td>
                    <td>FT-0002</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="6d1f040e050c1f09000401081e2d08150c001d0108430e0200"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>1 Jan 2013</td>
                    <td>
                      <div className="dropdown">
                        <a
                          href=""
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Web Developer{" "}
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Software Engineer
                          </a>
                          <a className="dropdown-item" href="#">
                            Software Tester
                          </a>
                          <a className="dropdown-item" href="#">
                            Frontend Developer
                          </a>
                          <a className="dropdown-item" href="#">
                            UI/UX Developer
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>$72000</td>
                    <td>
                      <a
                        className="btn btn-sm btn-primary"
                        href="salary-view"
                      >
                        Generate Slip
                      </a>
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
                            data-bs-target="#edit_salary"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_salary"
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
                          <img src="assets/img/profiles/avatar-10.jpg" alt="" />
                        </a>
                        <a href="profile">
                          John Smith <span>Android Developer</span>
                        </a>
                      </h2>
                    </td>
                    <td>FT-0003</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="88e2e7e0e6fbe5e1fce0c8edf0e9e5f8e4eda6ebe7e5"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>1 Jan 2013</td>
                    <td>
                      <div className="dropdown">
                        <a
                          href=""
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Android Developer{" "}
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Software Engineer
                          </a>
                          <a className="dropdown-item" href="#">
                            Software Tester
                          </a>
                          <a className="dropdown-item" href="#">
                            Frontend Developer
                          </a>
                          <a className="dropdown-item" href="#">
                            UI/UX Developer
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>$48200</td>
                    <td>
                      <a
                        className="btn btn-sm btn-primary"
                        href="salary-view"
                      >
                        Generate Slip
                      </a>
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
                            data-bs-target="#edit_salary"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_salary"
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
                          <img src="assets/img/profiles/avatar-05.jpg" alt="" />
                        </a>
                        <a href="profile">
                          Mike Litorus <span>IOS Developer</span>
                        </a>
                      </h2>
                    </td>
                    <td>FT-0004</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="64090d0f01080d100b16111724011c05091408014a070b09"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>1 Jan 2013</td>
                    <td>
                      <div className="dropdown">
                        <a
                          href=""
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          IOS Developer{" "}
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Software Engineer
                          </a>
                          <a className="dropdown-item" href="#">
                            Software Tester
                          </a>
                          <a className="dropdown-item" href="#">
                            Frontend Developer
                          </a>
                          <a className="dropdown-item" href="#">
                            UI/UX Developer
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>$59698</td>
                    <td>
                      <a
                        className="btn btn-sm btn-primary"
                        href="salary-view"
                      >
                        Generate Slip
                      </a>
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
                            data-bs-target="#edit_salary"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_salary"
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
                          <img src="assets/img/profiles/avatar-11.jpg" alt="" />
                        </a>
                        <a href="profile">
                          Wilmer Deluna <span>Team Leader</span>
                        </a>
                      </h2>
                    </td>
                    <td>FT-0005</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="daadb3b6b7bfa8bebfb6afb4bb9abfa2bbb7aab6bff4b9b5b7"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>1 Jan 2013</td>
                    <td>
                      <div className="dropdown">
                        <a
                          href=""
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Team Leader{" "}
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Software Engineer
                          </a>
                          <a className="dropdown-item" href="#">
                            Software Tester
                          </a>
                          <a className="dropdown-item" href="#">
                            Frontend Developer
                          </a>
                          <a className="dropdown-item" href="#">
                            UI/UX Developer
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>$43000</td>
                    <td>
                      <a
                        className="btn btn-sm btn-primary"
                        href="salary-view"
                      >
                        Generate Slip
                      </a>
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
                            data-bs-target="#edit_salary"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_salary"
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
                          <img src="assets/img/profiles/avatar-12.jpg" alt="" />
                        </a>
                        <a href="profile">
                          Jeffrey Warden <span>Web Developer</span>
                        </a>
                      </h2>
                    </td>
                    <td>FT-0006</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="90faf5f6f6e2f5e9e7f1e2f4f5fed0f5e8f1fde0fcf5bef3fffd"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>1 Jan 2013</td>
                    <td>
                      <div className="dropdown">
                        <a
                          href=""
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Web Developer
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Software Engineer
                          </a>
                          <a className="dropdown-item" href="#">
                            Software Tester
                          </a>
                          <a className="dropdown-item" href="#">
                            Frontend Developer
                          </a>
                          <a className="dropdown-item" href="#">
                            UI/UX Developer
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>$45000</td>
                    <td>
                      <a
                        className="btn btn-sm btn-primary"
                        href="salary-view"
                      >
                        Generate Slip
                      </a>
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
                            data-bs-target="#edit_salary"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_salary"
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
                          <img src="assets/img/profiles/avatar-13.jpg" alt="" />
                        </a>
                        <a href="profile">
                          Bernardo Galaviz <span>Web Developer</span>
                        </a>
                      </h2>
                    </td>
                    <td>FT-0007</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="46242334282734222921272a27302f3c06233e272b362a236825292b"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>1 Jan 2014</td>
                    <td>
                      <div className="dropdown">
                        <a
                          href=""
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Web Developer{" "}
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Software Engineer
                          </a>
                          <a className="dropdown-item" href="#">
                            Software Tester
                          </a>
                          <a className="dropdown-item" href="#">
                            Frontend Developer
                          </a>
                          <a className="dropdown-item" href="#">
                            UI/UX Developer
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>$38400</td>
                    <td>
                      <a
                        className="btn btn-sm btn-primary"
                        href="salary-view"
                      >
                        Generate Slip
                      </a>
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
                            data-bs-target="#edit_salary"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_salary"
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
                          <img src="assets/img/profiles/avatar-01.jpg" alt="" />
                        </a>
                        <a href="profile">
                          Lesley Grauer <span>Team Leader</span>
                        </a>
                      </h2>
                    </td>
                    <td>FT-0008</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="325e57415e574b55405347574072574a535f425e571c515d5f"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>1 Jun 2015</td>
                    <td>
                      <div className="dropdown">
                        <a
                          href=""
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Team Leader{" "}
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Software Engineer
                          </a>
                          <a className="dropdown-item" href="#">
                            Software Tester
                          </a>
                          <a className="dropdown-item" href="#">
                            Frontend Developer
                          </a>
                          <a className="dropdown-item" href="#">
                            UI/UX Developer
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>$75500</td>
                    <td>
                      <a
                        className="btn btn-sm btn-primary"
                        href="salary-view"
                      >
                        Generate Slip
                      </a>
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
                            data-bs-target="#edit_salary"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_salary"
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
                          <img src="assets/img/profiles/avatar-16.jpg" alt="" />
                        </a>
                        <a href="profile">
                          Jeffery Lalor <span>Team Leader</span>
                        </a>
                      </h2>
                    </td>
                    <td>FT-0009</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="94fef1f2f2f1e6edf8f5f8fbe6d4f1ecf5f9e4f8f1baf7fbf9"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>1 Jan 2013</td>
                    <td>
                      <div className="dropdown">
                        <a
                          href=""
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Team Leader{" "}
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Software Engineer
                          </a>
                          <a className="dropdown-item" href="#">
                            Software Tester
                          </a>
                          <a className="dropdown-item" href="#">
                            Frontend Developer
                          </a>
                          <a className="dropdown-item" href="#">
                            UI/UX Developer
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>$73550</td>
                    <td>
                      <a
                        className="btn btn-sm btn-primary"
                        href="salary-view"
                      >
                        Generate Slip
                      </a>
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
                            data-bs-target="#edit_salary"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_salary"
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
                          <img src="assets/img/profiles/avatar-04.jpg" alt="" />
                        </a>
                        <a href="profile">
                          Loren Gatlin <span>Android Developer</span>
                        </a>
                      </h2>
                    </td>
                    <td>FT-0010</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="e28e8d90878c8583968e8b8ca2879a838f928e87cc818d8f"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>1 Jan 2013</td>
                    <td>
                      <div className="dropdown">
                        <a
                          href=""
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Android Developer{" "}
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Software Engineer
                          </a>
                          <a className="dropdown-item" href="#">
                            Software Tester
                          </a>
                          <a className="dropdown-item" href="#">
                            Frontend Developer
                          </a>
                          <a className="dropdown-item" href="#">
                            UI/UX Developer
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>$55000</td>
                    <td>
                      <a
                        className="btn btn-sm btn-primary"
                        href="salary-view"
                      >
                        Generate Slip
                      </a>
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
                            data-bs-target="#edit_salary"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_salary"
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
                          <img src="assets/img/profiles/avatar-03.jpg" alt="" />
                        </a>
                        <a href="profile">
                          Tarah Shropshire <span>Android Developer</span>
                        </a>
                      </h2>
                    </td>
                    <td>FT-0011</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="daaebba8bbb2a9b2a8b5aaa9b2b3a8bf9abfa2bbb7aab6bff4b9b5b7"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>1 Jan 2013</td>
                    <td>
                      <div className="dropdown">
                        <a
                          href=""
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Android Developer{" "}
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Software Engineer
                          </a>
                          <a className="dropdown-item" href="#">
                            Software Tester
                          </a>
                          <a className="dropdown-item" href="#">
                            Frontend Developer
                          </a>
                          <a className="dropdown-item" href="#">
                            UI/UX Developer
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>$92400</td>
                    <td>
                      <a
                        className="btn btn-sm btn-primary"
                        href="salary-view"
                      >
                        Generate Slip
                      </a>
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
                            data-bs-target="#edit_salary"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_salary"
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
      <div id="add_salary" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Staff Salary</h5>
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
                      <label>Select Staff</label>
                      <select className="select">
                        <option>John Doe</option>
                        <option>Richard Miles</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label>Net Salary</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <h4 className="text-primary">Earnings</h4>
                    <div className="form-group">
                      <label>Basic</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>DA(40%)</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>HRA(15%)</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>Conveyance</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>Allowance</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>Medical Allowance</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>Others</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="add-more">
                      <a href="#">
                        <i className="fa fa-plus-circle" /> Add More
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h4 className="text-primary">Deductions</h4>
                    <div className="form-group">
                      <label>TDS</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>ESI</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>PF</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>Leave</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>Prof. Tax</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>Labour Welfare</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>Others</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="add-more">
                      <a href="#">
                        <i className="fa fa-plus-circle" /> Add More
                      </a>
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
      <div id="edit_salary" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-md"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Staff Salary</h5>
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
                      <label>Select Staff</label>
                      <select className="select">
                        <option>John Doe</option>
                        <option>Richard Miles</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label>Net Salary</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="$4000"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <h4 className="text-primary">Earnings</h4>
                    <div className="form-group">
                      <label>Basic</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$6500"
                      />
                    </div>
                    <div className="form-group">
                      <label>DA(40%)</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$2000"
                      />
                    </div>
                    <div className="form-group">
                      <label>HRA(15%)</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$700"
                      />
                    </div>
                    <div className="form-group">
                      <label>Conveyance</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$70"
                      />
                    </div>
                    <div className="form-group">
                      <label>Allowance</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$30"
                      />
                    </div>
                    <div className="form-group">
                      <label>Medical Allowance</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$20"
                      />
                    </div>
                    <div className="form-group">
                      <label>Others</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h4 className="text-primary">Deductions</h4>
                    <div className="form-group">
                      <label>TDS</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$300"
                      />
                    </div>
                    <div className="form-group">
                      <label>ESI</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$20"
                      />
                    </div>
                    <div className="form-group">
                      <label>PF</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$20"
                      />
                    </div>
                    <div className="form-group">
                      <label>Leave</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$250"
                      />
                    </div>
                    <div className="form-group">
                      <label>Prof. Tax</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$110"
                      />
                    </div>
                    <div className="form-group">
                      <label>Labour Welfare</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$10"
                      />
                    </div>
                    <div className="form-group">
                      <label>Fund</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$40"
                      />
                    </div>
                    <div className="form-group">
                      <label>Others</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="$15"
                      />
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal custom-modal fade" id="delete_salary" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Salary</h3>
                <p>Are you sure want to delete?</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="row">
                  <div className="col-6">
                    <a href="#" className="btn btn-primary continue-btn">
                      Delete
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      href="#"
                      data-bs-dismiss="modal"
                      className="btn btn-primary cancel-btn"
                    >
                      Cancel
                    </a>
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
