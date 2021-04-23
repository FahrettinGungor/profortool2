import Header from './Components/Header/Header'

import {
    BrowserRouter as Router
} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Router>
                <Header></Header>
            </Router>
        </div>
    )
}

export default App;