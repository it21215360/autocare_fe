import { HomePage, TasksPage, ProfilePage, ProductCategory, Attendance } from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
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
