import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import ReactImageGallery from "react-image-gallery";
import Products from "./Products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);

  const handleOnChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleSubtractQuantity = () => {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const productDetailItem = {
    images: [
      {
        original:
          "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m037mv0kmgzza6.webp",
        thumbnail:
          "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m037mv0kmgzza6.webp",
      },
      {
        original:
          "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m037ztpbolilbd.webp",
        thumbnail:
          "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m037ztpbolilbd.webp",
      },
      {
        original:
          "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m037mtq8i9rhb4.webp",
        thumbnail:
          "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m037mtq8i9rhb4.webp",
      },
      {
        original:
          "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m037muod4c5r3c.webp",
        thumbnail:
          "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m037muod4c5r3c.webp",
      },
      {
        original:
          "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m037mu7psovh2c.webp",
        thumbnail:
          "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m037mu7psovh2c.webp",
      },
    ],
    title:
      "Thảm Trải Sàn Phòng Khách Thảm Phông Nền Chụp Ảnh Chất Liệu Cotton Cao Cấp Màu Be, Nâu, Xám",
    reviews: "150",
    availability: true,
    brand: "apex",
    category: "Sofa",
    sku: "BE45VGTRK",
    price: 4500000,
    priceOriginal: 9000000,
    previousPrice: 599,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem exercitationem voluptate sint eius ea assumenda provident eos repellendus qui neque! Velit ratione illo maiores voluptates commodi eaque illum, laudantium non!",
    size: [
      "1m x 1m5",
      "1m x 2m",
      "1m2 x 1m8",
      "1m5 x 1m8",
      "1m5 x 2m",
      "1m6 x 2m3",
      "2m x 2m5",
      "2m x 3m",
    ],
    color: ["gray", "violet", "red"],
  };
  return (
    <>
      <section className="detail-header container d-flex mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
        {/* image gallery */}
        <div className="container mx-auto px-4">
          <ReactImageGallery
            showBullets={true}
            showFullscreenButton={true}
            showPlayButton={false}
            items={productDetailItem.images}
            showNav={false}
          />

          {/* /image gallery  */}
        </div>
        {/* description  */}

        <div className="mx-auto px-5 lg:px-5">
          <h2 className="text-2xl font-bold lg:pt-0">
            {productDetailItem.title}
          </h2>
          <div className="d-flex align-items-center">
            <p className="mt-4 text-4xl font-bold text-violet-900 price-pre">
              {productDetailItem.price}
              {" VNĐ"}
              {/* <span className="text-xs text-gray-400 line-through">
            ${productDetailItem.previousPrice}
          </span> */}
            </p>
            <p className="mt-4 text-4xl font-bold text-violet-900 price-orinal">
              {productDetailItem.priceOriginal}
              {" VNĐ"}
              {/* <span className="text-xs text-gray-400 line-through">
            ${productDetailItem.previousPrice}
          </span> */}
            </p>
          </div>
          <div className="mt-6">
            <p className="pb-2 text-xs text-gray-500 size-text">Kích thước</p>
            <div className="d-flex align-content-start flex-wrap">
              {productDetailItem.size.map((x, index) => {
                return (
                  <div key={index} className="mr-5">
                    <input
                      type="radio"
                      class="btn-check"
                      name="options-base"
                      id={x}
                      autocomplete="off"
                    />
                    <label class="btn" for={x}>
                      {x}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-15">
            <p className="pb-2 text-xs text-gray-500 size-text">Màu sắc</p>
            <div className="d-flex align-content-start flex-wrap">
              {productDetailItem.color.map((x, index) => {
                return (
                  <div key={index} className="mr-5">
                    <input
                      type="radio"
                      class="btn-check"
                      name="color"
                      id={x}
                      autocomplete="off"
                    />
                    <label class="btn" for={x}>
                      {x}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-15">
            <p className="pb-2 text-xs text-gray-500 size-text">Số lượng</p>
            <div className="d-flex align-items-center">
              <button className="btn-subtract" onClick={handleSubtractQuantity}>
                -
              </button>
              <input
                type="text"
                value={quantity}
                onChange={(e) => handleOnChange(e)}
                className="input-quantity"
              />
              <button className="btn-subtract" onClick={handleAddQuantity}>
                +
              </button>
            </div>
          </div>

          <div className="mt-7 d-flex align-items-center flex-wrap">
            <button className="btn-add-cart d-flex align-items-center justify-content-center">
              <FaCartPlus className="cart-icon" />
              Thêm vào giỏ hàng
            </button>
            <button className="btn-buy d-flex align-items-center justify-content-center">
              <GiMoneyStack className="cart-icon" />
              mua ngay
            </button>
          </div>
        </div>
      </section>
      <div className="product-discriptions">
        <p className="product-pro-title product-pro-title-dis">
          Mô tả sản phẩm
        </p>
        <ul className="pro-dis-lists">
          <li className="pro-dis-list">
            <div className="d-flex justify-content-center">
              <FontAwesomeIcon className="pro-dis-list-icon" icon={faRecycle} />
              <span>Chất liệu mặt trên</span>
            </div>
            <div>
              <span>
                <strong> Len,Viscose</strong>
              </span>
            </div>
          </li>
          <li className="pro-dis-list">
            <div className="d-flex justify-content-center">
              <FontAwesomeIcon className="pro-dis-list-icon" icon={faRecycle} />
              <span>Độ dày thảm (mm):</span>
            </div>
            <div>
              <span>
                <strong> 10 - 13</strong>
              </span>
            </div>
          </li>
          <li className="pro-dis-list">
            <div className="d-flex justify-content-center">
              <FontAwesomeIcon className="pro-dis-list-icon" icon={faRecycle} />
              <span>Chất liệu mặt đáy</span>
            </div>
            <div>
              <span>
                <strong> Sợi đay</strong>
              </span>
            </div>
          </li>
          <li className="pro-dis-list">
            <div className="d-flex justify-content-center">
              <FontAwesomeIcon className="pro-dis-list-icon" icon={faRecycle} />
              <span>Trọng lượng thảm</span>
            </div>
            <div>
              <span>
                <strong>2500 gram/m2</strong>
              </span>
            </div>
          </li>
        </ul>
        <div className="pro-dis-imgs">
          <img
            className="pro-dis-img"
            src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m037muod4c5r3c.webp"
            alt=""
          />
          <img
            className="pro-dis-img"
            src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m037mv0kmgzza6.webp"
            alt=""
          />
          <img
            className="pro-dis-img"
            src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m037mu7psovh2c.webp"
            alt=""
          />
          <img
            className="pro-dis-img"
            src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m037ztpbolilbd.webp"
            alt=""
          />
        </div>
      </div>
      <div className="product-pro">
        <p className="product-pro-title">Sản phẩm liên quan</p>
        <Products />
      </div>
    </>
  );
}

export default ProductDetail;
