import SalesOrders from './pages/sales/sales-orders/sales-orders'
import Shipments from './pages/sales/shipments/shipments'
import Suppliers from './pages/suppliers/suppliers'
import ProductionOrders from './pages/production/production-orders'
import RMA from './pages/returns/rma/rma'
import RTV from './pages/returns/rtv/rtv'
import PurchaseOrders from './pages/purchase/purchase-orders/purchase-orders'
import PurchaseRequisitions from './pages/purchase/purchas-requisitions/purchase-requisitions'
import Outbound from './pages/logistics/outbound/outbound'
import Picking from './pages/logistics/picking/picking'
import Inventory from './pages/inventory/inventory'
import Credits from './pages/finance/credits/credits'
import Debits from './pages/finance/debits/debits'

export interface RouteItem {
    url: string,
    name: string,
    component: React.ComponentType,
    visible: boolean,
    section?: Section
}

export type Section = "sales" | "suppliers" | "production" | "returns" | "purchases" | "logistics" | "inventory" | "finance";

const routes: RouteItem[] = [{
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
        name: "Production orders",
        component: ProductionOrders,
        visible: true,
        section: "production"
    },    {
        url: "/returns/rma",
        name: "RMA",
        component: RMA,
        visible: true,
        section: "returns"
    },
    {
        url: "/returns/rtv",
        name: "RTV",
        component: RTV,
        visible: true,
        section: "returns"
    },
    {
        url: "/purchases/purchase-orders",
        name: "Purchase orders",
        component: PurchaseOrders,
        visible: true,
        section: "purchases"
    },
    {
        url: "/purchases/purchase-requisitions",
        name: "Purchase requisitions",
        component: PurchaseRequisitions,
        visible: true,
        section: "purchases"
    },
    {
        url: "/logistics/outbound",
        name: "Outbound",
        component: Outbound,
        visible: true,
        section: "logistics"
    },
    {
        url: "/logistics/picking",
        name: "Picking",
        component: Picking,
        visible: true,
        section: "logistics"
    },
    {
        url: "/inventory/inventory",
        name: "Inventory",
        component: Inventory,
        visible: true,
        section: "inventory"
    },
    {
        url: "/finance/credits",
        name: "Credits",
        component: Credits,
        visible: true,
        section: "finance"
    },
    {
        url: "/finance/debits",
        name: "Debits",
        component: Debits,
        visible: true,
        section: "finance"
    }
]

export default routes