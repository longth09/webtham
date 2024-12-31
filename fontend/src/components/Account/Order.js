import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React from "react";
import Cards from "../Cards";

function Order() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            className="d-flex box-shadow"
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "black", // Đổi màu thành đen
                },
              }}
            >
              <Tab className="tab-btns" label="Tất cả" value="1" />
              <Tab className="tab-btns" label="Chờ xác nhận" value="2" />
              <Tab className="tab-btns" label="Đang chuẩn bị" value="3" />
              <Tab className="tab-btns" label="Đang vận chuyển" value="4" />
              <Tab className="tab-btns" label="Đã giao hàng" value="5" />
              <Tab className="tab-btns" label="Đã hủy" value="6" />
            </TabList>
          </Box>
          <TabPanel className="p-0" value="1">
            <Cards />
            <Cards />
          </TabPanel>
          <TabPanel value="2">Chờ xác nhận</TabPanel>
          <TabPanel value="3">Đang chuẩn bị</TabPanel>
          <TabPanel value="4">Đang vận chuyển</TabPanel>
          <TabPanel value="5">Đã giao hàng</TabPanel>
          <TabPanel value="6">Đã hủy</TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

export default Order;
