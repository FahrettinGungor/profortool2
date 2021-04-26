import Sales from './Pages/Sales/Sales'
import Shipments from './Pages/Shipments/Shipments'
import Home from './Pages/Home/Home'

export interface RouteItem {
    url: string,
    name: string,
    component: React.ComponentType,
    visible: boolean
}

const routes: RouteItem[] = [
    {
        url: "/",
        name: "Home",
        component: Home,
        visible: false
    },
    {
        url: "/sales-orders",
        name: "Sales orders",
        component: Sales,
        visible: true
    },
    {
        url: "/shipments",
        name: "Shipments",
        component: Shipments,
        visible: true
    }
]

export default routes