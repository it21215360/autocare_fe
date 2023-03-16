import {
  HomePage,
  TasksPage,
  ProfilePage,
  ProductCategory,
  LeaveRequestForm,
  Attendance,
  Salary,
  LeaveApproval,
  AttendanceViewer,
  CourierLogin,
  CourierRegistration,
  VehicleReg,
  DeliveryRequestForm,
  ShippingManage,
  CourierProfile,
  Storage,
  Order,
  Suppliers,
  StockOrderRequestForm,
  StockReturnForm,
  Purchase,
  Scheduling,
  Package,
  Update,
  Cancel
} from "./pages";
import { withNavigationWatcher } from "./contexts/navigation";

const routes = [
  { path: "/tasks", element: TasksPage },
  { path: "/profile", element: ProfilePage },
  { path: "/home", element: HomePage },
  { path: "master/product-category", element: ProductCategory },

  //shamith

  //it21215360@my.sliit.lk - Maheesha
  { path: "payroll_hr/leave-request-form", element: LeaveRequestForm },
  { path: "payroll_hr/emp-attendance", element: Attendance },
  { path: "payroll_hr/emp-payroll", element: Salary },
  { path: "payroll_hr/leaveApproval", element: LeaveApproval },
  { path: "payroll_hr/dailyAttendanceViewer", element: AttendanceViewer },

  //it21324406@my.sliit.lk - Shanoli
  { path: "Stock_Management/storage", element: Storage },
  { path: "Stock_Management/suppliers", element: Suppliers },
  { path: "Stock_Management/order", element: Order },
  {
    path: "Stock_Management/stock-order-request-form",
    element: StockOrderRequestForm,
  },
  { path: "Stock_Management/stock-return-form", element: StockReturnForm },

  //it21197000@my.sliit.lk - Chethani
  //element==Function name
  { path: "/scheduling/Scheduling_appointment", element: Scheduling },
  { path: "/scheduling/Package", element: Package },
  { path: "/scheduling/Update_appointment", element: Update },
  { path: "/scheduling/Cancel_appointment", element: Cancel },

  //it21198090@my.sliit.lk - Shania
    //it21197000@my.sliit.lk - Chethani
    //element==Function name
    { path: '/scheduling/Scheduling_appointment', element: Scheduling },
    { path: '/scheduling/Package', element: Package },
    { path: '/scheduling/Update_appointment', element: Update },
    { path: '/scheduling/Cancel_appointment', element: Cancel },






    //it21198090@my.sliit.lk - Shania









  //it21307362@my.sliit.lk - Fernando ST
  { path: "courier/CourierLogin", element: CourierLogin },
  { path: "courier/CourierRegistration", element: CourierRegistration },
  { path: "courier/VehicleReg", element: VehicleReg },
  { path: "courier/DeliveryRequestForm", element: DeliveryRequestForm },
  { path: "courier/ShippingManage", element: ShippingManage },
  { path: "courier/CourierProfile", element: CourierProfile },

  //it21238994@my.sliit.lk - Amanda

    //it21326936@my.sliit.lk - Amandi








    

   

];

export default routes.map((route) => {
  return {
    ...route,
    element: withNavigationWatcher(route.element, route.path),
  };
});
