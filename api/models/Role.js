/**
 * Role.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    roleType: {
      type: 'string',
      unique: 'true',
      allowNull: 'false'
    }
    
  },

};

