/* Components */
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import routes from '../../routes'
import { useHistory } from "react-router-dom";

/* Icons */
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SettingsIcon from '@material-ui/icons/Settings';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EuroIcon from '@material-ui/icons/Euro';

/* Styles */
import styles from './menu.module.scss'

const Menu = () => {
    const [selectedIndex, setSelectedKey] = React.useState("sales");

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
            <ListItemIcon><TrendingUpIcon/></ListItemIcon>
            <ListItemText primary="Sales" />
          </ListItem>

          <ListItem className={styles.listItem} key="suppliers"
            button
            selected={selectedIndex === "suppliers"}
            onClick={() => handleListItemClick("suppliers")}
          >
            <ListItemIcon><ShoppingCartIcon/></ListItemIcon>
            <ListItemText primary="Suppliers" />
          </ListItem>

          <ListItem className={styles.listItem} key="production"
            button
            selected={selectedIndex === "production"}
            onClick={() => handleListItemClick("production")}
          >
            <ListItemIcon><SettingsIcon/></ListItemIcon>
            <ListItemText primary="Production" />
          </ListItem>

          <ListItem className={styles.listItem} key="returns"
            button
            selected={selectedIndex === "returns"}
            onClick={() => handleListItemClick("returns")}
          >
            <ListItemIcon><KeyboardReturnIcon/></ListItemIcon>
            <ListItemText primary="Returns" />
          </ListItem>

          <ListItem className={styles.listItem} key="purchases"
            button
            selected={selectedIndex === "purchases"}
            onClick={() => handleListItemClick("purchases")}
          >
            <ListItemIcon><LocalMallIcon/></ListItemIcon>
            <ListItemText primary="Purchases" />
          </ListItem>

          <ListItem className={styles.listItem} key="logistics"
            button
            selected={selectedIndex === "logistics"}
            onClick={() => handleListItemClick("logistics")}
          >
            <ListItemIcon><LocalShippingIcon/></ListItemIcon>
            <ListItemText primary="Logistics" />
          </ListItem>

          <ListItem className={styles.listItem} key="inventory"
            button
            selected={selectedIndex === "inventory"}
            onClick={() => handleListItemClick("inventory")}
          >
            <ListItemIcon><AssignmentIcon/></ListItemIcon>
            <ListItemText primary="Inventory" />
          </ListItem>

          <ListItem className={styles.listItem} key="finance"
            button
            selected={selectedIndex === "finance"}
            onClick={() => handleListItemClick("finance")}
          >
            <ListItemIcon><EuroIcon/></ListItemIcon>
            <ListItemText primary="Finance" />
          </ListItem>
      </List>
    )
}

export default Menu;