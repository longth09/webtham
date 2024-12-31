import React from "react";
import Banner from "../assets/imgs/banner.png";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="products">
      <Link to={"/ProductDetail"} className="text-pr">
        <Card sx={{ maxWidth: 300 }} className="box-product m-10">
          <CardMedia
            sx={{ height: 300 }}
            image={
              "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m037muod4c5r3c.webp"
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom component="div" className="products-title">
              Thảm Trải Sàn Phòng Khách Thảm Phông Nền Chụp
            </Typography>
            <Typography sx={{ color: "text.dark" }} className="product-price">
              2.700.000 ₫
            </Typography>
            <div className="product-status">Order</div>
          </CardContent>
        </Card>
      </Link>
      <Link to={"/"} className="text-pr">
        <Card sx={{ maxWidth: 300 }} className="box-product m-10">
          <CardMedia
            sx={{ height: 300 }}
            image={
              "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2t133bpoavacd@resize_w450_nl.webp"
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom component="div" className="products-title">
              Thảm Trải Sàn Phòng Khách Thảm Phông Nền Chụp
            </Typography>
            <Typography sx={{ color: "text.dark" }} className="product-price">
              2.700.000 ₫
            </Typography>
            <div className="product-status">Order</div>
          </CardContent>
        </Card>
      </Link>
      <Link to={"/"} className="text-pr">
        <Card sx={{ maxWidth: 300 }} className="box-product m-10">
          <CardMedia sx={{ height: 300 }} image={Banner} title="green iguana" />
          <CardContent>
            <Typography gutterBottom component="div" className="products-title">
              Thảm Trải Sàn Phòng Khách Thảm Phông Nền Chụp
            </Typography>
            <Typography sx={{ color: "text.dark" }} className="product-price">
              2.700.000 ₫
            </Typography>
            <div className="product-status">Order</div>
          </CardContent>
        </Card>
      </Link>
      <Link to={"/"} className="text-pr">
        <Card sx={{ maxWidth: 300 }} className="box-product m-10">
          <CardMedia sx={{ height: 300 }} image={Banner} title="green iguana" />
          <CardContent>
            <Typography gutterBottom component="div" className="products-title">
              Thảm Trải Sàn Phòng Khách Thảm Phông Nền Chụp
            </Typography>
            <Typography sx={{ color: "text.dark" }} className="product-price">
              2.700.000 ₫
            </Typography>
            <div className="product-status">Order</div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

export default Products;
