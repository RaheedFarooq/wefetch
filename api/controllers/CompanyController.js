/**
 * CompanyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  getCompanies: async (req, res) => {
    let company = await Company.find();

    return res.status(200).send({ statusCode: 200, data: company, message: "Success" });
  }

  /* Dashboard specific methods */

  

};

