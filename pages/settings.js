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
  <title>Settings - HRMS admin template</title>
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
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Company Settings</h3>
                </div>
              </div>
            </div>
            <form>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      Company Name <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="Dreamguy's Technologies"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Contact Person</label>
                    <input
                      className="form-control "
                      defaultValue="Daniel Porter"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      className="form-control "
                      defaultValue="3864 Quiet Valley Lane, Sherman Oaks, CA, 91403"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>Country</label>
                    <select className="form-control select">
                      <option>USA</option>
                      <option>United Kingdom</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>City</label>
                    <input
                      className="form-control"
                      defaultValue="Sherman Oaks"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>State/Province</label>
                    <select className="form-control select">
                      <option>California</option>
                      <option>Alaska</option>
                      <option>Alabama</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>Postal Code</label>
                    <input
                      className="form-control"
                      defaultValue={91403}
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      className="form-control"
                      defaultValue="danielporter@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      className="form-control"
                      defaultValue="818-978-7102"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Mobile Number</label>
                    <input
                      className="form-control"
                      defaultValue="818-635-5579"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Fax</label>
                    <input
                      className="form-control"
                      defaultValue="818-978-7102"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Website Url</label>
                    <input
                      className="form-control"
                      defaultValue="https://www.example.com"
                      type="text"
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
  </div>
<script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/plugins/morris/morris.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/plugins/raphael/raphael.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/chart.js"></script>

      <script src="https://cdn.jsdelivr.net/gh/hmrsmart/smarthr@main/public/assets/js/app.js"></script>
    </>
  );
}

