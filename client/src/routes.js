import Home from './pages/Home';
import Login from './pages/Login/Index';
import Error from './pages/404';
import AddUser from './pages/addWaiter/Index';

const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/login', component: Login, name: 'login'},
    {path: '/404', component: Error, name: '404'},
    {path: '/addUser', component: AddUser, name: 'addUser'}
];


export default routes;
