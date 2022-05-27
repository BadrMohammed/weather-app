import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SidebarView from './SidebarView';
import routes from '../../routing/routes';

function SidebarController({ collapsed, toggled, handleToggleSidebar }: any) {
  const [active, setActive] = useState<string>('');
  const history = useHistory();

  useEffect(() => {
    setActive(
      history.location.pathname.split('/')[
        history.location.pathname.split('/').length - 1
      ]
    );
  }, []);
  const goToPage = (event: any, name: string, path: string) => {
    event.preventDefault();
    setActive(name);
    history.push(path);
  };
  return (
    <SidebarView
      active={active}
      goToPage={goToPage}
      collapsed={collapsed}
      toggled={toggled}
      handleToggleSidebar={handleToggleSidebar}
      routes={routes}
    />
  );
}

export default SidebarController;
