import Home from './pages/Home';
import Login from './pages/Login';
import Error from './pages/404';

const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/login', component: Login, name: 'login'},
    {path: '/404', component: Error, name: '404'},
];


export default routes;