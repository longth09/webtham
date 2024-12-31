import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="footer">
      <div className="footer-left">
        <ul class="">
          <li class="list-group-item">
            <p className="footer-text-pre">Chính sách</p>
          </li>
          <li class="list-group-item">
            <Link className="footer-text" to={"/"}>
              Chính sách: Vận chuyển
            </Link>
          </li>
          <li class="list-group-item">
            <Link className="footer-text" to={"/"}>
              Chính sách: Bảo hành - Đổi trả
            </Link>
          </li>
          <li class="list-group-item">
            <Link className="footer-text" to={"/"}>
              Chính sách: Bảo mật
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-center">
        <ul class="">
          <li class="list-group-item">
            <p className="footer-text-pre">Về chúng tôi</p>
          </li>
          <li class="list-group-item">
            <Link className="footer-text" to={"/"}>
              Trang chủ
            </Link>
          </li>
          <li class="list-group-item">
            <Link className="footer-text" to={"/"}>
              Sản phẩm
            </Link>
          </li>
          <li class="list-group-item">
            <Link className="footer-text" to={"/"}>
              Giới thiệu
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-right">
        <ul class="">
          <li class="list-group-item">
            <p className="footer-text-pre">Liên hệ</p>
          </li>
          <li class="list-group-item">
            <FontAwesomeIcon icon={faLocationDot} />
            <Link
              className="footer-text ml-10"
              to={"https://maps.app.goo.gl/quhxt3K2whHY2G1p9"}
            >
              Vinhomes Smart City Tây Mỗ, Nam Từ Liêm, Hà Nội
            </Link>
          </li>
          <li class="list-group-item">
            <FontAwesomeIcon icon={faPhone} />
            <Link className="footer-text ml-10" to={"tel:0964094215"}>
              0964094215
            </Link>
          </li>
          <li class="list-group-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <Link
              className="footer-text ml-10"
              to={"mailto:dsenco.thamtraisan@gmail.com"}
            >
              dsenco.thamtraisan@gmail.com
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
