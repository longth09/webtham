import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Tooltip,
} from "@mui/material";
import React, { useState, useMemo } from "react";
import CartColorsModal from "../components/CartColorsModal";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import DeleteIcon from "@mui/icons-material/Delete";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CouponModal from "../components/CouponModal";

function Cart() {
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);

  const handleApplyCoupon = (coupon) => {
    console.log("Mã giảm giá đã áp dụng:", coupon);
    // Xử lý logic giảm giá ở đây
  };
  // Danh sách sản phẩm với số lượng ban đầu
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Thảm Trải Sàn Phòng Khách Thảm Phông Nền Chụp Ảnh Chất Liệu Cotton Cao Cấp Màu Be, Nâu, Xám",
      price: 680000,
      quantity: 1,
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m037muod4c5r3c.webp",
      color: "Be",
      size: "1m6 x 2m3",
    },
    {
      id: 2,
      name: "Thảm Trải Sàn Phòng Khách Thảm Phông Nền Chụp Ảnh Chất Liệu Cotton Cao Cấp Màu Be, Nâu, Xám",
      price: 720000,
      quantity: 1,
      image:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m037muod4c5r3c.webp",
      color: "Nâu be",
      size: "2m x 3m",
    },
  ]);

  // Quản lý checkbox với trạng thái được chọn
  const [checked, setChecked] = useState(products.map(() => true));

  // Hàm tăng số lượng sản phẩm
  const handleAddQuantity = (productId) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  // Hàm giảm số lượng sản phẩm
  const handleSubtractQuantity = (productId) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(1, product.quantity - 1) }
          : product
      )
    );
  };

  // Hàm thay đổi số lượng trực tiếp
  const handleQuantityChange = (productId, newQuantity) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity > 0 ? newQuantity : 1 }
          : product
      )
    );
  };

  // Tính tổng tiền dựa trên các sản phẩm được chọn
  const calculateTotal = useMemo(() => {
    return products.reduce((total, product, index) => {
      return checked[index] ? total + product.price * product.quantity : total;
    }, 0);
  }, [products, checked]);

  // Hàm xử lý thay đổi checkbox
  const handleCheckboxChange = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  // Hàm chọn/bỏ chọn tất cả
  const handleToggleAll = (isChecked) => {
    setChecked(products.map(() => isChecked));
  };

  // Modal State
  const [modalState, setModalState] = useState({
    isOpen: false,
    currentProductId: null,
  });

  // Modal Fields
  const modalFields = [
    {
      id: "color",
      name: "color",
      label: "Chọn màu sắc",
      type: "radio",
      options: [
        { value: "be", label: "Màu Be" },
        { value: "nau", label: "Màu Nâu" },
        { value: "xam", label: "Màu Xám" },
      ],
    },
    {
      id: "size",
      name: "size",
      label: "Chọn kích thước",
      type: "radio",
      options: [
        { value: "s", label: "Size S" },
        { value: "m", label: "Size M" },
        { value: "l", label: "Size L" },
      ],
    },
  ];

  // Handle Modal Submit
  const handleModalSubmit = (productId, data) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, color: data.color, size: data.size }
          : product
      )
    );
  };

  return (
    <div className="cart-body container d-flex justify-content-between">
      <div className="cart-left">
        <div className="cart-titles d-flex justify-content-between align-items-center">
          <h1>Giỏ hàng</h1>
          <Button className="buys-btn">Mua Thêm</Button>
        </div>
        <div>
          <div className="cart-head d-flex justify-content-between align-items-center">
            <div className="w-40 d-flex justify-content-between align-items-center">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked.every(Boolean)}
                    indeterminate={
                      checked.some(Boolean) && !checked.every(Boolean)
                    }
                    onChange={(e) => handleToggleAll(e.target.checked)}
                  />
                }
              />
              <div className="w-100">Sản phẩm</div>
            </div>
            <div className="w-15">Đơn giá</div>
            <div className="w-15 d-flex justify-content-center">Số lượng</div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="thanhTien">Thành tiền</div>
              <Tooltip title="Delete">
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </div>
          </div>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {products.map((product, index) => (
              <div
                key={product.id}
                className="cart-product d-flex justify-content-between align-items-center"
              >
                <div className="w-40 d-flex align-items-center">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked[index]}
                        onChange={() => handleCheckboxChange(index)}
                      />
                    }
                  />
                  <div className="w-100 product-carts d-flex align-items-center">
                    <img
                      className="product-carts-img"
                      src={product.image}
                      alt={product.name}
                    />
                    <div className="roduct-carts-boxs">
                      <div className="product-carts-title">{product.name}</div>
                      <div className="product-carts-btns">
                        <Button
                          className="product-carts-btn"
                          onClick={() =>
                            setModalState({
                              isOpen: true,
                              currentProductId: product.id,
                            })
                          }
                        >
                          {product.color}, {product.size}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-15">{product.price.toLocaleString()}₫</div>
                <div className="w-15">
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
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="thanhTien">
                    {(product.price * product.quantity).toLocaleString()}₫
                  </div>
                  <Tooltip title="Delete">
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
            ))}
          </Box>
        </div>
        <CartColorsModal
          isOpen={modalState.isOpen}
          onClose={() =>
            setModalState({ isOpen: false, currentProductId: null })
          }
          onSubmit={(data) => {
            handleModalSubmit(modalState.currentProductId, data);
            setModalState({ isOpen: false, currentProductId: null });
          }}
          title="Chọn Màu Sắc và Kích Thước"
          formFields={modalFields}
          initialData={products}
        />
      </div>
      <div className="cart-right">
        <div className="coupons-box d-flex justify-content-between align-items-center">
          <div className="coupons d-flex align-items-center">
            <LoyaltyIcon />
            <span className="coupon-title">Ưu đãi</span>
          </div>
          <Button
            className="coupon-btn"
            onClick={() => setIsCouponModalOpen(true)}
          >
            Nhập ưu đãi
            <NavigateNextIcon />
          </Button>
        </div>
        <div className="prices-boxs">
          <div className="price-befors d-flex justify-content-between align-items-center">
            <span className="price-befors-title">Tổng tiền</span>
            <span className="price-befor">
              {calculateTotal.toLocaleString()}₫
            </span>
          </div>
          <hr className="line" />
          <div className="price-befors d-flex justify-content-between align-items-center">
            <span className="price-befors-title">Giảm giá</span>
            <span className="price-befor">0₫</span>
          </div>
          <hr className="line" />
          <div className="price-befors d-flex justify-content-between align-items-center">
            <span className="price-befors-title">
              Giá vận chuyển (Tạm tính)
            </span>
            <span className="price-befor">0₫</span>
          </div>
          <hr className="line" />
          <div className="price-befors d-flex justify-content-between align-items-center">
            <span className="price-befors-title">Thành tiền</span>
            <span className="price-befor">
              {calculateTotal.toLocaleString()}₫
            </span>
          </div>
        </div>

        <Button className="login-button">Thanh toán</Button>
      </div>
      <CouponModal
        isOpen={isCouponModalOpen}
        onClose={() => setIsCouponModalOpen(false)}
        onApply={handleApplyCoupon}
      />
    </div>
  );
}

export default Cart;
