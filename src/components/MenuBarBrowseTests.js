import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom'

const MenuBarBrowseTests = ({ panelName }) => {

  const navigate = useNavigate()

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <ArticleIcon onClick={() => navigate('/')}/>
        </IconButton>
        <Button color="inherit">Wyloguj</Button>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBarBrowseTests;
