import React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Typography } from "@mui/material";
import logo from "../Header/logo.png";
import "./Header.css";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  textAlign: "center",
  fontWeight: "bold",
  letterSpacing: "0.1em",
  fontFamily: 'Shantell Sans',
  fontSize: "3.5rem",
  color: "black", // add a color to the title
}));

const StyledLogo = styled("img")(({ theme }) => ({
  width: "50px",
  height: "50px",
  marginRight: "10px",
}));

export default function Header() {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledLogo
          src={logo}
          alt="Watchworthy logo"
          onClick={() => (window.location.href = "/")}
        />
        <StyledTypography variant="h6">
          Watchworthy
        </StyledTypography>
      </StyledToolbar>
    </StyledAppBar>
  );
}
