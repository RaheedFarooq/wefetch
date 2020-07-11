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
    radius: { type: 'number', columnType: 'integer' },
    pickRadius: { type: 'number', columnType: 'integer' },
    dropRadius: { type: 'number', columnType: 'integer' },
    isHereNowActive: { type: 'boolean', columnType:'boolean', defaultsTo:false },
    phone: { type:'string', columnType:'varchar(255)' },
    email: { type:'string', columnType:'varchar(255)' },
    // ContactType:{
    //   type: 'string',
    //   columnType: 'varchar(255)',
    //   // required: true,
    //   isIn: ['EMAIL', 'PHONE']
    // },
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

