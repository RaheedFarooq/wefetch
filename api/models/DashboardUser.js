/**
 * DashboardUser.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    
    fullName: {
      type: 'string',
      columnType: 'varchar(255)',
      allowNull: false,
      required: true
    },

    email: {
      type: "string",
      columnType: "varchar(255)",
      allowNull: false,
      required: true,
      unique: true,
      isEmail: true,
    },

    password: { 
      type: "string", 
      columnType: "varchar(255)", 
      allowNull: false,
      required: true
    },

    companyId: {
      type: "number", 
      columnType: "integer", 
      allowNull: true,
      required: false
    },

    roleId: {
      type: 'number',
      columnType: 'integer',
      allowNull: false,
      required: true
    }

  },

};

