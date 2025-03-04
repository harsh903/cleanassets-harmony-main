import { useAuth } from '@/contexts/AuthContext';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Building2,
  Truck,
  FileText,
  Settings,
  HelpCircle,
  AlertCircle,
  Building,
  Wrench,
  Users
} from 'lucide-react';

const DashboardSidebar = () => {
  const { user } = useAuth();

  const getNavItems = () => {
    switch (user?.role) {
      case 'government':
        return [
          { icon: LayoutDashboard, label: 'Overview', to: '/dashboard' },
          { icon: Building, label: 'Infrastructure', to: '/dashboard/infrastructure' },
          { icon: Building2, label: 'Asset Management', to: '/dashboard/assets' },
          { icon: Truck, label: 'Fleet Management', to: '/dashboard/fleet' },
          { icon: FileText, label: 'Reports', to: '/dashboard/reports' },
          { icon: Settings, label: 'Settings', to: '/dashboard/settings' },
        ];
      case 'municipality':
        return [
          { icon: LayoutDashboard, label: 'Overview', to: '/dashboard' },
          { icon: Building, label: 'Infrastructure', to: '/dashboard/infrastructure' },
          { icon: Building2, label: 'My Assets', to: '/dashboard/assets' },
          { icon: HelpCircle, label: 'Help Center', to: '/dashboard/help' },
        ];
      case 'verification':
        return [
          { icon: LayoutDashboard, label: 'Overview', to: '/dashboard' },
          { icon: Building2, label: 'My Assets', to: '/dashboard/assets' },
          { icon: FileText, label: 'Reports', to: '/dashboard/reports' },
        ];
      default:
        return [];
    }
  };

  return (
    <Sidebar className="border-r bg-white">
      <SidebarHeader className="p-4 border-b">
        <div className="flex items-center gap-2">
          <Truck className="h-6 w-6 text-primary" />
          <div>
            <h2 className="text-lg font-semibold">SwachhGoa</h2>
            <p className="text-sm text-muted-foreground">{user?.role} Portal</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <nav className="space-y-1 p-2">
          {getNavItems().map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                  "hover:bg-gray-100",
                  isActive ? "bg-gray-100 text-primary" : "text-gray-600"
                )
              }
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </SidebarContent>
      <SidebarTrigger className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
    </Sidebar>
  );
};

export default DashboardSidebar;