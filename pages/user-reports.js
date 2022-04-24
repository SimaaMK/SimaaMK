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
  <title>Reports- HRMS admin template</title>
  <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png" />
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
  <link rel="stylesheet" href="assets/css/line-awesome.min.css" />
  <link rel="stylesheet" href="assets/css/select2.min.css" />
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
              <h3 className="page-title">User Report</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="admin-dashboard">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">User Reports</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <div className="cal-icon">
                <select className="form-control floating select">
                  <option>Name1</option>
                  <option>Name2</option>
                </select>
              </div>
              <label className="focus-label">User Role</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <a href="#" className="btn btn-success w-100">
              {" "}
              Search{" "}
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table mb-0 datatable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Designation</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile" className="avatar">
                          <img src="assets/img/profiles/avatar-19.jpg" alt="" />
                        </a>
                        <a href="profile">
                          Barry Cuda <span>Global Technologies</span>
                        </a>
                      </h2>
                    </td>
                    <td>Global Technologies</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="197b786b6b607a6c7d78597c61787469757c377a7674"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>
                      <span className="badge bg-inverse-info">Client</span>
                    </td>
                    <td>CEO</td>
                    <td>
                      <div className="dropdown action-label">
                        <a
                          href="#"
                          className="btn btn-white btn-sm btn-rounded"
                        >
                          <i className="fa fa-dot-circle-o text-success" />{" "}
                          Active{" "}
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile" className="avatar">
                          <img src="assets/img/profiles/avatar-21.jpg" alt="" />
                        </a>
                        <a href="profile">
                          Daniel Porter <span>Admin</span>
                        </a>
                      </h2>
                    </td>
                    <td>Focus Technologies</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="1571747b7c7079657a6761706755706d74786579703b767a78"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>
                      <span className="badge bg-inverse-danger">Admin</span>
                    </td>
                    <td>Admin Manager</td>
                    <td>
                      <div className="dropdown action-label">
                        <a
                          href="#"
                          className="btn btn-white btn-sm btn-rounded"
                        >
                          <i className="fa fa-dot-circle-o text-success" />{" "}
                          Active{" "}
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
  </div>
<script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/plugins/morris/morris.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/plugins/raphael/raphael.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/chart.js"></script>

      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/app.js"></script>
    </>
  );
}
