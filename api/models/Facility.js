/**
 * Facility.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: { type:'string', columnType:'varchar(255)' },
    city: { type:'string', columnType:'varchar(255)' },
    lat: { type: 'number', columnType: 'decimal' },
    long: { type: 'number', columnType: 'decimal' },
    pickRadius: { type: 'number', columnType: 'integer' },
    dropRadius: { type: 'number', columnType: 'integer' },
    distanceAlert: { type: 'boolean', defaultsTo: true },
    phone: { type:'string', columnType:'varchar(255)' },
    email: { type:'string', columnType:'varchar(255)' },
    ContactType:{
      type: 'string',
      columnType: 'varchar(255)',
      // required: true,
      isIn: ['EMAIL', 'PHONE']
    },
    companyId: {
      model:'company'
    }


    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

