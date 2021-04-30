import routes from './routes'
import Menu from './components/menu/menu'
import Header from './components/header/header'
import styles from './app.module.scss'

import {
    Switch,
    useLocation,
    Route
  } from "react-router-dom";

const App = () => {
    let location = useLocation();
    let section = location.pathname.split('/', 2).pop();

    return (
        <div>
            <div className={styles.menu}><Menu></Menu></div>
            <div className={styles.header}><Header listItems={routes} currentSection={section!}></Header></div>

            <Switch>
            {routes.map(route => {
                const Component = route.component;
                return (
                    <Route path={route.url} key={route.url}>
                        <Component/>

                    </Route>
                )
            })}
        </Switch>
        </div>
    )
}

export default App;