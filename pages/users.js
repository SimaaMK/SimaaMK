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
  <title>Users</title>
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
              <h3 className="page-title">المستخدمون</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="admin-dashboard">لوحة القيادة</a>
                </li>
                <li className="breadcrumb-item active">المستخدمون</li>
              </ul>
            </div>
            <div className="col-auto float-end ms-auto">
              <a
                href="#"
                className="btn add-btn"
                data-bs-toggle="modal"
                data-bs-target="#add_user"
              >
                <i className="fa fa-plus" /> إضافة مستخدم
              </a>
            </div>
          </div>
        </div>
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">الإسم</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus select-focus">
              <select className="select floating">
                <option>إختر القسم او الشعبة </option>
                <option>شعبة المدن الذكية</option>
                <option>قسم المدن الذكية</option>
              </select>
              <label className="focus-label">القسم/الشعبة</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus select-focus">
              <select className="select floating">
                <option>إختر صلاحية</option>
                <option>super admin</option>
                <option>ادمن</option>
                <option>موظف</option>
                <option>مستخدم</option>
              </select>
              <label className="focus-label">الصلاحية</label>
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
              <table className="table table-striped custom-table datatable">
                <thead>
                  <tr>
                    <th>الأسم</th>
                    <th>البريد لاإلكتروني</th>
                    <th>القسم /الشعبة</th>
                    <th>التاريخ</th>
                    <th>الصلاحية</th>
                    <th className="text-end">الفعالية</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile" className="avatar">
                          <img src="assets/img/profiles/avatar-21.jpg" alt="" />
                        </a>
                        <a href="profile">
                          Daniel Porter <span>ادمن</span>
                        </a>
                      </h2>
                    </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="0367626d6a666f736c7177667143667b626e736f662d606c6e"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Dreamguy's Technologies</td>
                    <td>1 Jan 2013</td>
                    <td>
                      <span className="badge bg-inverse-danger">ادمن</span>
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
                            data-bs-target="#edit_user"
                          >
                            <i className="fa fa-pencil m-r-5" /> تعديل
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_user"
                          >
                            <i className="fa fa-trash-o m-r-5" /> حذف
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
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
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="046e6b6c6a606b6144617c65697468612a676b69"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Dreamguy's Technologies</td>
                    <td>1 Jan 2013</td>
                    <td>
                      <span className="badge bg-inverse-success">موظف</span>
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
                            data-bs-target="#edit_user"
                          >
                            <i className="fa fa-pencil m-r-5" /> تعديل
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_user"
                          >
                            <i className="fa fa-trash-o m-r-5" /> حذف
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-09.jpg" />
                        </a>
                        <a href="profile">
                          Richard Miles <span>Admin</span>
                        </a>
                      </h2>
                    </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="2e5c474d464f5c4a4347424b5d6e4b564f435e424b004d4143"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Dreamguy's Technologies</td>
                    <td>1 Jan 2013</td>
                    <td>
                      <span className="badge bg-inverse-success">موظف</span>
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
                            data-bs-target="#edit_user"
                          >
                            <i className="fa fa-pencil m-r-5" /> تعديل
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_user"
                          >
                            <i className="fa fa-trash-o m-r-5" /> حذف
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
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
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="563c393e38253b3f223e16332e373b263a337835393b"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Dreamguy's Technologies</td>
                    <td>1 Jan 2013</td>
                    <td>
                      <span className="badge bg-inverse-success">موظف</span>
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
                            data-bs-target="#edit_user"
                          >
                            <i className="fa fa-pencil m-r-5" /> تعديل
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_user"
                          >
                            <i className="fa fa-trash-o m-r-5" /> حذف
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-05.jpg" />
                        </a>
                        <a href="profile">
                          Mike Litorus <span>IOS Developer</span>
                        </a>
                      </h2>
                    </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="d2bfbbb9b7bebba6bda0a7a192b7aab3bfa2beb7fcb1bdbf"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Dreamguy's Technologies</td>
                    <td>1 Jan 2013</td>
                    <td>
                      <span className="badge bg-inverse-success">موظف</span>
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
                            data-bs-target="#edit_user"
                          >
                            <i className="fa fa-pencil m-r-5" /> تعديل
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_user"
                          >
                            <i className="fa fa-trash-o m-r-5" /> حذف
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 className="table-avatar">
                        <a href="profile" className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-11.jpg" />
                        </a>
                        <a href="profile">
                          Wilmer Deluna <span>Team Leader</span>
                        </a>
                      </h2>
                    </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="42352b2e2f273026272e372c2302273a232f322e276c212d2f"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Dreamguy's Technologies</td>
                    <td>1 Jan 2013</td>
                    <td>
                      <span className="badge bg-inverse-success">موظف</span>
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
                            data-bs-target="#edit_user"
                          >
                            <i className="fa fa-pencil m-r-5" /> تعديل
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_user"
                          >
                            <i className="fa fa-trash-o m-r-5" /> حذف
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
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
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="a9cbc8dbdbd0cadccdc8e9ccd1c8c4d9c5cc87cac6c4"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Global Technologies</td>
                    <td>1 Jan 2013</td>
                    <td>
                      <span className="badge bg-inverse-info">الطالب</span>
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
                            data-bs-target="#edit_user"
                          >
                            <i className="fa fa-pencil m-r-5" /> تعديل
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_user"
                          >
                            <i className="fa fa-trash-o m-r-5" /> حذف
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
      <div id="add_user" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">إضافة مستخدم</h5>
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
                      <label>
                        الأسم الأول <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>الأسم الأخير</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        اسم المستخدم <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        البريد الألكتروني <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="email" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>كلمة المرور</label>
                      <input className="form-control" type="password" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>تأكيد كلمة المرور</label>
                      <input className="form-control" type="password" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>الهاتف </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>الصلاحية</label>
                      <select className="select">
					    <option>super Admin</option>
                        <option>أدمن</option>
                        <option>طالب</option>
                        <option>موظف</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>القسم/الشعبة</label>
                      <select className="select">
                        <option>شعبة المدن الذكية</option>
                        <option>قسم المدن الذكية</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        رقم هوية الموظف<span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control floating" />
                    </div>
                  </div>
                </div>
                <div className="table-responsive m-t-15">
                  <table className="table table-striped custom-table">
                    <thead>
                      <tr>
                        <th>الموظف تخويل </th>
                        <th className="text-center">قرأة</th>
                        <th className="text-center">كتابة</th>
                        <th className="text-center">إنشاء</th>
                        <th className="text-center">حذف</th>
                        <th className="text-center">جلب</th>
                        <th className="text-center">تصدير</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>الموظف</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>العطل الرسمية</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>المغادرة</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>الاحداث</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">حفظ</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="edit_user" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">تعديل معلومات مستخدم</h5>
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
                      <label>
                        الأسم الأول<span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        defaultValue="John"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>الأسم الأخير</label>
                      <input
                        className="form-control"
                        defaultValue="Doe"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        اسم المستخدم <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        defaultValue="johndoe"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        البريد الإلكتروني <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        defaultValue="johndoe@example.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>كلمة المرور</label>
                      <input className="form-control" type="password" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>تأكيد كلمة المرور</label>
                      <input className="form-control" type="password" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>الهاتف </label>
                      <input
                        className="form-control"
                        defaultValue={9876543210}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>الصلاحية</label>
                      <select className="select">
                        <option>super Admin</option>
                        <option>أدمن</option>
                        <option>طالب</option>
                        <option selected="">موظف</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>القسم/الشعبة</label>
                      <select className="select">
                        <option>شعبة المدن الذكية</option>
                        <option>قسم المدن الذكية</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        رقم هوية الموظف<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue="FT-0001"
                        className="form-control floating"
                      />
                    </div>
                  </div>
                </div>
                <div className="table-responsive m-t-15">
                  <table className="table table-striped custom-table">
                    <thead>
                      <tr>
                        <th>الموظف تخويل </th>
                        <th className="text-center">قرأة</th>
                        <th className="text-center">كتابة</th>
                        <th className="text-center">إنشاء</th>
                        <th className="text-center">حذف</th>
                        <th className="text-center">جلب</th>
                        <th className="text-center">تصدير</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>الموظف</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>العطل الرسمية</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>المغادرة</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>الأحداث</td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked="" type="checkbox" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">حفظ</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal custom-modal fade" id="delete_user" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>حذف مستخدم</h3>
                <p>هل انت متاكد من delete?</p>
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
