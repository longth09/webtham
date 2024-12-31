import React, { useEffect, useState } from "react";
import Banner from "../assets/imgs/banner.png";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const [userData, setUserData] = useState(null);

  const logOut = () => {
    googleLogout();
    setUserData(null);
  };

  useEffect(() => {
    document.title = "Đăng Nhập";
  }, []);
  return (
    <div className="login-body">
      <img className="login-backgroud" src={Banner} alt="" />
      <div className="login-block">
        <h1 className="login-title">Đăng nhập</h1>
        <div className="login-form">
          <TextField
            id="standard-basic"
            className="login-input"
            label="Email"
            variant="standard"
            type="email"
          />
          <FormControl
            sx={{ m: 1, width: "100%", margin: 0 }}
            variant="standard"
          >
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              className="login-input"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button className="login-button">Đăng nhập</Button>

          {!userData && (
            <GoogleLogin
              className="w-100"
              onSuccess={(credentialResponse) => {
                const details = jwtDecode(credentialResponse.credential);
                const userData = {
                  picture: details.picture,
                  name: details.name,
                  email: details.email,
                };
                setUserData(userData);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          )}
          {userData && (
            <div>
              <h3 onClick={() => logOut()}>Logout</h3>
              <img src={userData.picture} alt="Profile" />
              <h3>Name: {userData.name}</h3>
              <p>Email: {userData.email}</p>
            </div>
          )}
        </div>
        <div className="d-flex justify-content-center mt-20">
          <p>Bạn chưa có tài khoản? </p>
          <Link to={"/signup"} className="login-btn-signup">
            Đăng ký tại đây!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
