/**
 * FacilityController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  getFacility: async (req,res) => {

    let facility = await Facility.find({companyId: req.query.id});
    console.log(facility);
    return res.status(200).send({
      statusCode: 200,
      data: facility,
      message:"Success"
    });
  },


};

