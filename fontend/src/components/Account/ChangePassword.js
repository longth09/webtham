import React, { useState } from "react";
import "../../assets/css/ChangePassword.css";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function ChangePassword() {
  const [passwordVisibility, setPasswordVisibility] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleClickShowPassword = (field) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="change-password">
      <h2 className="edit-profile-title">Đổi mật khẩu</h2>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
        className="w-100 p-0 m-0"
      >
        {[
          { label: "Nhập mật khẩu cũ", field: "oldPassword" },
          { label: "Nhập mật khẩu mới", field: "newPassword" },
          { label: "Nhập lại mật khẩu mới", field: "confirmPassword" },
        ].map(({ label, field }) => (
          <FormControl
            key={field}
            className="text-field"
            sx={{ m: 1, width: "100%", margin: 0 }}
            variant="standard"
          >
            <InputLabel htmlFor={`password-${field}`}>{label}</InputLabel>
            <Input
              id={`password-${field}`}
              className="login-input"
              type={passwordVisibility[field] ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      passwordVisibility[field]
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={() => handleClickShowPassword(field)}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                  >
                    {passwordVisibility[field] ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        ))}
        <div className="d-flex justify-content-end">
          <Button className="save-info">Lưu thông tin</Button>
        </div>
      </Box>
    </div>
  );
}

export default ChangePassword;
