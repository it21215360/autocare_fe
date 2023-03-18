export const navigation = [
  { text: 'Home', path: '/home', icon: 'home' },
  {
    text: 'Customer', icon: 'card',
    items: [
      { text: 'My Profile', path: '/profile' },
      { text: 'Service History', path: '/tasks' },
      { text: 'Order History', path: 'customer/order-history' },
      { text: 'Delivery Tracker', path: 'customer/delivery-tracker' }
    ]
  },
  {
    text: 'Masters', icon: 'key',
    items: [
      { text: 'Vehicle', path: '/vehicle' },
      { text: 'Product Category', path: 'master/product-category' }
    ]
  },

  //shamith








  //it21215360@my.sliit.lk - Maheesha
  {
    text: 'Payroll and HR', icon: 'group',
    items: [
      
      { text: 'Leave Request Form', path: 'payroll_hr/leave-request-form' },
      { text: 'Employee Attendance', path: 'payroll_hr/emp-attendance' },
      { text: 'Employee Salary', path: 'payroll_hr/emp-payroll' },
      { text: 'Employee Leave Approval', path: 'payroll_hr/leaveApproval' },
      { text: 'Employee Attendance Viewer', path: 'payroll_hr/dailyAttendanceViewer'},
    ]
  },






  //it21324406@my.sliit.lk - Shanoli
  {
    text: 'Stock Management', icon: 'product',
    items: [
      { text: 'Stock', path: 'stock_management/storage' },
      { text: 'Suppliers', path: 'stock_management/suppliers' },
      { text: 'PO History', path: 'stock_management/order' },
      { text: 'Purchase Order Form', path: 'stock_management/stock-order-request-form' },
      { text: 'Stock Return form', path: 'stock_management/stock-return-form'},
      { text: 'Good Receive Form', path: 'stock_management/purchase' },
    ]
  },








  //it21197000@my.sliit.lk - Chethani

  {
    text: 'Scheduling', icon: 'event',
    items: [
      { text: 'Scheduling Appointment', path: 'scheduling/Scheduling_appointment'},
      { text: 'Update Appointment', path: 'scheduling/Update_appointment' },
      { text: 'Confirm Appointment', path: 'scheduling/Confirm_appointment' },
      { text: 'Cancel Appointment', path: 'scheduling/Cancel_appointment' },
   //   { text: ' memo viewer', path: 'scheduling/emp_payroll' },
      { text: 'Booked memo viewer', path: 'scheduling/Memo' },
      { text: 'Package Details', path: 'scheduling/Package' },
    ]
  },







  //it21198090@my.sliit.lk - Shania









  //it21307362@my.sliit.lk - Fernando ST
  {
    text: 'Delivery', icon: 'globe',
    items: [
      { text: 'Courier Login', path: './courier/CourierLogin' },
      { text: 'Courier Registration', path: './courier/CourierRegistration' },
      { text: 'Vehicle Register', path: 'courier/VehicleReg' },
      { text: 'Delivery Request Form', path: 'courier/DeliveryRequestForm' },
      { text: 'Shipping Manage', path: 'courier/ShippingManage' },
      { text: 'Courier Profile', path: 'courier/CourierProfile' },
    ]
  },









  //it21238994@my.sliit.lk - Amanda
  {
    text: 'Customer Care',
    icon: 'folder',
    items: [
      { text: 'Raise a Ticket', path: '/raiseTicket' },
      { text: 'FAQ', path: '/faq' }
    ]
  },







  //it21326936@my.sliit.lk - Amandi
];
