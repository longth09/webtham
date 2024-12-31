import React from "react";
import "../assets/css/Blogs.css";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CardsBlogs from "./CardsBlogs";

function Blogs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="blogs container">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            className="d-flex justify-content-center"
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
              <Tab
                className="tab-btns"
                label="Kiến thức thảm trải sàn"
                value="1"
              />
              <Tab
                className="tab-btns"
                label="Thiết kế phòng khách"
                value="2"
              />
              <Tab className="tab-btns" label="Kiến thức sofa" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <CardsBlogs />
          </TabPanel>
          <TabPanel value="2">
            <CardsBlogs />
          </TabPanel>
          <TabPanel value="3">
            <CardsBlogs />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default Blogs;
