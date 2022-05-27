import React, { Suspense, useState } from 'react';
import { withRouter } from 'react-router-dom';
import AuthenticatedLayoutView from './LayoutView';
import routes from '../routes';

const SidebarController = React.lazy(
  () => import('../../components/Sidebar/SidebarController')
);

const HeaderController = React.lazy(
  () => import('../../components/Header/HeaderController')
);

function AuthenticatedLayoutController({ history }: any) {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [toggled, setToggled] = useState<boolean>(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleSidebar = () => {
    setToggled(!toggled);
  };
  const loading = () => (
    <div className='animated fadeIn pt-1 text-center'>{/* <Loader /> */}</div>
  );

  return (
    <>
      <Suspense fallback={loading()}>
        <HeaderController
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
        />
      </Suspense>
      <div className={`app ${toggled ? 'toggled' : ''}`}>
        <Suspense fallback={loading()}>
          <SidebarController
            collapsed={collapsed}
            toggled={toggled}
            handleToggleSidebar={handleToggleSidebar}
          />
        </Suspense>
        <AuthenticatedLayoutView routes={routes} />
      </div>
    </>
  );
}

export default withRouter(AuthenticatedLayoutController);
