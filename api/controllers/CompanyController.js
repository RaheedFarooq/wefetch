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
  },

  /* Dashboard specific methods */

  getCompaniesAndFacilities: async (req, res) => {
    const companyArr = await Company.find();
    let companies = [];
    
    if (companyArr.length > 0) {
      for (var key in companyArr) {
        const facilityArr = await Facility.find({
          companyId: companyArr[key].id
        });
        companies.push({
          ...companyArr[key],
          facilities: facilityArr
        });
      }
      return res.status(200).send({ statusCode: 200, data: companies, message: "Successfully fetched companies and facilities" });
    } else {
      return res.status(200).send({ statusCode: 200, data: {}, message: "No companies and facilities exist." });
    }
  },

  updateCompany: async (req, res) => {
    const updatedCompany = await Company.updateOne({
      id: req.body.id
    }).set({
      pricingPlanId: req.body.pricingPlanId,
      status: req.body.status
    });

    updatedCompany ?
      (
        res.status(200).send({ statusCode: 200, data: updatedCompany, message: "Successfully updated company." })
      ) : (
        res.status(500).send({ statusCode: 200, data: {}, message: "Failed to update company." })
      )
  },

};

