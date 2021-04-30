import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import styles from './header.module.scss';
import logo from '../../assets/images/proforto-logo.png';
import { RouteItem } from '../../routes';

interface HeaderProps {
    listItems: RouteItem[]
    currentSection: string
}

export default function Header({listItems, currentSection}: HeaderProps) {
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
      <AppBar color="default" position="static">
        <Toolbar className={styles.toolbar}>
            <div className={styles.header}>
            <ul>
                <li>
                    <img alt="Proforto logo" src={logo}/>
                </li>
                {listItems.filter(item => item.section === currentSection).map(listItem => (
                    !listItem.visible ? null :                     
                    <li key={listItem.url}>
                        <NavLink activeClassName={styles.active} to={listItem.url}>
                            {listItem.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <ul>
                <li>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        size='medium'
                    >
                    <AccountCircle fontSize='large'/>
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