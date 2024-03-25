import { routes } from '@/config/routes'
import { Grid2X2, Home, PanelsTopLeft, Settings } from 'lucide-react'

export const AdminNavLinks = [
  {
    label: 'Home',
    route: routes.admin.home,
    icon: <Home size={18} className="mr-2" />,
  },
  {
    label: 'Project',
    route: routes.admin.project,
    icon: <PanelsTopLeft size={18} className="mr-2" />,
  },
  {
    label: 'Blog',
    route: routes.admin.blog,
    icon: <Grid2X2 size={18} className="mr-2" />,
  },
  {
    label: 'Settings',
    route: routes.admin.settings,
    icon: <Settings size={18} className="mr-2" />,
  },
]
