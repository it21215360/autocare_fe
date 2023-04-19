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
  DeliveryConfirm,
  CourierRegistration,
  VehicleReg,
  deliveryRequest,
  ShippingManage,
  CourierProfile,
  InventoryLogin,
  Storage,
  Order,
  Suppliers,
  PurchaseOrderForm,
  StockReturnForm,
  GoodReceiveForm,
  Scheduling,
  PackageDetails,
  Update,
  Cancel,
  EmpLogin,
  EmployeeMaster,
  RaiseTicket,
  OrderForm,
  CardForm,
  Cart,
  ProductPage,
  ReturnProduct,
  Confirm,
  Ordersdet,
  newpage
} from "./pages";
import { withNavigationWatcher } from "./contexts/navigation";
import invoice from "./pages/ordering/Invoice";

const routes = [
  { path: "/tasks", element: TasksPage },
  { path: "/profile", element: ProfilePage },
  { path: "/home", element: HomePage },

  //it21215360@my.sliit.lk - Maheesha
  { path: "payroll_hr/leave-request-form", element: LeaveRequestForm },
  { path: "payroll_hr/emp-attendance", element: Attendance },
  { path: "payroll_hr/emp-payroll", element: Salary },
  { path: "payroll_hr/leaveApproval", element: LeaveApproval },
  { path: "payroll_hr/dailyAttendanceViewer", element: AttendanceViewer },
  { path: "payroll_hr/employeeLogin", element: EmpLogin },
  { path: "payroll_hr/employee-master", element: EmployeeMaster },

  //it21324406@my.sliit.lk - Shanoli

  { path: "stock_management/inventory-login", element: InventoryLogin },
  { path: "stock_management/storage", element: Storage },
  { path: "stock_management/suppliers", element: Suppliers },
  { path: "stock_management/order", element: Order },
  {
    path: "stock_management/stock-order-request-form",
    element: PurchaseOrderForm,
  },
  { path: "stock_management/stock-return-form", element: StockReturnForm },
  { path: "stock_management/purchase", element: GoodReceiveForm },

  //it21197000@my.sliit.lk - Chethani
  { path: "/scheduling/Scheduling_appointment", element: Scheduling },
  { path: "/scheduling/Package", element: PackageDetails },
  { path: "/scheduling/Update_appointment", element: Update },
  { path: "/scheduling/Cancel_appointment", element: Cancel },
  { path: "/scheduling/Confirm_appointment", element: Confirm },
  { path: "/scheduling/Login", element: ServiceLogin },

  //it21198090@my.sliit.lk - Shania
  { path: "ProductCategory", element: ProductCategory },
  // { path: "/masters/ViewMasterProd", element: ProductCategoryview },
  // { path: "/masters/ProductCat", element: App },

  //it21198090@my.sliit.lk - Shania

  //it21307362@my.sliit.lk - Fernando ST

  { path: "courier/CourierRegistration", element: CourierRegistration },
  { path: "courier/VehicleReg", element: VehicleReg },
  { path: "courier/deliveryRequest", element: deliveryRequest },
  { path: "courier/ShippingManage", element: ShippingManage },
  { path: "courier/CourierProfile", element: CourierProfile },
  { path: "courier/DeliveryConfirm", element: DeliveryConfirm },

  //it21238994@my.sliit.lk - Amanda
  { path: "customer_care/myTicket", element: MyTicket },
  { path: "cystomer_care/trackTicket", element: TrackTicket },
  { path: "customer_care/raiseTikcket", element: RaiseTicketForm },
  { path: "customer_care/freaquentQuestion", element: FreaquentQuestionPage },



//where's the prettier formtter??



  //it21326936@my.sliit.lk - Amandi
  { path: "Ordering/Order_details", element: OrderForm },
  { path: 'Ordering/Cart', element: Cart },
  { path: "Ordering/Card_details", element: CardForm },
  { path: "Ordering/Product", element: ProductPage },
  { path: "Ordering/Orders_Admin", element: Ordersdet },
  { path: "Ordering/Return_products", element: ReturnProduct },
  { path: "Ordering/Invoice", element: invoice },
  { path: "Ordering/new", element: newpage },


];

export default routes.map((route) => {
  return {
    ...route,
    element: withNavigationWatcher(route.element, route.path),
  };
});
