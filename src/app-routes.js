import { HomePage, TasksPage, ProfilePage, ProductCategory, Attendance, RaiseTicket } from './pages';
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
    },
    {
        path: 'customer_care/raiseTicket',
        element: RaiseTicket
    }
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
