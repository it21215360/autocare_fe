export const navigation = [
  {
    text: 'Home', path: '/home',
    icon: 'home'
  },
  {
    text: 'Examples',
    icon: 'folder',
    items: [
      { text: 'Profile', path: '/profile' },
      { text: 'Tasks', path: '/tasks' }
    ]
  },
  {
    text: 'Masters', icon: 'folder',
    items: [
      { text: 'Vehicle', path: '/vehicle' },
      { text: 'Product Category', path: 'master/product-category' }
    ]
  },
  {
    text: 'Payroll and HR',
    icon: 'folder',
    items: [
      {
        text: 'Employee Attendance',
        path: 'payroll_hr/emp-attendance'
      },
      {
        text: 'Employee Payroll',
        path: '/emp_payroll'
      },
    ]
  }
];
