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
  <title>Schedule timing - HRMS admin template</title>
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
            <div className="col-12">
              <h3 className="page-title">Schedule timing</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="admin-dashboard">Dashboard</a>
                </li>
                <li className="breadcrumb-item">Jobs</li>
                <li className="breadcrumb-item active">Schedule timing</li>
              </ul>
            </div>
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
                    <th>Job Title</th>
                    <th>User Available Timings</th>
                    <th className="text-center">Schedule timing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
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
                      <a href="job-details">Web Developer</a>
                    </td>
                    <td>
                      <b>11-03-2020</b> - 11:00 AM-12:00 PM
                      <br />
                      <b>12-03-2020</b> - 10:00 AM-11:00 AM
                      <br />
                      <b>01-01-1970</b> - 10:00 AM-11:00 AM
                      <br />{" "}
                    </td>
                    <td className="text-center">
                      <div className="action-label">
                        <a
                          className="btn btn-primary btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_job"
                          href="#"
                        >
                          Schedule Time
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
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
                      <a href="job-details">Web Designer</a>
                    </td>
                    <td>
                      <b>11-03-2020</b> - 11:00 AM-12:00 PM
                      <br />
                      <b>12-03-2020</b> - 10:00 AM-11:00 AM
                      <br />
                      <b>01-01-1970</b> - 10:00 AM-11:00 AM
                      <br />{" "}
                    </td>
                    <td className="text-center">
                      <div className="action-label">
                        <a
                          className="btn btn-primary btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_job"
                          href="#"
                        >
                          Schedule Time
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
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
                      <a href="job-details">Android Developer</a>
                    </td>
                    <td>
                      <b>11-03-2020</b> - 11:00 AM-12:00 PM
                      <br />
                      <b>12-03-2020</b> - 10:00 AM-11:00 AM
                      <br />
                      <b>01-01-1970</b> - 10:00 AM-11:00 AM
                      <br />{" "}
                    </td>
                    <td className="text-center">
                      <div className="action-label">
                        <a
                          className="btn btn-primary btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_job"
                          href="#"
                        >
                          Schedule Time
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
      <div id="edit_job" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit</h5>
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
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Schedule Date 1</label>
                      <input
                        type="text"
                        className="form-control datetimepicker"
                        defaultValue="3 Mar 2019"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Select Time</label>
                      <select className="select">
                        <option>Select Time</option>
                        <option selected="">12:00 AM-01:00 AM</option>
                        <option>01:00 AM-02:00 AM</option>
                        <option>02:00 AM-03:00 AM</option>
                        <option>03:00 AM-04:00 AM</option>
                        <option>04:00 AM-05:00 AM</option>
                        <option>05:00 AM-06:00 AM</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Schedule Date 2</label>
                      <input
                        type="text"
                        className="form-control datetimepicker"
                        defaultValue="3 Mar 2019"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Select Time</label>
                      <select className="select">
                        <option>Select Time</option>
                        <option selected="">12:00 AM-01:00 AM</option>
                        <option>01:00 AM-02:00 AM</option>
                        <option>02:00 AM-03:00 AM</option>
                        <option>03:00 AM-04:00 AM</option>
                        <option>04:00 AM-05:00 AM</option>
                        <option>05:00 AM-06:00 AM</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Schedule Date 3</label>
                      <input
                        type="text"
                        className="form-control datetimepicker"
                        defaultValue="3 Mar 2019"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Select Time</label>
                      <select className="select">
                        <option>Select Time</option>
                        <option selected="">12:00 AM-01:00 AM</option>
                        <option>01:00 AM-02:00 AM</option>
                        <option>02:00 AM-03:00 AM</option>
                        <option>03:00 AM-04:00 AM</option>
                        <option>04:00 AM-05:00 AM</option>
                        <option>05:00 AM-06:00 AM</option>
                      </select>
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
      <div className="modal custom-modal fade" id="delete_job" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete</h3>
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

