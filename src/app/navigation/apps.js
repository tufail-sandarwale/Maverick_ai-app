import AppsIcon from 'assets/dualicons/applications.svg?react'
import BotIcon from 'assets/nav-icons/bot.svg?react'

import { NAV_TYPE_ROOT, NAV_TYPE_ITEM} from 'constants/app.constant'

const ROOT_APPS = '/apps'

const path = (root, item) => `${root}${item}`;

export const apps = {
    id: 'apps',
    type: NAV_TYPE_ROOT,
    path: '/apps',
    title: 'Applications',
    transKey: 'nav.apps.apps',
    Icon: AppsIcon,
    childs: [
       {
            id: 'apps.ai-chat',
            path: path(ROOT_APPS, '/ai-chat'),
            type: NAV_TYPE_ITEM,
            title: 'AI Chat',
            transKey: 'nav.apps.ai-chat',
            Icon: BotIcon,
        }
        
    ]
}
