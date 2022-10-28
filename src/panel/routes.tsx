import { IAppRoute } from "routes"

import PanelIndexScreen from "./screens/PanelIndexScreen"
import PanelInvoicesScreen from "./screens/PanelInvoicesScreen"

export const PanelRoutes: IAppRoute[] = [
    {
        name: 'Dashboard',
        path: '/panel',
        element: <PanelIndexScreen />
    },
    {
        name: 'Invoices',
        path: '/panel/invoices',
        element: <PanelInvoicesScreen />
    }
]
