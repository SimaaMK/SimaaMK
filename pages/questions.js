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
  <title>Aptitude - HRMS admin template</title>
  <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png" />
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
  <link rel="stylesheet" href="assets/css/line-awesome.min.css" />
  <link rel="stylesheet" href="assets/css/dataTables.bootstrap4.min.css" />
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
              <h3 className="page-title">Aptitude</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="admin-dashboard">Dashboard</a>
                </li>
                <li className="breadcrumb-item ">Jobs</li>
                <li className="breadcrumb-item">Interviewing</li>
                <li className="breadcrumb-item active">Aptitude</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <ul className="nav nav-tabs nav-tabs-solid nav-justified">
              <li className="nav-item">
                <a className="nav-link" href="user-dashboard">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="user-all-jobs">
                  All{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="saved-jobs">
                  Saved
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="applied-jobs">
                  Applied
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="interviewing">
                  Interviewing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="offered-jobs">
                  Offered
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="visited-jobs">
                  Visitied{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="archived-jobs">
                  Archived{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="quiz-wizard">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="card">
                <div className="card-body">
                  <div className="" id="myWizard">
                    <div style={{ display: "none" }} className="navbar">
                      <div className="navbar-inner">
                        <ul className="nav nav-pills">
                          <li className="active">
                            <a href="#step1" data-bs-toggle="tab" data-step={1}>
                              Step 1
                            </a>
                          </li>
                          <li className="">
                            <a href="#step2" data-bs-toggle="tab" data-step={2}>
                              Step 2
                            </a>
                          </li>
                          <li className="">
                            <a href="#step3" data-bs-toggle="tab" data-step={3}>
                              Step 3
                            </a>
                          </li>
                          <li className="">
                            <a href="#step4" data-bs-toggle="tab" data-step={4}>
                              Step 4
                            </a>
                          </li>
                          <li className="">
                            <a href="#step5" data-bs-toggle="tab" data-step={5}>
                              Step 5
                            </a>
                          </li>
                          <li className="">
                            <a href="#step6" data-bs-toggle="tab" data-step={6}>
                              Step 6
                            </a>
                          </li>
                          <li className="">
                            <a href="#step7" data-bs-toggle="tab" data-step={7}>
                              Step 7
                            </a>
                          </li>
                          <li className="">
                            <a href="#step8" data-bs-toggle="tab" data-step={8}>
                              Step 8
                            </a>
                          </li>
                          <li className="">
                            <a href="#step9" data-bs-toggle="tab" data-step={9}>
                              Step 9
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="#step10"
                              data-bs-toggle="tab"
                              data-step={10}
                            >
                              Step 10
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <form method="post" id="quiz_answer">
                      <div className="tab-content pt-0">
                        <div className="tab-pane active" id="step1">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="">
                                <h4 className="mb-4 text-dark">
                                  <span>1.</span> IS management has decided to
                                  rewrite a legacy customer relations system
                                  using fourth generation languages (4GLs).
                                  Which of the following risks is MOST often
                                  associated with system development using 4GLs?
                                </h4>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[10]" />
                                      <span className="checkmark" />
                                      Inadequate screen/report design facilities
                                    </label>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[10]" />
                                      <span className="checkmark" />
                                      Complex programming language subsets
                                    </label>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[10]" />
                                      <span className="checkmark" />
                                      Lack of portability across operating
                                      systems
                                    </label>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[10]" />
                                      <span className="checkmark" />
                                      Inability to perform data intensive
                                      operations
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="text-start mt-3">
                                <a
                                  className="btn btn-primary btn-lg next submit-btn"
                                  href="#"
                                >
                                  Next
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="step2">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="">
                                <h4 className="mb-4 text-dark">
                                  <span>2.</span> Which of the following would
                                  be the BEST method for ensuring that critical
                                  fields in a master record have been updated
                                  properly?
                                </h4>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[11]" />
                                      <span className="checkmark" />
                                      Inadequate screen/report design facilities
                                    </label>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[11]" />
                                      <span className="checkmark" />
                                      Complex programming language subsets
                                    </label>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[11]" />
                                      <span className="checkmark" />
                                      Lack of portability across operating
                                      systems
                                    </label>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[11]" />
                                      <span className="checkmark" />
                                      Inability to perform data intensive
                                      operations
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="text-start mt-3">
                                <a
                                  className="btn btn-primary btn-lg next submit-btn"
                                  href="#"
                                >
                                  Next
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade in " id="step3">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="">
                                <h4 className="mb-4 text-dark">
                                  <span>3.</span> Which of the following is a
                                  dynamic analysis tool for the purpose of
                                  testing software modules?
                                </h4>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[12]" />
                                      <span className="checkmark" />
                                      Blackbox test
                                    </label>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[12]" />
                                      <span className="checkmark" />
                                      Desk checking
                                    </label>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[12]" />
                                      <span className="checkmark" />
                                      Structured walk-through
                                    </label>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[12]" />
                                      <span className="checkmark" />
                                      Design and code
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="text-start mt-3">
                                <a
                                  className="btn btn-primary btn-lg next submit-btn"
                                  href="#"
                                >
                                  Next
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade in " id="step4">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="">
                                <h4 className="mb-4 text-dark">
                                  <span>4.</span> Which of the following is MOST
                                  likely to result from a business process
                                  reengineering (BPR) project?
                                </h4>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[13]" />
                                      <span className="checkmark" />
                                      An increased number of people using
                                      technology
                                    </label>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[13]" />
                                      <span className="checkmark" />
                                      Significant cost savings, through a
                                      reduction in the complexity of information
                                      technology
                                    </label>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[13]" />
                                      <span className="checkmark" />A weaker
                                      organisational structures and less
                                      accountability
                                    </label>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[13]" />
                                      <span className="checkmark" />
                                      Increased information protection (IP) risk
                                      will increase
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="text-start mt-3">
                                <a
                                  className="btn btn-primary btn-lg next submit-btn"
                                  href="#"
                                >
                                  Next
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade in " id="step5">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="">
                                <h4 className="mb-4 text-dark">
                                  <span>5.</span> Which of the following devices
                                  extends the network and has the capacity to
                                  store frames and act as a storage and forward
                                  device?
                                </h4>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[14]" />
                                      <span className="checkmark" />
                                      Gateway
                                    </label>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[14]" />
                                      <span className="checkmark" />
                                      Repeater
                                    </label>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[14]" />
                                      <span className="checkmark" />
                                      Bridge
                                    </label>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[14]" />
                                      <span className="checkmark" />
                                      Router
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="text-start mt-3">
                                <a
                                  className="btn btn-primary btn-lg next submit-btn"
                                  href="#"
                                >
                                  Next
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade in " id="step10">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="">
                                <h4 className="mb-4 text-dark">
                                  <span>6.</span> An offsite information
                                  processing facility having electrical wiring,
                                  air conditioning and flooring, but no computer
                                  or communications equipment is a:
                                </h4>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[15]" />
                                      <span className="checkmark" />
                                      Cold site
                                    </label>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[15]" />
                                      <span className="checkmark" />
                                      Warm site
                                    </label>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[15]" />
                                      <span className="checkmark" />
                                      Dial-up site
                                    </label>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="question-radio text-secondary">
                                      <input type="radio" name="answer[15]" />
                                      <span className="checkmark" />
                                      Duplicate processing facility
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <button
                                className="btn btn-success btn-lg submit-btn mt-3"
                                data-bs-toggle="modal"
                                data-bs-target="#free_question_modal"
                                type="button"
                              >
                                Finish
                              </button>
                            </div>
                          </div>
                        </div>
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
  <div
    className="modal question-modal"
    id="free_question_modal"
    tabIndex={-1}
    role="dialog"
  >
    <div className="modal-dialog modal-dialog-centered	" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="mb-0">Result for Your Questions</h3>
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
          <div className="form-horzontal">
            <div className="col-md-12">
              <div className="text-start mb-3">
                <h3 className="mb-0">
                  Correct Answers :{" "}
                  <span className="text-success">
                    <b>5</b>
                  </span>
                </h3>
              </div>
              <div className="text-start">
                <h3 className="mb-0">
                  Wrong Answer :{" "}
                  <span className="text-danger">
                    <b>1</b>
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p>Please click Next to move main menu.</p>
            <a
              href="job-aptitude"
              className="btn btn-primary btn-lg submit-btn d-block"
            >
              Next
            </a>
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
