import './Sidebar.scss';
import {
  ProSidebar, Menu, MenuItem, SidebarContent,
} from 'react-pro-sidebar';

function SidebarView({
  collapsed,
  toggled,
  handleToggleSidebar,
  active,
  goToPage,
  routes,
}: any) {
  return (
    <ProSidebar
      rtl={false}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarContent>
        <Menu iconShape="circle">
          {routes.map((route: any) => (route.name !== '404' ? (
            <MenuItem
              onClick={(e) => goToPage(e, route.name.toLowerCase(), route.url)}
              key={route.url}
              icon={route.Icon}
              active={active === route.name.toLowerCase()}
            >
              {route.name}
            </MenuItem>
          ) : null))}
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
}

export default SidebarView;
