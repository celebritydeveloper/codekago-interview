
import HomePage from '../pages/home.jsx';
import LoginPage from '../pages/login.jsx';
import RegisterPage from '../pages/register.jsx';
import MealsPage from '../pages/meals.jsx';
import SingleMealPage from '../pages/single-meal';
import SettingsPage from '../pages/settings';
import NotFoundPage from '../pages/404.jsx';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login/',
    component: LoginPage,
  },

  {
    path: '/register/',
    component: RegisterPage,
  },

  {
    path: '/meals/',
    component: MealsPage,
  },

  {
    path: '/single-meal/:id/',
    component: SingleMealPage,
  },

  {
    path: '/settings/',
    component: SettingsPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
