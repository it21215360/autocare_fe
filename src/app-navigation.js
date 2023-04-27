export const navigation = [
  { text: "Home", path: "/home", icon: "home" },
  {
    text: "Customer",
    icon: "card",
    items: [
      { text: "My Profile", path: "/profile" },
      { text: "Service History", path: "/tasks" },
      { text: "Order History", path: "customer/order-history" },
      { text: "Delivery Tracker", path: "customer/delivery-tracker" },
    ],
  },
  // {
  //   text: "Masters",
  //   icon: "key",
  //   items: [
  //     { text: "Vehicle", path: "/vehicle" },
  //     { text: "Product Category", path: "master/product-category" },
  //   ],
  // },

  //it21215360@my.sliit.lk - Maheesha
  {
    text: "Payroll and HR",
    icon: "group",
    items: [
      { text: "Leave Request Form", path: "payroll_hr/leave-request-form" },
      { text: "Employee Attendance", path: "payroll_hr/emp-attendance" },
      { text: "Employee Salary", path: "payroll_hr/emp-payroll" },
      { text: "Employee Leave Approval", path: "payroll_hr/leaveApproval" },
      {
        text: "Employee Attendance Viewer",
        path: "payroll_hr/dailyAttendanceViewer",
      },
      { text: "Employee Login", path: "payroll_hr/employeeLogin" },
      { text: "Employee Master", path: "payroll_hr/employee-master" },
    ],
  },

  //it21324406@my.sliit.lk - Shanoli
  {
    text: "Stock Management",
    icon: "product",
    items: [
      { text: "Inventory Login", path: "stock_management/inventory-login" },
      { text: "Stock", path: "stock_management/storage" },
      { text: "Suppliers", path: "stock_management/suppliers" },
      { text: "Stock Order History", path: "stock_management/order" },
      {
        text: "Purchase Order Form",
        path: "stock_management/stock-order-request-form",
      },
      { text: "Stock Return form", path: "stock_management/stock-return-form" },
      { text: "Good Receive Form", path: "stock_management/purchase" },
    ],
  },

  //it21197000@my.sliit.lk - Chethani

  {
    text: "Scheduling",
    icon: "event",
    items: [
      {
        text: "Scheduling Appointment",
        path: "scheduling/Scheduling_appointment",
      },
      { text: "Update Appointment", path: "scheduling/Update_appointment" },
      {
        text: "Confirm Appointment viewer",
        path: "scheduling/Confirm_appointment",
      },
      { text: "Cancel Appointment", path: "scheduling/Cancel_appointment" },
      { text: "Booked memo viewer", path: "scheduling/Memo" },
      { text: "Package Details", path: "scheduling/Package" },
      { text: "Service Manager Login", path: "scheduling/Login" },
      { text: "Service Scheduling", path: "scheduling/Service" },
    ],
  },

  //it21198090@my.sliit.lk - Shania
  {
    text: "Master Data",
    icon: "key",
    items: [
      { text: "Product Category Data", path: "masters/ProductCategory" },
      { text: "Product Master", path: "masters/productMaster" },
    ],
  },

  //it21307362@my.sliit.lk - Fernando ST
  {
    text: "Delivery",
    icon: "globe",
    items: [
      { text: "Courier Registration", path: "./courier/CourierRegistration" },
      { text: "Vehicle Register", path: "courier/VehicleReg" },
      { text: "Delivery Request Form", path: "courier/deliveryRequest" },
      { text: "Shipping Manage", path: "courier/ShippingManage" },
      { text: "Courier Profile", path: "courier/CourierProfile" },
      { text: "Delivery Confirm", path: "courier/DeliveryConfirm" },
      { text: "Export to Excel", path: "courier/ExportToExcel" },
    ],
  },

  //it21238994@my.sliit.lk - Amanda
  {
    text: "Customer Care",
    icon: "tips",
    items: [
      { text: "Raise a Ticket", path: "customer_care/raiseTicket" },
      { text: "My Tickets", path: "customer_care/myTicket" },
      { text: "Track Ticket", path: "customer_care/trackTicket" },
      { text: "FAQ", path: "customer_care/freaquentQuestion" },
    ],
  },

  //it21326936@my.sliit.lk - Amandi
  {
    text: "Order",
    icon: "folder",
    items: [
      { text: "Checkout", path: "Ordering/Order_details" },
      { text: "Cart", path: "Ordering/Cart" },
      { text: "Card Details", path: "Ordering/Card_details" },
      { text: "Products", path: "Ordering/Product" },
      { text: "Return Product", path: "Ordering/Return_products" },
      { text: "Orders", path: "Ordering/Orders_Admin" },
      { text: "Invoice View", path: "Ordering/Invoice" },
      { text: "new", path: "Ordering/new" },
    ],
  },
];
