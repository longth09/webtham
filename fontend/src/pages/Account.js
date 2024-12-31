import React, { useState } from "react";
import "../assets/css/Account.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import EditIcon from "@mui/icons-material/Edit";
import LockIcon from "@mui/icons-material/Lock";
import LogoutIcon from "@mui/icons-material/Logout";
import EditProfile from "../components/Account/EditProfile";
import ChangePassword from "../components/Account/ChangePassword";
import Orders from "../components/Account/Order";
import ConfirmationModal from "../components/Account/ConfirmationModal";

function Account() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleConfirmLogout = () => {
    setModalOpen(false);
    console.log("Đã đăng xuất"); // Thực hiện logic đăng xuất tại đây
  };
  //   const [value, setValue] = React.useState("1");

  //   const handleChange = (event, newValue) => {
  //     setValue(newValue);
  //   };

  const [value, setValue] = React.useState("orders");

  const handleMenuClick = (newValue) => {
    setValue(newValue);
  };

  const renderContent = () => {
    switch (value) {
      case "orders":
        return <Orders />;
      case "editProfile":
        return <EditProfile />;
      case "changePassword":
        return <ChangePassword />;
      case "logout":
        return null;
      default:
        return <Orders />;
    }
  };
  return (
    <div className="account-body d-flex container">
      <div className="account-left">
        <ul className="account-menu-lists m-0 p-0">
          <li className="account-menu-item d-flex align-items-center">
            <AccountCircleIcon className="account-avatar" />
            <div>
              <h5 className="m-0 p-0 account-welcome">Xin chào!</h5>
              <h4 className="m-0 p-0">Tran Hoang Long</h4>
            </div>
          </li>
          <hr className="line" />
          <li
            className={`account-menu-item d-flex align-items-center ${
              value === "orders" ? "active" : ""
            }`}
            onClick={() => handleMenuClick("orders")}
          >
            <div className="account-icon-box">
              <FactCheckIcon className="account-icon" />
            </div>
            <h5 className="m-0 p-0 account-welcome">Đơn hàng của tôi (0)</h5>
          </li>
          <hr className="line" />
          <li
            className={`account-menu-item d-flex align-items-center ${
              value === "editProfile" ? "active" : ""
            }`}
            onClick={() => handleMenuClick("editProfile")}
          >
            <div className="account-icon-box">
              <EditIcon className="account-icon" />
            </div>
            <h5 className="m-0 p-0 account-welcome">
              Chỉnh sửa thông tin cá nhân
            </h5>
          </li>
          <hr className="line" />
          <li
            className={`account-menu-item d-flex align-items-center ${
              value === "changePassword" ? "active" : ""
            }`}
            onClick={() => handleMenuClick("changePassword")}
          >
            <div className="account-icon-box">
              <LockIcon className="account-icon" />
            </div>
            <h5 className="m-0 p-0 account-welcome">Đổi mật khẩu</h5>
          </li>
          <hr className="line" />
          <li
            className={`account-menu-item d-flex align-items-center ${
              value === "logout" ? "active" : ""
            }`}
            onClick={() => handleOpenModal()}
          >
            <div className="account-icon-box">
              <LogoutIcon className="account-icon" />
            </div>
            <h5 className="m-0 p-0 account-welcome">Đăng xuất</h5>
          </li>
          <ConfirmationModal
            isOpen={isModalOpen}
            title="Xác nhận đăng xuất"
            message="Bạn có chắc chắn muốn đăng xuất không?"
            onClose={handleCloseModal}
            onConfirm={handleConfirmLogout}
          />
        </ul>
      </div>
      <div className="account-right">{renderContent()}</div>
    </div>
  );
}

export default Account;
