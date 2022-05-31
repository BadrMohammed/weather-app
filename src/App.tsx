import './assets/sass/mainStyle.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import LayoutController from './routing/Layout/LayoutController';
import { store } from './redux/store';
import { changeLanguage, getLanguage } from './lang/local';
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {
  return (
    <SkeletonTheme
      width='100%'
      height='100%'
      borderRadius='inherit'
      baseColor='#fff'
    >
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route render={(rest) => <LayoutController {...rest} />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </SkeletonTheme>
  );
}
changeLanguage();
if (getLanguage() === 'en') {
  document.body.style.direction = 'ltr';
} else {
  document.body.style.direction = 'rtl';
}
export default App;
