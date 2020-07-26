/**
 * Facility.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: { type:'string', columnType:'varchar(255)' },
    country: { type:'string', columnType:'varchar(255)' },
    city: { type:'string', columnType:'varchar(255)' },
    lat: { type: 'number', columnType: 'decimal(16,8)' },
    long: { type: 'number', columnType: 'decimal(16,8)' },
    radius: { type: 'number', columnType: 'decimal(16,8)' },
    pickRadius: { type: 'number', columnType: 'decimal(16,8)' },
    dropRadius: { type: 'number', columnType: 'decimal(16,8)' },
    isHereNowActive: { type: 'boolean', columnType:'boolean', defaultsTo:false },
    phone: { type:'string', columnType:'varchar(255)' },
    email: { type:'string', columnType:'varchar(255)' },
    contactType: { type: 'number', columnType: 'integer', defaultsTo:0 },
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

