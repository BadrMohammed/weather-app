import './assets/sass/mainStyle.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import theme from './config/theme.config';
import LayoutController from './routing/Layout/LayoutController';
import ErrorBoundary from './modules/ErrorBoundary';
import { store } from './redux/store';
import { changeLanguage, getLanguage } from './lang/local';
function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route render={(rest) => <LayoutController {...rest} />} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
      </ErrorBoundary>
    </Provider>
  );
}
changeLanguage();
if (getLanguage() === 'en') {
  document.body.style.direction = 'ltr';
} else {
  document.body.style.direction = 'rtl';
}
export default App;
