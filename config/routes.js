/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  '/': { view: 'pages/homepage' },

  'GET /api/user' : 'UserController.getUser',
  'PATCH /api/user/change-password' : 'UserController.changePassword',
  'PATCH /api/user' : 'UserController.updateUser',
  'POST /api/user/signup' : 'UserController.signup',
  'POST /api/user/login' : 'UserController.login',
  'GET /api/user/forget-password' : 'UserController.forgotPassword',
  'GET /api/user/get-status' : 'UserController.getUserStatus',

  'GET /api/company' : 'CompanyController.getCompanies',
  'GET /api/company/:id/facility' : 'FacilityController.getFacility',

  'POST /api/booking/create' : 'BookingController.createBooking',

  'POST /api/pet/' : 'PetController.createPet',
  'GET /api/pet/' : 'PetController.getPet',
  'PUT /api/pet/' : 'PetController.updatePet',
  'DELETE /api/pet/:id' : 'PetController.deletePet',

  'POST /api/dashboard-user/signup' : 'DashboardUserController.signup',
  'POST /api/dashboard-user/login' : 'DashboardUserController.login',
  'PUT /api/dashboard-user/updatePassword' : 'DashboardUserController.updatePassword',
  'POST /api/dashboard-user/admin1154611526' : 'DashboardUserController.createAdmin',
  /* {
    fullName: '',
    email: '',
    password: ''
  } */

  'POST /api/role' : 'RoleController.create',
  /* {
    roleType: ''
  } */

};
