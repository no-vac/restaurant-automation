import Home from './pages/Home';
import Login from './pages/Login';
import Error from './pages/404';
import WaiterAdd from './pages/addWaiter/Index';

const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/login', component: Login, name: 'login'},
    {path: '/404', component: Error, name: '404'},
    {path: '/addWaiter', component: WaiterAdd, name: 'addWaiter'}
];


export default routes;