import React, { useState } from "react";
import "../assets/css/Checkout.css";
import Success from "../assets/imgs/success.png";
import { Box, Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";

function Checkout() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Thảm Trải Sàn Phòng Khách Thảm Phông Nền Chụp Ảnh Chất Liệu Cotton Cao Cấp Màu Be, Nâu, Xám",
      price: 680000,
      quantity: 2,
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m037muod4c5r3c.webp",
      color: "Be",
      size: "1m6 x 2m3",
    },
    {
      id: 2,
      name: "Thảm Trải Sàn Phòng Khách Thảm Phông Nền Chụp Ảnh Chất Liệu Cotton Cao Cấp Màu Be, Nâu, Xám",
      price: 720000,
      quantity: 10,
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m037muod4c5r3c.webp",
      color: "Nâu be",
      size: "2m x 3m",
    },
  ]);

  const totalAmount = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="checkout container">
      <div className="checkout-body">
        <div className="checkout-left">
          <div className="checkout-left-header">
            <div className="checkout-left-header_check">
              <svg width="66" height="66">
                <circle
                  fill="none"
                  stroke="#68E534"
                  strokeWidth="3.33"
                  cx="33"
                  cy="33"
                  r="31.67"
                  strokeLinecap="round"
                  transform="rotate(-90 33 33)"
                  className="circle"
                />
                <polyline
                  fill="none"
                  stroke="#68E534"
                  points="14.67,35.67 29,47.33 50.67,23"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tick"
                />
              </svg>
            </div>
            <h4 className="checkout-left-header_text">
              Cảm ơn bạn đã đặt hàng
            </h4>
          </div>
          <div className="checkout-block">
            <div className="checkout-block-left d-flex">
              <div className="info-payment w-50">
                <h2 className="info-payment-title">Thông tin mua hàng</h2>
                <p>Trần Hoàng Hoàng Long</p>
                <p>0362558460</p>
              </div>
              <div className="info-payment w-50">
                <h2 className="info-payment-title">Địa chỉ nhận hàng</h2>
                <p>ghjgh</p>
                <p>ghjgh</p>
                <p>Phường Lê Lợi, Thị xã Sơn Tây, Hà Nội</p>
              </div>
            </div>
            <div className="checkout-block-right d-flex">
              <div className="info-payment w-50">
                <h2 className="info-payment-title">Phương thức thanh toán</h2>
                <p>Chuyển khoản qua ngân hàng</p>
              </div>
              <div className="info-payment w-50">
                <h2 className="info-payment-title">Phương thức vận chuyển</h2>
                <p>Chuyển khoản qua ngân hàng</p>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-right">
          <h2 className="info-title-product">Đơn hàng (2 sản phẩm)</h2>
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            className="pay-boder m-3 pb-3"
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className="cart-product d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <div className="w-100 product-carts d-flex align-items-center">
                    <div className="pay-post">
                      <img
                        className="product-carts-img"
                        src={product.image}
                        alt={product.name}
                      />
                      <span className="product-thumbnail__wrapper">
                        {product.quantity}
                      </span>
                    </div>
                    <div className="roduct-carts-boxs">
                      <div className="product-pay-title">{product.name}</div>
                      <div className="product-carts-btns">
                        {/* <Button
                        className="product-carts-btn"
                        onClick={() =>
                          setModalState({
                            isOpen: true,
                            currentProductId: product.id,
                          })
                        }
                      > */}
                        {product.color}, {product.size}
                        {/* </Button> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="w-15">{product.price.toLocaleString()}₫</div> */}
                {/* <div className="w-15">
                <div className="d-flex align-items-center">
                  <button
                    className="btn-subtract"
                    onClick={() => handleSubtractQuantity(product.id)}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={product.quantity}
                    onChange={(e) =>
                      handleQuantityChange(product.id, Number(e.target.value))
                    }
                    className="input-quantity"
                  />
                  <button
                    className="btn-subtract"
                    onClick={() => handleAddQuantity(product.id)}
                  >
                    +
                  </button>
                </div>
              </div> */}
                <div className="d-flex justify-content-center align-items-center">
                  <div className="thanhTien">
                    {(product.price * product.quantity).toLocaleString()}₫
                  </div>
                  {/* <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip> */}
                </div>
              </div>
            ))}
          </Box>
          <div className="total-amount m-3 d-flex justify-content-between align-items-center pay-boder pb-3">
            <h2 className="total-amount-title">Tổng tiền</h2>
            <span className="total-amount-price">
              {totalAmount.toLocaleString()}₫
            </span>
          </div>
        </div>
      </div>
      <div className="checkout-btn d-flex justify-content-center">
        <Button className="checkout-buys">Tiếp tục mua sắm</Button>
        <Button className="print-buys">
          <PrintIcon className="print-buys-icon" />
          in
        </Button>
      </div>
    </div>
  );
}

export default Checkout;
