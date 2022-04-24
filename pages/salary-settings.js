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
  <title>Salary Settings - HRMS admin template</title>
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
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Salary Settings</h3>
                </div>
              </div>
            </div>
            <form>
              <div className="settings-widget">
                <div className="h3 card-title with-switch">
                  DA and HRA
                  <div className="onoffswitch">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch-checkbox"
                      id="switch_hra"
                      defaultChecked=""
                    />
                    <label className="onoffswitch-label" htmlFor="switch_hra">
                      <span className="onoffswitch-inner" />
                      <span className="onoffswitch-switch" />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>DA (%)</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>HRA (%)</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="settings-widget">
                <div className="h3 card-title with-switch">
                  Provident Fund Settings
                  <div className="onoffswitch">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch-checkbox"
                      id="switch_pf"
                      defaultChecked=""
                    />
                    <label className="onoffswitch-label" htmlFor="switch_pf">
                      <span className="onoffswitch-inner" />
                      <span className="onoffswitch-switch" />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Employee Share (%)</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Organization Share (%)</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="settings-widget">
                <div className="h3 card-title with-switch">
                  ESI Settings
                  <div className="onoffswitch">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch-checkbox"
                      id="switch_esi"
                    />
                    <label className="onoffswitch-label" htmlFor="switch_esi">
                      <span className="onoffswitch-inner" />
                      <span className="onoffswitch-switch" />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Employee Share (%)</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Organization Share (%)</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="settings-widget">
                <div className="h3 card-title with-switch">
                  TDS&nbsp;{" "}
                  <small className="form-text text-muted">Annual Salary</small>
                  <div className="onoffswitch">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch-checkbox"
                      id="switch_tds"
                    />
                    <label className="onoffswitch-label" htmlFor="switch_tds">
                      <span className="onoffswitch-inner" />
                      <span className="onoffswitch-switch" />
                    </label>
                  </div>
                </div>
                <div className="row row-sm">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Salary From</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Salary To</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="form-group">
                      <label>%</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="form-group">
                      <label className="d-none d-sm-block">&nbsp;</label>
                      <button
                        className="btn btn-danger w-100 set-btn"
                        type="button"
                      >
                        <i className="fa fa-trash-o" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row row-sm">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Salary From</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Salary To</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="form-group">
                      <label>%</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="form-group">
                      <label className="d-none d-sm-block">&nbsp;</label>
                      <button
                        className="btn btn-danger w-100 set-btn"
                        type="button"
                      >
                        <i className="fa fa-trash-o" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row row-sm">
                  <div className="col-sm-2 ms-auto">
                    <div className="form-group">
                      <button className="btn btn-primary w-100" type="button">
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn" type="submit">
                  Save
                </button>
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
