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

function AuthenticatedLayoutController() {
  const [toggled, setToggled] = useState<boolean>(false);

  const handleToggleSidebar = () => {
    setToggled(!toggled);
  };
  const loading = () => (
    <div className='animated fadeIn pt-1 text-center'>{/* <Loader /> */}</div>
  );

  return (
    <>
      <Suspense fallback={loading()}>
        <HeaderController handleToggleSidebar={handleToggleSidebar} />
      </Suspense>
      <div className={`app ${toggled ? 'toggled' : ''}`}>
        <Suspense fallback={loading()}>
          <SidebarController
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
