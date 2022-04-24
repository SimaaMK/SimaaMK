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
  <title>Register - HRMS admin template</title>
  <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png" />
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
  <link rel="stylesheet" href="assets/css/style.css" />
  {/*[if lt IE 9]>
			
			
		<![endif]*/}
  <div className="main-wrapper">
    <div className="account-content">
      <div className="container">
        <div className="account-logo">
          <a href="admin-dashboard">
            <img src="assets/img/logo2.png" alt="Dreamguy's Technologies" />
          </a>
        </div>
        <div className="account-box">
          <div className="account-wrapper">
            <h3 className="account-title">Register</h3>
            <p className="account-subtitle">Access to our dashboard</p>
            <form action="admin-dashboard">
              <div className="form-group">
                <label>
                  Email<span className="mandatory">*</span>
                </label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group">
                <label>
                  Password<span className="mandatory">*</span>
                </label>
                <input className="form-control" type="password" />
              </div>
              <div className="form-group">
                <label>
                  Repeat Password<span className="mandatory">*</span>
                </label>
                <input className="form-control" type="password" />
              </div>
              <div className="form-group text-center">
                <button className="btn btn-primary account-btn" type="submit">
                  Register
                </button>
              </div>
              <div className="account-footer">
                <p>
                  Already have an account? <a href="index">Login</a>
                </p>
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
