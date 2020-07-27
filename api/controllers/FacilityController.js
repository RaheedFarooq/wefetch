/**
 * FacilityController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  getFacility: async (req, res) => {
    let facility = await Facility.find({ companyId: req.params.id });

    return res.status(200).send({ statusCode: 200, data: facility, message: "Success" });
  },

  /* Dashboard specific methods */

  createFacility: async (req, res) => {
    const facility = await Facility.create({
      name: req.body.name,
      country: req.body.country,
      city: req.body.city,
      lat: req.body.lat,
      long: req.body.long,
      radius: req.body.radius,
      pickRadius: req.body.pickRadius,
      dropRadius: req.body.dropRadius,
      isHereNowActive: req.body.isHereNowActive,
      phone: req.body.phone,
      email: req.body.email,
      contactType: req.body.contactType,
      companyId: req.body.companyId
    }).fetch();

    facility ?
      (
        res.status(200).send({ statusCode: 200, data: facility, message: "Successfully created facility." })
      ) : (
        res.status(500).send({ statusCode: 200, data: {}, message: "Failed to create facility." })
      )
  },

  updateFacility: async (req, res) => {
    const updatedFacility = await Facility.updateOne({
      id: req.body.id
    }).set({
      lat: req.body.lat,
      long: req.body.long,
      radius: req.body.radius,
      pickRadius: req.body.pickRadius,
      dropRadius: req.body.dropRadius,
      isHereNowActive: req.body.isHereNowActive,
      phone: req.body.phone,
      email: req.body.email,
      contactType: req.body.contactType,
      status: req.body.status
    });

    updatedFacility ?
      (
        res.status(200).send({ statusCode: 200, data: updatedFacility, message: "Successfully updated facility." })
      ) : (
        res.status(500).send({ statusCode: 200, data: {}, message: "Failed to update facility." })
      )
  },

  deleteFacility: async (req, res) => {
    const facility = await Facility.findOne({
      id: req.body.id
    });

    if (facility) {
      const userArr = await User.find({
        facilityId: facility.id
      });
      
      if (userArr.length > 0) {
        for (var key in userArr) {
          await User.updateOne({
            id: userArr[key].id
          }).set({
            facilityId: null
          });
        }
      }

      return res.status(200).send({ statusCode: 200, data: {}, message: "Successfully deleted facility." });
    } else {
      return res.status(400).send({ statusCode: 400, data: updatedFacility, message: "Facility doesn't exist." })
    }
  }

};

