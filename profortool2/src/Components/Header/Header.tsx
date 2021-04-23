import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import styles from './Header.module.scss';
import logo from '../../Assets/Images/proforto-logo.png';
import { Link } from "react-router-dom";

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
  
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
    <div>
      <AppBar position="static">
        <Toolbar>
            <div className={styles.header}>
            <ul>
                <li>
                    <Link to="/">
                        <img alt="Proforto logo" src={logo}/>
                    </Link>
                </li>
                <li>
                    <Link to="/sales-orders">
                        Sales orders
                    </Link>
                </li>
                <li>
                    <Link to="/shipments">
                        Shipments
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                    <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                    </Menu>
                </li>
            </ul>
            </div>
        </Toolbar>
      </AppBar>
    </div>
    )
}