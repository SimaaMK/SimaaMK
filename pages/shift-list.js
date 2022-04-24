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
  <title>Shift List - HRMS admin template</title>
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
              <h3 className="page-title">Shift List</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="admin-dashboard">Dashboard</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Employees</a>
                </li>
                <li className="breadcrumb-item active">Shift List</li>
              </ul>
            </div>
            <div className="col-auto float-end ms-auto">
              <a
                href="#"
                className="btn add-btn m-r-5"
                data-bs-toggle="modal"
                data-bs-target="#add_shift"
              >
                Add Shifts
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
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table datatable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Shift Name</th>
                    <th>Min Start Time</th>
                    <th>Start Time</th>
                    <th>Max Start Time</th>
                    <th>Min End Time</th>
                    <th>End Time</th>
                    <th>Max End Time</th>
                    <th>Break Time</th>
                    <th className="text-center">Status</th>
                    <th className="text-end no-sort">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>10'o clock Shift</td>
                    <td>09:00:00 am</td>
                    <td>10:00:00 am</td>
                    <td>10:30:00 am</td>
                    <td>06:00:00 pm</td>
                    <td>06:30:00 pm</td>
                    <td>07:00:00 pm</td>
                    <td>30 mins</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a
                          className="btn btn-white btn-sm btn-rounded"
                          href="#"
                        >
                          <i className="fa fa-dot-circle-o text-success" />{" "}
                          Active
                        </a>
                      </div>
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
                            data-bs-target="#edit_shift"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
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
                    <td>10:30 shift</td>
                    <td>10:00:00 am</td>
                    <td>10:30:00 am </td>
                    <td>11:00:00 am</td>
                    <td>06:30:00 pm</td>
                    <td>07:00:00 pm</td>
                    <td>07:30:00 pm </td>
                    <td>45 mins</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a
                          className="btn btn-white btn-sm btn-rounded"
                          href="#"
                        >
                          <i className="fa fa-dot-circle-o text-success" />{" "}
                          Active
                        </a>
                      </div>
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
                            data-bs-target="#edit_shift"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
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
                    <td>Daily Rout</td>
                    <td>06:00:00 am</td>
                    <td>06:30:00 am</td>
                    <td>07:00:00 am</td>
                    <td>03:00:00 pm</td>
                    <td>03:30:00 pm</td>
                    <td>04:00:00 pm</td>
                    <td>60 mins</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a
                          className="btn btn-white btn-sm btn-rounded"
                          href="#"
                        >
                          <i className="fa fa-dot-circle-o text-success" />{" "}
                          Active
                        </a>
                      </div>
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
                            data-bs-target="#edit_shift"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
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
                    <td>4</td>
                    <td>New Shift</td>
                    <td>06:11:00 am</td>
                    <td>06:30:00 am</td>
                    <td>08:12:00 am</td>
                    <td>09:12:00 pm </td>
                    <td>09:30:00 pm</td>
                    <td>09:45:00 pm</td>
                    <td>45 mins</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a
                          className="btn btn-white btn-sm btn-rounded"
                          href="#"
                        >
                          <i className="fa fa-dot-circle-o text-success" />{" "}
                          Active
                        </a>
                      </div>
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
                            data-bs-target="#edit_shift"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
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
                    <td>5</td>
                    <td>Recurring Shift</td>
                    <td>08:30:00 am</td>
                    <td>09:00:00 am</td>
                    <td>09:30:00 am</td>
                    <td>05:30:00 pm</td>
                    <td>06:00:00 pm</td>
                    <td>06:30:00 pm</td>
                    <td>60 mins</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a
                          className="btn btn-white btn-sm btn-rounded"
                          href="#"
                        >
                          <i className="fa fa-dot-circle-o text-success" />{" "}
                          Active
                        </a>
                      </div>
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
                            data-bs-target="#edit_shift"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
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
    <div id="add_shift" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Shift</h5>
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
                <div className="col-sm-12">
                  <div className="form-group">
                    <label className="col-form-label">
                      Shift Name <span className="text-danger">*</span>
                    </label>
                    <div className="input-group time timepicker">
                      <input className="form-control" />
                      <span className="input-group-text">
                        <i className="fa fa-clock-o" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>
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
                <div className="col-md-4">
                  <div className="form-group">
                    <label>
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
                <div className="col-md-4">
                  <div className="form-group">
                    <label>
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
                <div className="col-md-4">
                  <div className="form-group">
                    <label>
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
                <div className="col-md-4">
                  <div className="form-group">
                    <label>
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
                <div className="col-md-4">
                  <div className="form-group">
                    <label>
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
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Break Time (In Minutes) </label>
                    <input type="text" className="form-control" />
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
                        defaultValue="monday"
                        className="days recurring"
                        defaultChecked=""
                      />
                      <span className="checkmark">M</span>
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        defaultValue="tuesday"
                        className="days recurring"
                        defaultChecked=""
                      />
                      <span className="checkmark">T</span>
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        defaultValue="wednesday"
                        className="days recurring"
                        defaultChecked=""
                      />
                      <span className="checkmark">W</span>
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        defaultValue="thursday"
                        className="days recurring"
                        defaultChecked=""
                      />
                      <span className="checkmark">T</span>
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        defaultValue="friday"
                        className="days recurring"
                        defaultChecked=""
                      />
                      <span className="checkmark">F</span>
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        defaultValue="saturday"
                        className="days recurring"
                      />
                      <span className="checkmark">S</span>
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        defaultValue="sunday"
                        className="days recurring"
                      />
                      <span className="checkmark">S</span>
                    </label>
                  </div>
                </div>
                <div className="col-sm-12">
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
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Add Tag </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Add Note </label>
                    <textarea className="form-control" defaultValue={""} />
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
    <div id="edit_shift" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Shift</h5>
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
                <div className="col-sm-12">
                  <div className="form-group">
                    <label className="col-form-label">
                      Shift Name <span className="text-danger">*</span>
                    </label>
                    <div className="input-group time timepicker">
                      <input className="form-control" />
                      <span className="input-group-text">
                        <i className="fa fa-clock-o" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>
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
                <div className="col-md-4">
                  <div className="form-group">
                    <label>
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
                <div className="col-md-4">
                  <div className="form-group">
                    <label>
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
                <div className="col-md-4">
                  <div className="form-group">
                    <label>
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
                <div className="col-md-4">
                  <div className="form-group">
                    <label>
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
                <div className="col-md-4">
                  <div className="form-group">
                    <label>
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
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Break Time (In Minutes) </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="custom-control form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheck3"
                    />
                    <label className="form-check-label" htmlFor="customCheck3">
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
                        defaultValue="monday"
                        className="days recurring"
                        defaultChecked=""
                      />
                      <span className="checkmark">M</span>
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        defaultValue="tuesday"
                        className="days recurring"
                        defaultChecked=""
                      />
                      <span className="checkmark">T</span>
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        defaultValue="wednesday"
                        className="days recurring"
                        defaultChecked=""
                      />
                      <span className="checkmark">W</span>
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        defaultValue="thursday"
                        className="days recurring"
                        defaultChecked=""
                      />
                      <span className="checkmark">T</span>
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        defaultValue="friday"
                        className="days recurring"
                        defaultChecked=""
                      />
                      <span className="checkmark">F</span>
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        defaultValue="saturday"
                        className="days recurring"
                      />
                      <span className="checkmark">S</span>
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        defaultValue="sunday"
                        className="days recurring"
                      />
                      <span className="checkmark">S</span>
                    </label>
                  </div>
                </div>
                <div className="col-sm-12">
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
                      id="customCheck4"
                    />
                    <label className="form-check-label" htmlFor="customCheck4">
                      Indefinite
                    </label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Add Tag </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Add Note </label>
                    <textarea className="form-control" defaultValue={""} />
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
                    <div className="custom-control form-switch">
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
                    <div className="custom-control form-switch">
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
    <div className="modal custom-modal fade" id="delete_employee" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Delete Shift</h3>
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
<script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/plugins/morris/morris.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/plugins/raphael/raphael.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/chart.js"></script>

      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/app.js"></script>
    </>
  );
}

