/**
 * BookingController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {

  createBooking: async (req, res) => {
    let userId = parseInt(req.headers.user);
    console.log(req.body);
    console.log(typeof req.body);
    console.log(typeof req.body.dates);
    console.log(typeof req.body.recurring);
    let details = JSON.stringify(req.body);
    let booking = await Booking.findOne({ userId });
    if (booking) await Booking.update({ userId }).set({ details });
    await Booking.create({ userId, details });
    return res.status(200).send({ statusCode: 200, data: {}, message: "Success" });
  }

};

