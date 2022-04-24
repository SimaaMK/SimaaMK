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
  <title>Trainers - HRMS admin template</title>
  <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png" />
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
  <link rel="stylesheet" href="assets/css/line-awesome.min.css" />
  <link rel="stylesheet" href="assets/css/select2.min.css" />
  <link rel="stylesheet" href="assets/css/dataTables.bootstrap4.min.css" />
  <link rel="stylesheet" href="assets/css/style.css" />
  {/*[if lt IE 9]>
			
			
		<![endif]*/}
  <div className="main-wrapper">
    
      <div className="header-left">
        <a href="admin-dashboard" className="logo">
          <img src="assets/img/logo.png" width={40} height={40} alt="" />
        </a>
      </div>
      <a id="toggle_btn" href="#">
        <span className="bar-icon">
          <span />
          <span />
          <span />
        </span>
      </a>
      <div className="page-title-box">
        <h3>Dreamguy's Technologies</h3>
      </div>
      <a id="mobile_btn" className="mobile_btn" href="#sidebar">
        <i className="fa fa-bars" />
      </a>
      <ul className="nav user-menu">
        <li className="nav-item">
          <div className="top-nav-search">
            <a href="#" className="responsive-search">
              <i className="fa fa-search" />
            </a>
            <form action="search">
              <input
                className="form-control"
                type="text"
                placeholder="Search here"
              />
              <button className="btn" type="submit">
                <i className="fa fa-search" />
              </button>
            </form>
          </div>
        </li>
        <li className="nav-item dropdown has-arrow flag-nav">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
          >
            <img src="assets/img/flags/us.png" alt="" height={20} />{" "}
            <span>English</span>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a href="#" className="dropdown-item">
              <img src="assets/img/flags/us.png" alt="" height={16} /> English
            </a>
            <a href="#" className="dropdown-item">
              <img src="assets/img/flags/fr.png" alt="" height={16} /> French
            </a>
            <a href="#" className="dropdown-item">
              <img src="assets/img/flags/es.png" alt="" height={16} /> Spanish
            </a>
            <a href="#" className="dropdown-item">
              <img src="assets/img/flags/de.png" alt="" height={16} /> German
            </a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            data-bs-toggle="dropdown"
          >
            <i className="fa fa-bell-o" />{" "}
            <span className="badge rounded-pill">3</span>
          </a>
          <div className="dropdown-menu notifications">
            <div className="topnav-dropdown-header">
              <span className="notification-title">Notifications</span>
              <a href="#" className="clear-noti">
                {" "}
                Clear All{" "}
              </a>
            </div>
            <div className="noti-content">
              <ul className="notification-list">
                <li className="notification-message">
                  <a href="activities">
                    <div className="media d-flex">
                      <span className="avatar flex-shrink-0">
                        <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">John Doe</span> added new
                          task{" "}
                          <span className="noti-title">
                            Patient appointment booking
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">4 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="activities">
                    <div className="media d-flex">
                      <span className="avatar flex-shrink-0">
                        <img alt="" src="assets/img/profiles/avatar-03.jpg" />
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">Tarah Shropshire</span>{" "}
                          changed the task name{" "}
                          <span className="noti-title">
                            Appointment booking with payment gateway
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">6 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="activities">
                    <div className="media d-flex">
                      <span className="avatar flex-shrink-0">
                        <img alt="" src="assets/img/profiles/avatar-06.jpg" />
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">Misty Tison</span> added{" "}
                          <span className="noti-title">Domenic Houston</span>{" "}
                          and <span className="noti-title">Claire Mapes</span>{" "}
                          to project{" "}
                          <span className="noti-title">
                            Doctor available module
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">8 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="activities">
                    <div className="media d-flex">
                      <span className="avatar flex-shrink-0">
                        <img alt="" src="assets/img/profiles/avatar-17.jpg" />
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">Rolland Webber</span>{" "}
                          completed task{" "}
                          <span className="noti-title">
                            Patient and Doctor video conferencing
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">12 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="activities">
                    <div className="media d-flex">
                      <span className="avatar flex-shrink-0">
                        <img alt="" src="assets/img/profiles/avatar-13.jpg" />
                      </span>
                      <div className="media-body flex-grow-1">
                        <p className="noti-details">
                          <span className="noti-title">Bernardo Galaviz</span>{" "}
                          added new task{" "}
                          <span className="noti-title">
                            Private chat module
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">2 days ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="activities">View all Notifications</a>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            data-bs-toggle="dropdown"
          >
            <i className="fa fa-comment-o" />{" "}
            <span className="badge rounded-pill">8</span>
          </a>
          <div className="dropdown-menu notifications">
            <div className="topnav-dropdown-header">
              <span className="notification-title">Messages</span>
              <a href="#" className="clear-noti">
                {" "}
                Clear All{" "}
              </a>
            </div>
            <div className="noti-content">
              <ul className="notification-list">
                <li className="notification-message">
                  <a href="chat">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-09.jpg" />
                        </span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Richard Miles </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="chat">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                        </span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">John Doe</span>
                        <span className="message-time">6 Mar</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="chat">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-03.jpg" />
                        </span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">
                          {" "}
                          Tarah Shropshire{" "}
                        </span>
                        <span className="message-time">5 Mar</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="chat">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-05.jpg" />
                        </span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Mike Litorus</span>
                        <span className="message-time">3 Mar</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="chat">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-08.jpg" />
                        </span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">
                          {" "}
                          Catherine Manseau{" "}
                        </span>
                        <span className="message-time">27 Feb</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="chat">View all Messages</a>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown has-arrow main-drop">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            data-bs-toggle="dropdown"
          >
            <span className="user-img">
              <img src="assets/img/profiles/avatar-21.jpg" alt="" />
              <span className="status online" />
            </span>
            <span>Admin</span>
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="profile">
              My Profile
            </a>
            <a className="dropdown-item" href="settings">
              Settings
            </a>
            <a className="dropdown-item" href="index">
              Logout
            </a>
          </div>
        </li>
      </ul>
      <div className="dropdown mobile-user-menu">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa fa-ellipsis-v" />
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <a className="dropdown-item" href="profile">
            My Profile
          </a>
          <a className="dropdown-item" href="settings">
            Settings
          </a>
          <a className="dropdown-item" href="index">
            Logout
          </a>
        </div>
      </div>
    </div>
    <Header />
        <SideBar />
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">
              <span>Main</span>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-dashboard" /> <span> Dashboard</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="admin-dashboard">Admin Dashboard</a>
                </li>
                <li>
                  <a href="employee-dashboard">Employee Dashboard</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-cube" /> <span> Apps</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="chat">Chat</a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <span> Calls</span> <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="voice-call">Voice Call</a>
                    </li>
                    <li>
                      <a href="video-call">Video Call</a>
                    </li>
                    <li>
                      <a href="outgoing-call">Outgoing Call</a>
                    </li>
                    <li>
                      <a href="incoming-call">Incoming Call</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="events">Calendar</a>
                </li>
                <li>
                  <a href="contacts">Contacts</a>
                </li>
                <li>
                  <a href="inbox">Email</a>
                </li>
                <li>
                  <a href="file-manager">File Manager</a>
                </li>
              </ul>
            </li>
            <li className="menu-title">
              <span>Employees</span>
            </li>
            <li className="submenu">
              <a href="#" className="noti-dot">
                <i className="la la-user" /> <span> Employees</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="employees">All Employees</a>
                </li>
                <li>
                  <a href="holidays">Holidays</a>
                </li>
                <li>
                  <a href="leaves">
                    Leaves (Admin){" "}
                    <span className="badge rounded-pill bg-primary float-end">
                      1
                    </span>
                  </a>
                </li>
                <li>
                  <a href="leaves-employee">Leaves (Employee)</a>
                </li>
                <li>
                  <a href="leave-settings">Leave Settings</a>
                </li>
                <li>
                  <a href="attendance">Attendance (Admin)</a>
                </li>
                <li>
                  <a href="attendance-employee">Attendance (Employee)</a>
                </li>
                <li>
                  <a href="departments">Departments</a>
                </li>
                <li>
                  <a href="designations">Designations</a>
                </li>
                <li>
                  <a href="timesheet">Timesheet</a>
                </li>
                <li>
                  <a href="shift-scheduling">Shift &amp; Schedule</a>
                </li>
                <li>
                  <a href="overtime">Overtime</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="clients">
                <i className="la la-users" /> <span>Clients</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-rocket" /> <span> Projects</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="projects">Projects</a>
                </li>
                <li>
                  <a href="tasks">Tasks</a>
                </li>
                <li>
                  <a href="task-board">Task Board</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="leads">
                <i className="la la-user-secret" /> <span>Leads</span>
              </a>
            </li>
            <li>
              <a href="tickets">
                <i className="la la-ticket" /> <span>Tickets</span>
              </a>
            </li>
            <li className="menu-title">
              <span>HR</span>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-files-o" /> <span> Sales </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="estimates">Estimates</a>
                </li>
                <li>
                  <a href="invoices">Invoices</a>
                </li>
                <li>
                  <a href="payments">Payments</a>
                </li>
                <li>
                  <a href="expenses">Expenses</a>
                </li>
                <li>
                  <a href="provident-fund">Provident Fund</a>
                </li>
                <li>
                  <a href="taxes">Taxes</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-files-o" /> <span> Accounting </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="categories">Categories</a>
                </li>
                <li>
                  <a href="budgets">Budgets</a>
                </li>
                <li>
                  <a href="budget-expenses">Budget Expenses</a>
                </li>
                <li>
                  <a href="budget-revenues">Budget Revenues</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-money" /> <span> Payroll </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="salary"> Employee Salary </a>
                </li>
                <li>
                  <a href="salary-view"> Payslip </a>
                </li>
                <li>
                  <a href="payroll-items"> Payroll Items </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="policies">
                <i className="la la-file-pdf-o" /> <span>Policies</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-pie-chart" /> <span> Reports </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="expense-reports"> Expense Report </a>
                </li>
                <li>
                  <a href="invoice-reports"> Invoice Report </a>
                </li>
                <li>
                  <a href="payments-reports"> Payments Report </a>
                </li>
                <li>
                  <a href="project-reports"> Project Report </a>
                </li>
                <li>
                  <a href="task-reports"> Task Report </a>
                </li>
                <li>
                  <a href="user-reports"> User Report </a>
                </li>
                <li>
                  <a href="employee-reports"> Employee Report </a>
                </li>
                <li>
                  <a href="payslip-reports"> Payslip Report </a>
                </li>
                <li>
                  <a href="attendance-reports"> Attendance Report </a>
                </li>
                <li>
                  <a href="leave-reports"> Leave Report </a>
                </li>
                <li>
                  <a href="daily-reports"> Daily Report </a>
                </li>
              </ul>
            </li>
            <li className="menu-title">
              <span>Performance</span>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-graduation-cap" />{" "}
                <span> Performance </span> <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="performance-indicator">
                    {" "}
                    Performance Indicator{" "}
                  </a>
                </li>
                <li>
                  <a href="performance"> Performance Review </a>
                </li>
                <li>
                  <a href="performance-appraisal">
                    {" "}
                    Performance Appraisal{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-crosshairs" /> <span> Goals </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="goal-tracking"> Goal List </a>
                </li>
                <li>
                  <a href="goal-type"> Goal Type </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-edit" /> <span> Training </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="training"> Training List </a>
                </li>
                <li>
                  <a className="active" href="trainers">
                    {" "}
                    Trainers
                  </a>
                </li>
                <li>
                  <a href="training-type"> Training Type </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="promotion">
                <i className="la la-bullhorn" /> <span>Promotion</span>
              </a>
            </li>
            <li>
              <a href="resignation">
                <i className="la la-external-link-square" />{" "}
                <span>Resignation</span>
              </a>
            </li>
            <li>
              <a href="termination">
                <i className="la la-times-circle" /> <span>Termination</span>
              </a>
            </li>
            <li className="menu-title">
              <span>Administration</span>
            </li>
            <li>
              <a href="assets">
                <i className="la la-object-ungroup" /> <span>Assets</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-briefcase" /> <span> Jobs </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="user-dashboard"> User Dasboard </a>
                </li>
                <li>
                  <a href="jobs-dashboard"> Jobs Dasboard </a>
                </li>
                <li>
                  <a href="jobs"> Manage Jobs </a>
                </li>
                <li>
                  <a href="manage-resumes"> Manage Resumes </a>
                </li>
                <li>
                  <a href="shortlist-candidates"> Shortlist Candidates </a>
                </li>
                <li>
                  <a href="interview-questions"> Interview Questions </a>
                </li>
                <li>
                  <a href="offer_approvals"> Offer Approvals </a>
                </li>
                <li>
                  <a href="experiance-level"> Experience Level </a>
                </li>
                <li>
                  <a href="candidates"> Candidates List </a>
                </li>
                <li>
                  <a href="schedule-timing"> Schedule timing </a>
                </li>
                <li>
                  <a href="apptitude-result"> Aptitude Results </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="knowledgebase">
                <i className="la la-question" /> <span>Knowledgebase</span>
              </a>
            </li>
            <li>
              <a href="activities">
                <i className="la la-bell" /> <span>Activities</span>
              </a>
            </li>
            <li>
              <a href="users">
                <i className="la la-user-plus" /> <span>Users</span>
              </a>
            </li>
            <li>
              <a href="settings">
                <i className="la la-cog" /> <span>Settings</span>
              </a>
            </li>
            <li className="menu-title">
              <span>Pages</span>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-user" /> <span> Profile </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="profile"> Employee Profile </a>
                </li>
                <li>
                  <a href="client-profile"> Client Profile </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-key" /> <span> Authentication </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="index"> Login </a>
                </li>
                <li>
                  <a href="register"> Register </a>
                </li>
                <li>
                  <a href="forgot-password"> Forgot Password </a>
                </li>
                <li>
                  <a href="otp"> OTP </a>
                </li>
                <li>
                  <a href="lock-screen"> Lock Screen </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-exclamation-triangle" />{" "}
                <span> Error Pages </span> <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="error-404">404 Error </a>
                </li>
                <li>
                  <a href="error-500">500 Error </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-hand-o-up" /> <span> Subscriptions </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="subscriptions"> Subscriptions (Admin) </a>
                </li>
                <li>
                  <a href="subscriptions-company">
                    {" "}
                    Subscriptions (Company){" "}
                  </a>
                </li>
                <li>
                  <a href="subscribed-companies"> Subscribed Companies</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-columns" /> <span> Pages </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="search"> Search </a>
                </li>
                <li>
                  <a href="faq"> FAQ </a>
                </li>
                <li>
                  <a href="terms"> Terms </a>
                </li>
                <li>
                  <a href="privacy-policy"> Privacy Policy </a>
                </li>
                <li>
                  <a href="blank-page"> Blank Page </a>
                </li>
              </ul>
            </li>
            <li className="menu-title">
              <span>UI Interface</span>
            </li>
            <li>
              <a href="components">
                <i className="la la-puzzle-piece" /> <span>Components</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-object-group" /> <span> Forms </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="form-basic-inputs">Basic Inputs </a>
                </li>
                <li>
                  <a href="form-input-groups">Input Groups </a>
                </li>
                <li>
                  <a href="form-horizontal">Horizontal Form </a>
                </li>
                <li>
                  <a href="form-vertical"> Vertical Form </a>
                </li>
                <li>
                  <a href="form-mask"> Form Mask </a>
                </li>
                <li>
                  <a href="form-validation"> Form Validation </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-table" /> <span> Tables </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="tables-basic">Basic Tables </a>
                </li>
                <li>
                  <a href="data-tables">Data Table </a>
                </li>
              </ul>
            </li>
            <li className="menu-title">
              <span>Extras</span>
            </li>
            <li>
              <a href="#">
                <i className="la la-file-text" /> <span>Documentation</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="la la-info" /> <span>Change Log</span>{" "}
                <span className="badge badge-primary ms-auto">v3.4</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-share-alt" /> <span>Multi Level</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li className="submenu">
                  <a href="#">
                    {" "}
                    <span>Level 1</span> <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="#">
                        <span>Level 2</span>
                      </a>
                    </li>
                    <li className="submenu">
                      <a href="#">
                        {" "}
                        <span> Level 2</span> <span className="menu-arrow" />
                      </a>
                      <ul style={{ display: "none" }}>
                        <li>
                          <a href="#">Level 3</a>
                        </li>
                        <li>
                          <a href="#">Level 3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span>Level 2</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <span>Level 1</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Trainers</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="admin-dashboard">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Trainers</li>
              </ul>
            </div>
            <div className="col-auto float-end ms-auto">
              <a
                href="#"
                className="btn add-btn"
                data-bs-toggle="modal"
                data-bs-target="#add_trainer"
              >
                <i className="fa fa-plus" /> Add New
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table mb-0 datatable">
                <thead>
                  <tr>
                    <th style={{ width: 30 }}>#</th>
                    <th>Name </th>
                    <th>Contact Number </th>
                    <th>Email </th>
                    <th>Description </th>
                    <th>Status </th>
                    <th className="text-end">Action</th>
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
                        <a href="profile">John Doe </a>
                      </h2>
                    </td>
                    <td>9876543210</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="68020700060c070d280d10090518040d460b0705"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Lorem ipsum dollar</td>
                    <td>
                      <div className="dropdown action-label">
                        <a
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-dot-circle-o text-danger" />{" "}
                          Inactive
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-dot-circle-o text-success" />{" "}
                            Active
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-dot-circle-o text-danger" />{" "}
                            Inactive
                          </a>
                        </div>
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
                            data-bs-target="#edit_type"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_type"
                          >
                            <i className="fa fa-trash-o m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-05.jpg" />
                        </a>
                        <a href="profile">Mike Litorus </a>
                      </h2>
                    </td>
                    <td>9876543120</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="066b6f6d636a6f726974737546637e676b766a632865696b"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Lorem ipsum dollar</td>
                    <td>
                      <div className="dropdown action-label">
                        <a
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-dot-circle-o text-success" />{" "}
                          Active
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-dot-circle-o text-success" />{" "}
                            Active
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-dot-circle-o text-danger" />{" "}
                            Inactive
                          </a>
                        </div>
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
                            data-bs-target="#edit_type"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_type"
                          >
                            <i className="fa fa-trash-o m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-11.jpg" />
                        </a>
                        <a href="profile">Wilmer Deluna </a>
                      </h2>
                    </td>
                    <td>9876543210</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="98eff1f4f5fdeafcfdf4edf6f9d8fde0f9f5e8f4fdb6fbf7f5"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Lorem ipsum dollar</td>
                    <td>
                      <div className="dropdown action-label">
                        <a
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-dot-circle-o text-danger" />{" "}
                          Inactive
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-dot-circle-o text-success" />{" "}
                            Active
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-dot-circle-o text-danger" />{" "}
                            Inactive
                          </a>
                        </div>
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
                            data-bs-target="#edit_type"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_type"
                          >
                            <i className="fa fa-trash-o m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-10.jpg" />
                        </a>
                        <a href="profile">John Smith </a>
                      </h2>
                    </td>
                    <td>9876543210</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="13797c7b7d607e7a677b53766b727e637f763d707c7e"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Lorem ipsum dollar</td>
                    <td>
                      <div className="dropdown action-label">
                        <a
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-dot-circle-o text-danger" />{" "}
                          Inactive
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-dot-circle-o text-success" />{" "}
                            Active
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-dot-circle-o text-danger" />{" "}
                            Inactive
                          </a>
                        </div>
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
                            data-bs-target="#edit_type"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_type"
                          >
                            <i className="fa fa-trash-o m-r-5" /> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-09.jpg" />
                        </a>
                        <a href="profile">Richard Miles </a>
                      </h2>
                    </td>
                    <td>9876543210</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="fb899298939a899f9692979e88bb9e839a968b979ed5989496"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Lorem ipsum dollar</td>
                    <td>
                      <div className="dropdown action-label">
                        <a
                          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-dot-circle-o text-danger" />{" "}
                          Inactive
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-dot-circle-o text-success" />{" "}
                            Active
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-dot-circle-o text-danger" />{" "}
                            Inactive
                          </a>
                        </div>
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
                            data-bs-target="#edit_type"
                          >
                            <i className="fa fa-pencil m-r-5" /> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_type"
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
      <div id="add_trainer" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add New Trainer</h5>
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
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Last Name</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Role <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="email" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Phone </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Status</label>
                      <select className="select">
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>
                        Description <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={4}
                        defaultValue={""}
                      />
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
      <div id="edit_type" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Trainer</h5>
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
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="John"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Last Name</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Doe"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Role <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Web Developer"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        defaultValue="johndoe@example.com"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Phone </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={9876543210}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Status</label>
                      <select className="select">
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>
                        Description <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={4}
                        defaultValue={"Lorem ipsum ismap"}
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
      <div className="modal custom-modal fade" id="delete_type" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Trainers List</h3>
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
