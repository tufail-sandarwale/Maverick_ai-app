import { NAV_TYPE_ITEM, } from "constants/app.constant";
import DashboardsIcon from 'assets/dualicons/dashboards.svg?react'
import AppsIcon from 'assets/dualicons/applications.svg?react'
export const baseNavigation = [
    {
        id: 'dashboards',
        type: NAV_TYPE_ITEM,
        path: '/dashboards',
        title: 'Dashboards',
        transKey: 'nav.dashboards.dashboards',
        Icon: DashboardsIcon,
    },
    {
        id: 'apps',
        type: NAV_TYPE_ITEM,
        path: '/apps',
        title: 'Applications',
        transKey: 'nav.apps.apps',
        Icon: AppsIcon,
    },
]
