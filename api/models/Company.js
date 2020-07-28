/**
 * Company.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: { 
      type:'string', 
      columnType:'varchar(255)',
      allowNull: false, 
      required: true
    },

    pricingPlanId: {
      type: 'number',
      columnType: 'integer',
      allowNull: true,
      required: false
    },

    status: {
      type: 'string',
      columnType: 'varchar(255)',
      isIn: ['approved', 'pending', 'banned'],
      defaultsTo: 'pending'
    }
  
  },

};

