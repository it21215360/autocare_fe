import { HomePage, TasksPage, ProfilePage, ProductCategory, LeaveRequestForm, Attendance, Salary, LeaveApproval,AttendanceViewer } from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
    { path: '/tasks', element: TasksPage },
    { path: '/profile', element: ProfilePage },
    { path: '/home', element: HomePage },
    { path: 'master/product-category', element: ProductCategory },

    //shamith








    //it21215360@my.sliit.lk - Maheesha
    { path: 'payroll_hr/leave-request-form', element: LeaveRequestForm },
    { path: 'payroll_hr/emp-attendance', element: Attendance },
    { path: 'payroll_hr/emp-payroll', element: Salary },
    { path: 'payroll_hr/leaveApproval', element: LeaveApproval },
    { path: 'payroll_hr/dailyAttendanceViewer', element: AttendanceViewer },








    //it21324406@my.sliit.lk - Shanoli









    //it21197000@my.sliit.lk - Chethani









    //it21198090@my.sliit.lk - Shania









    //it21307362@my.sliit.lk - Fernando ST










    //it21238994@my.sliit.lk - Amanda









    //it21326936@my.sliit.lk - Amandi








    

   

];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
