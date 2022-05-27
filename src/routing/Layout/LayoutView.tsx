import { Switch, Route } from 'react-router-dom';
import './Layout.scss';

function AuthenticatedLayoutView({ routes }: any) {
  return (
    <main>
      <div className='block'>
        <Switch>
          {routes.map((route: any) => (
            <Route
              key={route.url}
              path={route.url}
              render={({ match: { url } }) => (
                <>
                  {route.children.map((child: any) => (
                    <Route
                      key={child.path}
                      path={`${url}/${child.path}`}
                      component={child.component}
                      exact
                    />
                  ))}
                </>
              )}
            />
          ))}
        </Switch>
      </div>
    </main>
  );
}

export default AuthenticatedLayoutView;
