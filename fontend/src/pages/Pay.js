import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";
import axios from "axios";
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Switch,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaymentIcon from "@mui/icons-material/Payment";

function Pay() {
  // Danh sách sản phẩm với số lượng ban đầu
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

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [allDistricts, setAllDistricts] = useState([]);
  const [allWards, setAllWards] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const [loadingProvinces, setLoadingProvinces] = useState(true);
  const [loadingDistricts, setLoadingDistricts] = useState(false);
  const [loadingWards, setLoadingWards] = useState(false);

  const [showBankInfo, setShowBankInfo] = useState(false);
  const [showPartialPaymentInfo, setShowPartialPaymentInfo] = useState(false);

  // Lấy danh sách Tỉnh/Thành phố
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axios.get(
          "https://provinces.open-api.vn/api/p/"
        );
        const options = response.data.map((province) => ({
          value: province.code,
          label: province.name,
        }));
        setProvinces(options);
        setLoadingProvinces(false);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách Tỉnh/Thành phố:", error);
      }
    };

    fetchProvinces();
  }, []);

  // Lấy toàn bộ danh sách Quận/Huyện và Phường/Xã
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [districtResponse, wardResponse] = await Promise.all([
          axios.get("https://provinces.open-api.vn/api/d/"),
          axios.get("https://provinces.open-api.vn/api/w/"),
        ]);
        setAllDistricts(districtResponse.data);
        setAllWards(wardResponse.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu Quận/Huyện hoặc Phường/Xã:", error);
      }
    };

    fetchAllData();
  }, []);

  // Cập nhật danh sách Quận/Huyện theo Tỉnh/Thành phố
  useEffect(() => {
    if (selectedProvince) {
      const filteredDistricts = allDistricts.filter(
        (district) => district.province_code === selectedProvince.value
      );
      const options = filteredDistricts.map((district) => ({
        value: district.code,
        label: district.name,
      }));
      setDistricts(options);
      setWards([]); // Xóa danh sách Phường/Xã khi thay đổi Tỉnh/Thành phố
      setSelectedDistrict(null);
    } else {
      setDistricts([]);
      setWards([]);
      setSelectedDistrict(null);
    }
  }, [selectedProvince, allDistricts]);

  // Cập nhật danh sách Phường/Xã theo Quận/Huyện
  useEffect(() => {
    if (selectedDistrict) {
      const filteredWards = allWards.filter(
        (ward) => ward.district_code === selectedDistrict.value
      );
      const options = filteredWards.map((ward) => ({
        value: ward.code,
        label: ward.name,
      }));
      setWards(options);
    } else {
      setWards([]);
    }
  }, [selectedDistrict, allWards]);

  // Hàm tính tổng tiền
  const calculateTotal = () => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  return (
    <div className="pay-body container d-flex justify-content-between">
      <div className="pay-left d-flex justify-content-between">
        <div className="info-block">
          <h2 className="info-title">Thông tin nhận hàng</h2>
          <div>
            <Form.Control
              type="email"
              placeholder="Email"
              id="email-info"
              aria-describedby="passwordHelpBlock"
              className="input-info"
            />
            <Form.Control
              type="text"
              placeholder="Tên người nhận"
              id="name-info"
              aria-describedby="passwordHelpBlock"
              className="input-info"
            />
            <Form.Control
              type="text"
              placeholder="Số điện thoại"
              id="phone-info"
              aria-describedby="passwordHelpBlock"
              className="input-info"
            />
            <Select
              className="basic-single input-info w-100"
              classNamePrefix="select"
              isDisabled={loadingProvinces}
              isLoading={loadingProvinces}
              isClearable={true}
              isSearchable={true}
              placeholder="Chọn tỉnh/thành phố"
              name="province"
              options={provinces}
              onChange={setSelectedProvince}
            />
            <Select
              className="basic-single input-info w-100"
              classNamePrefix="select"
              isDisabled={!selectedProvince || loadingDistricts}
              isLoading={loadingDistricts}
              isClearable={true}
              isSearchable={true}
              placeholder="Chọn quận/huyện"
              name="district"
              options={districts}
              onChange={setSelectedDistrict}
            />
            <Select
              className="basic-single input-info w-100"
              classNamePrefix="select"
              isDisabled={!selectedDistrict || loadingWards}
              isLoading={loadingWards}
              isClearable={true}
              isSearchable={true}
              placeholder="Chọn phường/xã"
              name="ward"
              options={wards}
            />
            <Form.Control
              type="text"
              placeholder="Địa chỉ cụ thể"
              id="address-info"
              aria-describedby="passwordHelpBlock"
              className="input-info"
            />
            <Form.Control
              as="textarea"
              placeholder="Ghi chú"
              id="note-info"
              aria-describedby="passwordHelpBlock"
              className="input-info"
            />
          </div>
        </div>
        <div className="pays-block">
          <h2 className="info-title">Phương thức thanh toán</h2>
          <FormGroup>
            <FormControlLabel
              className="border"
              control={
                <Switch
                  checked={showBankInfo}
                  onChange={() => {
                    if (showBankInfo) {
                      setShowBankInfo(false);
                    } else {
                      setShowBankInfo(true);
                      setShowPartialPaymentInfo(false);
                    }
                  }}
                />
              }
              label={
                <div className="d-flex justify-content-between align-items-center">
                  <AccountBalanceIcon />
                  <span className="payment-method">
                    Chuyển khoản qua ngân hàng
                  </span>
                </div>
              }
            />
            {showBankInfo && (
              <div className="bank-info mb-3 p-3 border">
                <p>Bạn thanh toán vào tài khoản ngân hàng như sau</p>
                <p>
                  <strong>Ngân hàng:</strong> Vietcombank
                </p>
                <p>
                  <strong>Số tài khoản:</strong> 123456789
                </p>
                <p>
                  <strong>Chủ tài khoản:</strong> Nguyễn Văn A
                </p>
                <p>
                  Nội dung chuyển khoản: [Tên] [Số điện thoại đặt hàng] (ví dụ:
                  Thanh 0909 900 999)
                </p>
                <p>
                  D'senco sẽ gọi điện thoại cho bạn để xác nhận đơn hàng trong
                  vòng 1 ngày làm việc kể từ lúc bạn đặt hàng nhé.
                </p>
              </div>
            )}
            <FormControlLabel
              className="border mt-3"
              control={
                <Switch
                  checked={showPartialPaymentInfo}
                  onChange={() => {
                    if (showPartialPaymentInfo) {
                      setShowPartialPaymentInfo(false);
                    } else {
                      setShowPartialPaymentInfo(true);
                      setShowBankInfo(false);
                    }
                  }}
                />
              }
              label={
                <div className="d-flex justify-content-between align-items-center">
                  <PaymentIcon />
                  <span className="payment-method">
                    Cọc 30% và thanh toán khi nhận hàng
                  </span>
                </div>
              }
            />
            {showPartialPaymentInfo && (
              <div className="bank-info mb-3 p-3 border">
                <p>
                  <strong>Số tiền cọc:</strong> 30% tổng giá trị đơn hàng
                </p>
                <p>
                  Số tiền còn lại sẽ được thanh toán khi nhận hàng. Nhân viên
                  của chúng tôi sẽ liên hệ để xác nhận.
                </p>
              </div>
            )}
          </FormGroup>
        </div>
      </div>
      <div className="pay-right">
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
            {calculateTotal().toLocaleString()}₫
          </span>
        </div>
        <div className="m-3">
          <Button className="payment-btn">Đặt hàng</Button>
        </div>
      </div>
    </div>
  );
}

export default Pay;
