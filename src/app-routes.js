import { HomePage, TasksPage, ProfilePage, ProductCategory, LeaveRequestForm } from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
    { path: '/tasks', element: TasksPage },
    { path: '/profile', element: ProfilePage },
    { path: '/home', element: HomePage },
    { path: 'master/product-category', element: ProductCategory },

    //shamith








    //it21215360@my.sliit.lk - Maheesha
    { path: 'payroll/leave-request-form', element: LeaveRequestForm }









    //it21324406@my.sliit.lk - Shanoli









    //it21197000@my.sliit.lk - Chethani









    //it21198090@my.sliit.lk - Shania









    //it21307362@my.sliit.lk - Fernando ST










    //it21238994@my.sliit.lk - Amanda









    //it21326936@my.sliit.lk - Amandi








    

    {
        path: '/tasks',
        element: TasksPage
    },
    {
        path: '/profile',
        element: ProfilePage
    },
    {
        path: '/home',
        element: HomePage
    },
    {
        path: 'master/product-category',
        element: ProductCategory
    },
    {
        path: 'payroll_hr/emp-attendance',
        element: Attendance
    }
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
