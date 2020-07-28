/**
 * PricingPlan.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      columnType: 'varchar(255)',
      required: true
    },

    subscriptionMode: {
      type: 'string',
      columnType: 'varchar(255)',
      isIn: ['monthly', 'annually'],
      required: true
    },

    price: {
      type: 'number',
      columnType: 'integer',
      required: true
    },

    usersLimit: {
      type: 'number',
      columnType: 'integer',
      allowNull: true
    }

  },

};

