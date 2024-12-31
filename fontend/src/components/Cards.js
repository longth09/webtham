import { Button } from "@mui/material";
import React from "react";

function Cards() {
  return (
    <div className="cards mb-10 box-shadow">
      <div className="cards-head d-flex justify-content-between align-items-center">
        <div className="order-ids d-flex align-items-center">
          <span className="order-title">Mã đơn hàng</span>
          <span className="order-id">#15827288</span>
        </div>
        <div className="order-head-right d-flex align-items-center">
          <span className="order-time">12/28/2024 21:28:20</span>
          <span className="order-status-head">Chưa xác nhận</span>
        </div>
      </div>
      <div className="cards-body-main">
        <div className="cards-body d-flex align-items-center">
          <img
            className="cards-img"
            src="https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2t133bq2caie7.webp"
            alt=""
          />
          <div className="cards-info">
            <h5 className="cards-product-title p-0 m-0">
              Thảm Trải Sàn 3D Cao Cấp Họa Tiết Đẹp - Thảm Trang Trí Phòng Khách
              Phòng Ngủ Thảm Chống Trơn Dễ Vệ Sinh Sang Trọng
            </h5>
            <span className="d-block cards-product-quantity">Số lượng: 1</span>
            <span className="cards-product-price">269.000 VND</span>
          </div>
        </div>
        <div className="cards-body d-flex align-items-center">
          <img
            className="cards-img"
            src="https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2t133bq2caie7.webp"
            alt=""
          />
          <div className="cards-info">
            <h5 className="cards-product-title p-0 m-0">
              Thảm Trải Sàn 3D Cao Cấp Họa Tiết Đẹp - Thảm Trang Trí Phòng Khách
              Phòng Ngủ Thảm Chống Trơn Dễ Vệ Sinh Sang Trọng
            </h5>
            <span className="d-block cards-product-quantity">Số lượng: 1</span>
            <span className="cards-product-price">269.000 VND</span>
          </div>
        </div>
      </div>
      <div className="cards-food d-flex justify-content-between align-items-center">
        <div className="cards-total">
          <span className="cards-product-quantity">Thành tiền: </span>
          <span className="cards-product-price">269.000 VND</span>
        </div>
        <div className="crads-button">
          <Button variant="outlined" className="order-edit-address">
            Thay đổi địa chỉ
          </Button>
          <Button variant="outlined" color="error" className="order-cancel">
            Hủy đơn hàng
          </Button>
        </div>
        {/* <div className="crads-button">
          <span className="cards-status-food">Chưa xác nhận</span>
        </div> */}
      </div>
    </div>
  );
}

export default Cards;
