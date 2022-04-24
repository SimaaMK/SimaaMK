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
  <title>Subscriptions - HRMS admin template</title>
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
            <div className="col">
              <h3 className="page-title">Subscriptions</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="admin-dashboard">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Subscriptions</li>
              </ul>
            </div>
            <div className="col-auto float-end ms-auto">
              <a
                href="#"
                className="btn add-btn"
                data-bs-toggle="modal"
                data-bs-target="#add_plan"
              >
                <i className="fa fa-plus" /> Add Subscription
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row justify-content-center mb-4">
              <div className="col-auto">
                <nav className="nav btn-group">
                  <a
                    href="#monthly"
                    className="btn btn-outline-secondary active show"
                    data-bs-toggle="tab"
                  >
                    Monthly Plan
                  </a>
                  <a
                    href="#annual"
                    className="btn btn-outline-secondary"
                    data-bs-toggle="tab"
                  >
                    Annual Plan
                  </a>
                </nav>
              </div>
            </div>
            <div className="tab-content">
              <div className="tab-pane fade active show" id="monthly">
                <div className="row mb-30 equal-height-cards">
                  <div className="col-md-4">
                    <div className="card pricing-box">
                      <div className="card-body d-flex flex-column">
                        <div className="mb-4">
                          <h3>Free</h3>
                          <span className="display-4">$0</span>
                        </div>
                        <ul>
                          <li>
                            <i className="fa fa-check" /> <b>1 User</b>
                          </li>
                          <li>
                            <i className="fa fa-check" /> 5 Projects{" "}
                          </li>
                          <li>
                            <i className="fa fa-check" /> 5 GB Storage
                          </li>
                          <li>
                            <i className="fa fa-check" /> Unlimited Message
                          </li>
                        </ul>
                        <a
                          href="#"
                          className="btn btn-lg btn-secondary mt-auto"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_plan"
                        >
                          Edit
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card pricing-box">
                      <div className="card-body d-flex flex-column">
                        <div className="mb-4">
                          <h3>Professional</h3>
                          <span className="display-4">$21</span>
                          <span>/mo</span>
                        </div>
                        <ul>
                          <li>
                            <i className="fa fa-check" /> <b>30 Users</b>
                          </li>
                          <li>
                            <i className="fa fa-check" /> 50 Projects
                          </li>
                          <li>
                            <i className="fa fa-check" /> 100 GB Storage
                          </li>
                          <li>
                            <i className="fa fa-check" /> Unlimited Message
                          </li>
                          <li>
                            <i className="fa fa-check" /> 24/7 Customer Support
                          </li>
                        </ul>
                        <a
                          href="#"
                          className="btn btn-lg btn-secondary mt-auto"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_plan"
                        >
                          Edit
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card pricing-box">
                      <div className="card-body d-flex flex-column">
                        <div className="mb-4">
                          <h3>Enterprise</h3>
                          <span className="display-4">$38</span>
                          <span>/mo</span>
                        </div>
                        <ul>
                          <li>
                            <i className="fa fa-check" />{" "}
                            <b>Unlimited Users </b>
                          </li>
                          <li>
                            <i className="fa fa-check" /> Unlimited Projects
                          </li>
                          <li>
                            <i className="fa fa-check" /> 500 GB Storage
                          </li>
                          <li>
                            <i className="fa fa-check" /> Unlimited Message
                          </li>
                          <li>
                            <i className="fa fa-check" /> Voice and Video Call
                          </li>
                          <li>
                            <i className="fa fa-check" /> 24/7 Customer Support
                          </li>
                        </ul>
                        <a
                          href="#"
                          className="btn btn-lg btn-secondary mt-auto"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_plan"
                        >
                          Edit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card card-table mb-0">
                      <div className="card-header">
                        <h4 className="card-title mb-0">Plan Details</h4>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-hover table-center mb-0">
                            <thead>
                              <tr>
                                <th>Plan</th>
                                <th>Plan Type</th>
                                <th>Create Date</th>
                                <th>Modified Date</th>
                                <th>Amount</th>
                                <th>Subscribed Users</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Free Trial</td>
                                <td>Monthly</td>
                                <td>9 Nov 2019</td>
                                <td>8 Dec 2019</td>
                                <td>Free</td>
                                <td>
                                  <a
                                    className="btn btn-info btn-sm"
                                    href="subscribed-companies"
                                  >
                                    30 Users
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Professional</td>
                                <td>Monthly</td>
                                <td>9 Nov 2019</td>
                                <td>8 Dec 2019</td>
                                <td>$21</td>
                                <td>
                                  <a
                                    className="btn btn-info btn-sm"
                                    href="subscribed-companies"
                                  >
                                    97 Users
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Enterprise</td>
                                <td>Monthly</td>
                                <td>9 Nov 2019</td>
                                <td>8 Dec 2019</td>
                                <td>$38</td>
                                <td>
                                  <a
                                    className="btn btn-info btn-sm"
                                    href="subscribed-companies"
                                  >
                                    125 Users
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
              </div>
              <div className="tab-pane fade" id="annual">
                <div className="row mb-30 equal-height-cards">
                  <div className="col-md-4">
                    <div className="card pricing-box">
                      <div className="card-body d-flex flex-column">
                        <div className="mb-4">
                          <h3>Free</h3>
                          <span className="display-4">$0</span>
                        </div>
                        <ul>
                          <li>
                            <i className="fa fa-check" /> <b>1 User</b>
                          </li>
                          <li>
                            <i className="fa fa-check" /> 5 Projects{" "}
                          </li>
                          <li>
                            <i className="fa fa-check" /> 5 GB Storage
                          </li>
                        </ul>
                        <a
                          href="#"
                          className="btn btn-lg btn-secondary mt-auto"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_plan"
                        >
                          Edit
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card pricing-box">
                      <div className="card-body d-flex flex-column">
                        <div className="mb-4">
                          <h3>Professional</h3>
                          <span className="display-4">$199</span>
                          <span>/mo</span>
                        </div>
                        <ul>
                          <li>
                            <i className="fa fa-check" /> <b>30 Users</b>
                          </li>
                          <li>
                            <i className="fa fa-check" /> 50 Projects
                          </li>
                          <li>
                            <i className="fa fa-check" /> 100 GB Storage
                          </li>
                          <li>
                            <i className="fa fa-check" /> Unlimited Message
                          </li>
                          <li>
                            <i className="fa fa-check" /> 24/7 Customer Support
                          </li>
                        </ul>
                        <a
                          href="#"
                          className="btn btn-lg btn-secondary mt-auto"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_plan"
                        >
                          Edit
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card pricing-box">
                      <div className="card-body d-flex flex-column">
                        <div className="mb-4">
                          <h3>Enterprise</h3>
                          <span className="display-4">$399</span>
                          <span>/mo</span>
                        </div>
                        <ul>
                          <li>
                            <i className="fa fa-check" />{" "}
                            <b>Unlimited Users </b>
                          </li>
                          <li>
                            <i className="fa fa-check" /> Unlimited Projects
                          </li>
                          <li>
                            <i className="fa fa-check" /> 500 GB Storage
                          </li>
                          <li>
                            <i className="fa fa-check" /> Unlimited Message
                          </li>
                          <li>
                            <i className="fa fa-check" /> Voice and Video Call
                          </li>
                          <li>
                            <i className="fa fa-check" /> 24/7 Customer Support
                          </li>
                        </ul>
                        <a
                          href="#"
                          className="btn btn-lg btn-secondary mt-auto"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_plan"
                        >
                          Edit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card card-table mb-0">
                      <div className="card-header">
                        <h4 className="card-title mb-0">Plan Details</h4>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-hover table-center mb-0">
                            <thead>
                              <tr>
                                <th>Plan</th>
                                <th>Plan Type</th>
                                <th>Create Date</th>
                                <th>Modified Date</th>
                                <th>Amount</th>
                                <th>Subscribed Users</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Free Trial</td>
                                <td>Yearly</td>
                                <td>9 Nov 2019</td>
                                <td>8 Dec 2019</td>
                                <td>Free</td>
                                <td>
                                  <a
                                    className="btn btn-info btn-sm"
                                    href="subscribed-companies"
                                  >
                                    62 Users
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Professional</td>
                                <td>Yearly</td>
                                <td>9 Nov 2019</td>
                                <td>8 Dec 2019</td>
                                <td>$199</td>
                                <td>
                                  <a
                                    className="btn btn-info btn-sm"
                                    href="subscribed-companies"
                                  >
                                    157 Users
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Enterprise</td>
                                <td>Yearly</td>
                                <td>9 Nov 2019</td>
                                <td>8 Dec 2019</td>
                                <td>$399</td>
                                <td>
                                  <a
                                    className="btn btn-info btn-sm"
                                    href="subscribed-companies"
                                  >
                                    241 Users
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
              </div>
            </div>
            <div
              className="modal custom-modal fade"
              id="add_plan"
              tabIndex={-1}
              role="dialog"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-md modal-dialog-centered">
                <div className="modal-content">
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                  >
                    <i className="fa fa-close" />
                  </button>
                  <div className="modal-body">
                    <h5 className="modal-title text-center mb-3">Add Plan</h5>
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Plan Name</label>
                            <input
                              type="text"
                              placeholder="Free Trial"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Plan Amount</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Plan Type</label>
                            <select className="select">
                              <option> Monthly </option>
                              <option> Yearly </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>No of Users</label>
                            <select className="select">
                              <option> 5 Users </option>
                              <option> 50 Users </option>
                              <option> Unlimited </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>No of Projects</label>
                            <select className="select">
                              <option> 5 Projects </option>
                              <option> 50 Projects </option>
                              <option> Unlimited </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>No of Storage Space</label>
                            <select className="select">
                              <option> 5 GB </option>
                              <option> 100 GB </option>
                              <option> 500 GB </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Plan Description</label>
                        <textarea
                          className="form-control"
                          rows={4}
                          cols={30}
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group">
                        <label className="d-block">Status</label>
                        <div className="status-toggle">
                          <input
                            type="checkbox"
                            id="add_plan_status"
                            className="check"
                          />
                          <label
                            htmlFor="add_plan_status"
                            className="checktoggle"
                          >
                            checkbox
                          </label>
                        </div>
                      </div>
                      <div className="m-t-20 text-center">
                        <button className="btn btn-primary submit-btn">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal custom-modal fade"
              id="edit_plan"
              role="dialog"
            >
              <div className="modal-dialog modal-md modal-dialog-centered">
                <div className="modal-content">
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                  >
                    <i className="fa fa-close" />
                  </button>
                  <div className="modal-body">
                    <h5 className="modal-title text-center mb-3">Edit Plan</h5>
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Plan Name</label>
                            <input
                              type="text"
                              placeholder="Free Trial"
                              className="form-control"
                              defaultValue="Free Trial"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Plan Amount</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="$500"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Plan Type</label>
                            <select className="select">
                              <option> Monthly </option>
                              <option> Yearly </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>No of Users</label>
                            <select className="select">
                              <option> 5 Users </option>
                              <option> 50 Users </option>
                              <option> Unlimited </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>No of Projects</label>
                            <select className="select">
                              <option> 5 Projects </option>
                              <option> 50 Projects </option>
                              <option> Unlimited </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>No of Storage Space</label>
                            <select className="select">
                              <option> 5 GB </option>
                              <option> 100 GB </option>
                              <option> 500 GB </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Plan Description</label>
                        <textarea
                          className="form-control"
                          rows={4}
                          cols={30}
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group">
                        <label className="d-block">Status</label>
                        <div className="status-toggle">
                          <input
                            type="checkbox"
                            id="edit_plan_status"
                            className="check"
                          />
                          <label
                            htmlFor="edit_plan_status"
                            className="checktoggle"
                          >
                            checkbox
                          </label>
                        </div>
                      </div>
                      <div className="m-t-20 text-center">
                        <button className="btn btn-primary submit-btn">
                          Save
                        </button>
                      </div>
                    </form>
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

