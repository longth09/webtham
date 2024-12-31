import React, { useEffect, useState } from "react";
import Logo from "../assets/imgs/logo/1.png";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false); // State để điều khiển ô input
  const [searchQuery, setSearchQuery] = useState(""); // State lưu từ khóa tìm kiếm
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  };

  const handleClickAccount = () => {
    navigate("/account");
  };

  const handleSearchClick = () => {
    setShowSearchInput(!showSearchInput); // Toggle hiển thị ô input tìm kiếm
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Cập nhật từ khóa tìm kiếm
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/search?query=${searchQuery}`); // Chuyển hướng đến trang tìm kiếm với từ khóa
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`position-relative z-1 ${isScrolled ? "scrolled" : ""}`}>
      <div className="position-fixed top-0 start-0 w-100 header-container">
        <div className="d-flex justify-content-around align-items-center h-100">
          <div className="logo">
            <Link to={"/"}>
              <img src={Logo} alt="Logo" style={{ width: 100 }} />
            </Link>
          </div>
          <div className="menu d-flex justify-content-around">
            <Link
              className="title-hover text-decoration-none text-dark fw-medium"
              to={"/"}
            >
              Trang chủ
            </Link>
            <Link
              className="title-hover text-decoration-none text-dark fw-medium"
              to={"/products"}
            >
              Thảm
            </Link>
            <Link
              className="title-hover text-decoration-none text-dark fw-medium"
              to={"#"}
            >
              Chính sách
            </Link>
            <Link
              className="title-hover text-decoration-none text-dark fw-medium"
              to={"/blogs"}
            >
              Blogs
            </Link>
            <Link
              className="title-hover text-decoration-none text-dark fw-medium"
              to={"#"}
            >
              Liên hệ
            </Link>
          </div>
          <div className="buttons d-flex align-items-center">
            <div className="d-flex align-items-center">
              <div className="search" onClick={handleSearchClick}>
                <input
                  type="text"
                  name=""
                  class="search-input"
                  placeholder="Tìm kiếm..."
                />
                <FontAwesomeIcon
                  className="search-icon"
                  icon={faMagnifyingGlass}
                />
              </div>
              <div className="cart" onClick={goToCart}>
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            </div>
            <div
              className="account d-flex align-items-center"
              onClick={handleClickAccount}
            >
              <AccountCircleIcon />
              <span className="ml-10">Long</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
