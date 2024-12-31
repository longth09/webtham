import React, { useState } from "react";
import "../assets/css/ProductPage.css";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Products from "./Products";

function ProductPage() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);
  const [isStatusVisible, setIsStatusVisible] = useState(false);
  const [isColorVisible, setIsColorVisible] = useState(false);
  const [isPatternVisible, setIsPatternVisible] = useState(false);
  const [isShapeVisible, setIsShapeVisible] = useState(false);
  const [isSizeVisible, setIsSizeVisible] = useState(false);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const toggleSize = () => {
    setIsSizeVisible((prev) => !prev);
  };

  const toggleShape = () => {
    setIsShapeVisible((prev) => !prev);
  };

  const togglePattern = () => {
    setIsPatternVisible((prev) => !prev);
  };

  const toggleFilter = () => {
    setIsFilterVisible((prev) => !prev);
  };

  const toggleColor = () => {
    setIsColorVisible((prev) => !prev);
  };

  const toggleStatus = () => {
    setIsStatusVisible((prev) => !prev);
  };

  const toggleCategory = () => {
    setIsCategoryVisible((prev) => !prev);
  };

  return (
    <div className="product-main container">
      <div className="product-main_head">
        <div className="product-main_head-title">
          <h2>Thảm trải sàn</h2>
          <p>(506 sản phẩm)</p>
        </div>
        <div className="head-title-btns">
          <Button className="head-title-btn">Thảm lông ngắn</Button>
          <Button className="head-title-btn">Thảm lì</Button>
          <Button className="head-title-btn">Thảm dệt 3D</Button>
          <Button className="head-title-btn">Thảm lông dài</Button>
        </div>
      </div>
      <div className="product-main_body">
        <div className="product-main_left">
          <div className="product-main_left-filter" onClick={toggleFilter}>
            <div className="filter-block">
              <FilterAltIcon />
              <h3 className="filter-title">Bộ lọc</h3>
            </div>
            {isFilterVisible ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </div>
          <div className={`filters-down ${isFilterVisible ? "show" : ""}`}>
            <div className="category-filters-block">
              <div className="category-filters" onClick={toggleCategory}>
                <h3 className="category-title">Danh mục sản phẩm</h3>
                {isCategoryVisible ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </div>
              <div
                className={`category-childs m-0 ${isCategoryVisible ? "show" : ""}`}
              >
                <div className="category-child">
                  <h5 className="category-child-add m-0">+</h5>
                  <h5 className="category-child-title m-0">Thảm lông ngắn</h5>
                </div>
                <div className="category-child">
                  <h5 className="category-child-add m-0">+</h5>
                  <h5 className="category-child-title m-0">Thảm lì</h5>
                </div>
                <div className="category-child">
                  <h5 className="category-child-add m-0">+</h5>
                  <h5 className="category-child-title m-0">Thảm dệt 3D</h5>
                </div>
                <div className="category-child">
                  <h5 className="category-child-add m-0">+</h5>
                  <h5 className="category-child-title m-0">Thảm lông dài</h5>
                </div>
              </div>
            </div>
            <div className="category-filters-block">
              <div className="category-filters" onClick={toggleStatus}>
                <h3 className="category-title">Tình trạng</h3>
                {isStatusVisible ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </div>
              <div
                className={`category-childs m-0 ${isStatusVisible ? "show" : ""}`}
              >
                <div className="status-child">
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Tất cả sản phẩm"
                  />
                </div>
                <div className="status-child">
                  <FormControlLabel control={<Checkbox />} label="Có sẵn" />
                </div>
                <div className="status-child">
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Hàng đặt trước"
                  />
                </div>
              </div>
            </div>
            <div className="category-filters-block">
              <div className="category-filters" onClick={toggleColor}>
                <h3 className="category-title">Màu sắc</h3>
                {isColorVisible ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </div>
              <div
                className={`category-childs m-0 ${isColorVisible ? "show" : ""}`}
              >
                <div className="status-child">
                  <FormControlLabel control={<Checkbox />} label="Đỏ" />
                </div>
                <div className="status-child">
                  <FormControlLabel control={<Checkbox />} label="Trắng" />
                </div>
                <div className="status-child">
                  <FormControlLabel control={<Checkbox />} label="Hồng" />
                </div>
              </div>
            </div>
            <div className="category-filters-block">
              <div className="category-filters" onClick={togglePattern}>
                <h3 className="category-title">Họa tiết</h3>
                {isPatternVisible ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </div>
              <div
                className={`category-childs m-0 ${isPatternVisible ? "show" : ""}`}
              >
                <div className="status-child">
                  <FormControlLabel control={<Checkbox />} label="Trơn" />
                </div>
                <div className="status-child">
                  <FormControlLabel control={<Checkbox />} label="Hình học" />
                </div>
                <div className="status-child">
                  <FormControlLabel control={<Checkbox />} label="Tối giản" />
                </div>
              </div>
            </div>
            <div className="category-filters-block">
              <div className="category-filters" onClick={toggleShape}>
                <h3 className="category-title">Hình dáng</h3>
                {isShapeVisible ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </div>
              <div
                className={`category-childs m-0 ${isShapeVisible ? "show" : ""}`}
              >
                <div className="status-child">
                  <FormControlLabel control={<Checkbox />} label="Chữ nhật" />
                </div>
                <div className="status-child">
                  <FormControlLabel control={<Checkbox />} label="Tròn" />
                </div>
                <div className="status-child">
                  <FormControlLabel control={<Checkbox />} label="Dạng khác" />
                </div>
              </div>
            </div>
            <div className="category-filters-block">
              <div className="category-filters" onClick={toggleSize}>
                <h3 className="category-title">Kích thước</h3>
                {isSizeVisible ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </div>
              <div
                className={`category-childs m-0 ${isSizeVisible ? "show" : ""}`}
              >
                <div className="status-child">
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Size rất nhỏ"
                  />
                </div>
                <div className="status-child">
                  <FormControlLabel control={<Checkbox />} label="Size vừa" />
                </div>
                <div className="status-child">
                  <FormControlLabel control={<Checkbox />} label="Size lớn" />
                </div>
                <div className="status-child">
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Size rất lớn"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-main_right">
          <div className="product-right_head">
            <h2 className="product-right_head-title m-0">Thảm trải sàn</h2>
            <div className="product-right_head-fill">
              <FormControl
                className="m-0"
                variant="standard"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Sắp xếp theo
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <Products />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
