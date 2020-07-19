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

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  'GET /api/user' : 'UserController.getUser',
  'PATCH /api/user/change-password' : 'UserController.changePassword',

  'GET /api/company' : 'CompanyController.getCompanies',
  'GET /api/company/:id/facility' : 'FacilityController.getFacility',

  'PATCH /api/user' : 'UserController.updateUser',
  'POST /api/user/signup' : 'UserController.signup',
  'POST /api/user/login' : 'UserController.login',
  'GET /api/user/forget-password' : 'UserController.forgotPassword',
  'GET /api/user/get-status' : 'UserController.getUserStatus',


  'POST /api/booking/create' : 'BookingController.createBooking',


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
  'POST /api/pet/' : 'PetController.createPet',
  'GET /api/pet/' : 'PetController.getPet',
  'PUT /api/pet/' : 'PetController.updatePet',
  'DELETE /api/pet/:id' : 'PetController.deletePet',

};
