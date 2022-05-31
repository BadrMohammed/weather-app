import { useState } from 'react';
import SidebarView from './SidebarView';
import routes from '../../routing/routes';

function SidebarController({ toggled, handleToggleSidebar }: any) {
  const [active, setActive] = useState<string>('');
  const goToPage = (event: any, name: string, path: string) => {
    event.preventDefault();
    setActive(name);
  };
  return (
    <SidebarView
      active={active}
      goToPage={goToPage}
      toggled={toggled}
      handleToggleSidebar={handleToggleSidebar}
      routes={routes}
    />
  );
}

export default SidebarController;
