import routes from './Routes'

import {
    BrowserRouter as Switch,
    Route
  } from "react-router-dom";

const App = () => {
    return (
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
    )
}

export default App;