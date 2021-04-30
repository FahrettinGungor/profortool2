/* Components */
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { useHistory } from "react-router-dom";
import { NavLink } from 'react-router-dom';

import routes from '../../routes'
import styles from './menu.module.scss'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SettingsIcon from '@material-ui/icons/Settings';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EuroIcon from '@material-ui/icons/Euro';

const Menu = () => {
    const [selectedIndex, setSelectedKey] = React.useState("");

    const history = useHistory();

    function handleClick(url: string) {
      history.push(url);
    }

    const handleListItemClick = (
      key: string
    ) => {
      setSelectedKey(key);
      let urlToNavigate = routes.filter(({section}) => section === key);
      handleClick(urlToNavigate[0].url)
    };

    return (
      <List component="nav" className={styles.menu}>
          <ListItem className={styles.listItem} key="sales"
            button
            selected={selectedIndex === "sales"}
            onClick={() => handleListItemClick("sales")}
          >
            <NavLink className={selectedIndex === "sales" ? styles.active : ""} to='sales'>
              <ListItemIcon><TrendingUpIcon/></ListItemIcon>
              Sales
            </NavLink>
          </ListItem>

          <ListItem className={styles.listItem} key="suppliers"
            button
            selected={selectedIndex === "suppliers"}
            onClick={() => handleListItemClick("suppliers")}
          >
            <NavLink className={selectedIndex === "suppliers" ? styles.active : ""} to='suppliers'>
              <ListItemIcon><ShoppingCartIcon/></ListItemIcon>
              Suppliers
            </NavLink>
          </ListItem>

          <ListItem className={styles.listItem} key="production"
            button
            selected={selectedIndex === "production"}
            onClick={() => handleListItemClick("production")}
          >
            <NavLink className={selectedIndex === "production" ? styles.active : ""} to='production'>
              <ListItemIcon><SettingsIcon/></ListItemIcon>
              Production
            </NavLink>
          </ListItem>

          <ListItem className={styles.listItem} key="returns"
            button
            selected={selectedIndex === "returns"}
            onClick={() => handleListItemClick("returns")}
          >
            <NavLink className={selectedIndex === "returns" ? styles.active : ""} to='returns'>
              <ListItemIcon><KeyboardReturnIcon/></ListItemIcon>
              Returns
            </NavLink>
          </ListItem>

          <ListItem className={styles.listItem} key="purchases"
            button
            selected={selectedIndex === "purchases"}
            onClick={() => handleListItemClick("purchases")}
          >
            <NavLink className={selectedIndex === "purchases" ? styles.active : ""} to='purchases'>
              <ListItemIcon><LocalMallIcon/></ListItemIcon>
              Purchases
            </NavLink>
          </ListItem>

          <ListItem className={styles.listItem} key="logistics"
            button
            selected={selectedIndex === "logistics"}
            onClick={() => handleListItemClick("logistics")}
          >
            <NavLink className={selectedIndex === "logistics" ? styles.active : ""} to='logistics'>
              <ListItemIcon><LocalShippingIcon/></ListItemIcon>
              Logistics
            </NavLink>
          </ListItem>

          <ListItem className={styles.listItem} key="inventory"
            button
            selected={selectedIndex === "inventory"}
            onClick={() => handleListItemClick("inventory")}
          >
            <NavLink className={selectedIndex === "inventory" ? styles.active : ""} to='inventory'>
              <ListItemIcon><AssignmentIcon/></ListItemIcon>
              Inventory
            </NavLink>
          </ListItem>

          <ListItem className={styles.listItem} key="finance"
            button
            selected={selectedIndex === "finance"}
            onClick={() => handleListItemClick("finance")}
          >
            <NavLink className={selectedIndex === "finance" ? styles.active : ""} to='finance'>
              <ListItemIcon><EuroIcon/></ListItemIcon>
              Finance
            </NavLink>
          </ListItem>
      </List>
    )
}

export default Menu;