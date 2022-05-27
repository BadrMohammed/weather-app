// Imported pages
import AltRouteIcon from '@mui/icons-material/AltRoute';
import PageNotFound from '../modules/PageNotFound';
import { HomeController } from '../modules/Home/HomeController';

const routes = [
  {
    name: 'Home',
    component: HomeController,
    textKey: '',
    url: '/',
    Icon: <AltRouteIcon />,
    children: [
      { path: '', component: HomeController, name: 'View Home' },
      { path: '*', component: PageNotFound, name: '404' },
    ],
  },

  {
    name: '404',
    component: PageNotFound,
    textKey: '',
    url: '*',
    children: [{ path: '', component: PageNotFound, name: '404' }],
  },
];

export default routes;
