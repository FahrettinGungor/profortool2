import SalesOrders from './pages/sales/sales-orders/sales-orders'
import Shipments from './pages/sales/shipments/shipments'
import Home from './pages/home/home'
import Suppliers from './pages/suppliers/suppliers'
import ProductionOrders from './pages/production/production-orders'

export interface RouteItem {
    url: string,
    name: string,
    component: React.ComponentType,
    visible: boolean,
    section?: Section
}

export type Section = "sales" | "suppliers" | "production";

const routes: RouteItem[] = [
    {
        url: "/",
        name: "Home",
        component: Home,
        visible: false
    },
    {
        url: "/sales/sales-orders",
        name: "Sales orders",
        component: SalesOrders,
        visible: true,
        section: "sales"
    },
    {
        url: "/sales/shipments",
        name: "Shipments",
        component: Shipments,
        visible: true,
        section: "sales"
    },
    {
        url: "/suppliers/suppliers",
        name: "Suppliers",
        component: Suppliers,
        visible: true,
        section: "suppliers"
    },
    {
        url: "/production/production-orders",
        name: "Production",
        component: ProductionOrders,
        visible: true,
        section: "production"
    }
]

export default routes