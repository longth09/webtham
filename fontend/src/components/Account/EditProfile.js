import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "../../assets/css/EditProfile.css";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

function EditProfile() {
  return (
    <div className="edit-profile">
      <h2 className="edit-profile-title">Chỉnh sửa thông tin cá nhân</h2>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
        className="w-100 p-0 m-0"
      >
        <TextField
          label="Tên"
          id="outlined-size-small"
          size="small"
          className="text-field p-0 m-0"
        />
        <TextField
          label="Số điện thoại"
          id="outlined-size-small"
          size="small"
          className="text-field p-0 m-0"
        />
        <TextField
          label="Email nhận hóa đơn"
          id="outlined-size-small"
          size="small"
          className="text-field p-0 m-0"
        />
        <FormControl className="text-field">
          <FormLabel id="demo-row-radio-buttons-group-label">
            Giới tính
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Nam" />
            <FormControlLabel value="male" control={<Radio />} label="Nữ" />
            <FormControlLabel value="other" control={<Radio />} label="Khác" />
          </RadioGroup>
        </FormControl>
        <LocalizationProvider className="p-0 m-0" dateAdapter={AdapterDayjs}>
          <DemoContainer className="p-0 m-0" components={["DatePicker"]}>
            <DatePicker className="p-0 m-0 date-birth" label="Ngày sinh" />
          </DemoContainer>
        </LocalizationProvider>
        <div className="d-flex justify-content-end">
          <Button className="save-info">Lưu thông tin</Button>
        </div>
      </Box>
    </div>
  );
}

export default EditProfile;
