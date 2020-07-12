const bcrypt = require('bcrypt');


/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  signup: async (req, res) => {
    console.log(req.body);
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    let petName = req.body.petName;
    delete req.body.petName;
    try {
      const user = await User.create({
        ...req.body,
        password: hashPassword
      }).fetch();
      delete user.password;
      await Pet.create({ name: petName, owner: user.id });
      if (user) return res.status(200).send({ statusCode: 200, data: { user }, message: "Signup Successful" });
    }
    catch (err) {
      console.log(err);
      if (err.code === "E_UNIQUE") return res.status(500).send({ statusCode: 500, message: 'Account already Exists' });

      return res.status(500).send({ statusCode: 500, message: 'Opps! Something Went Wrong' });
    }
  },

  login: async (req, res) => {
    consol.log(req.body);
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).send({ statusCode: 400, message: "email not associated to any Account" });
    }

    if (await bcrypt.compare(req.body.password, user.password)) {
      return res.status(200).send({
        statusCode: 200,
        data: {},
        message: "Login Successful"
      })
    }
    else {
      return res.status(400).send({
        statusCode: 400,
        data: {},
        message: "Invalid Password"
      })
    }
  },

  getUser: async (req, res) => {

    let userId = parseInt(req.headers.user);

    if (!userId) return res.status(500).send({ statusCode: 500, message: 'Oops! Something went wrong' });

    const user = await User.findOne({ id: userId });

    if (!user) return res.status(500).send({ statusCode: 500, message: 'User does not exist.' });

    if (user.facilityId) {
      const facility = await Facility.findOne({ id: user.facilityId });
      user.selectedFacility = facility ? facility : {};
      user.selectedCompanyId = facility ? facility.companyId : {};
      delete user.facilityId;
    }
    try {
      const book = await Booking.findOne({ userId });
      console.log(JSON.parse(book.details));

      user.booking = book.details? JSON.parse(book.details) : [];
    }
    catch (e) {
      console.log(e);
    }
    let firstPet = await Pet.findOne({ owner: user.id });
    user.firstPetName = firstPet.name;
    // console.log(user);
    return res.status(200).send({ statusCode: 200, data: user, message: "Success" });
  },

  updateUser: async (req, res) => {
    let userId = parseInt(req.headers.user);
    console.log(req.body);
    let user = {};
    user.fullName = req.body.fullName;
    user.facilityId = req.body.facilityId;

    await User.update({ id: userId }).set({ ...user }).then(() => {
      return res.status(200).send({ statusCode: 200, data: {}, message: "Success" });
    }).catch((err) => {
      console.log(err);
      return res.status(500).send({ statusCode: 500, message: 'Oops! Something went wrong' });
    });
  }



};
