import Dashboard from './pages/dashboard/Index';
import Login from './pages/Login/Index';
import Error from './pages/404';
import AddUser from './pages/addWaiter/Index';

const routes = [
    {path: '/', component: Dashboard, name: 'dashboard'},
    {path: '/login', component: Login, name: 'login'},
    {path: '/404', component: Error, name: '404'},
    {path: '/addUser', component: AddUser, name: 'addUser'}
];


export default routes;
