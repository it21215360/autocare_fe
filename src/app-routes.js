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
  PurchaseOrderForm,
  StockReturnForm,
  Scheduling,
  PackageDetails,
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
  { path: "stock_management/storage", element: Storage },
  { path: "stock_management/suppliers", element: Suppliers },
  { path: "stock_management/order", element: Order },
  {
    path: "stock_management/stock-order-request-form",
    element: PurchaseOrderForm,
  },
  { path: "stock_management/stock-return-form", element: StockReturnForm },

  //it21197000@my.sliit.lk - Chethani
  { path: "/scheduling/Scheduling_appointment", element: Scheduling },
  { path: "/scheduling/Package", element: PackageDetails },
  { path: "/scheduling/Update_appointment", element: Update },
  { path: "/scheduling/Cancel_appointment", element: Cancel },

  //it21198090@my.sliit.lk - Shania







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
  { path: 'Ordering/Order_details', element: OrderForm },
  { path: 'Ordering/Cart', element: AddtoCart },
  { path: 'Ordering/Card_details', element: CardForm },
  { path: 'Ordering/Product', element: ProductPage },
  { path: 'Ordering/Return_product', element: ReturnProduct }


];

export default routes.map((route) => {
  return {
    ...route,
    element: withNavigationWatcher(route.element, route.path),
  };
});
