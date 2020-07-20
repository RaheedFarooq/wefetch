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
      if (err.code === "E_UNIQUE") return res.status(200).send({ statusCode: 500, message: 'Account already Exists' });

      return res.status(500).send({ statusCode: 500, message: 'Opps! Something Went Wrong' });
    }
  },

  login: async (req, res) => {
    try {
      console.log(req.body);
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
        return res.status(400).send({ statusCode: 400, message: "email not associated to any Account" });
      }

      if (await bcrypt.compare(req.body.password, user.password)) {
        console.log(user);

        return res.status(200).send({
          statusCode: 200,
          data: { user },
          message: "Login Successful"
        })
      }
      else {
        return res.status(500).send({
          statusCode: 500,
          data: {},
          message: "Invalid Password"
        })
      }
    }
    catch (e) {
      console.log('error', e);
      
      return res.status(500).send({
        statusCode: 500,
        data: {},
        message: "Something went wrong"
      })
    }
  },

  getUser: async (req, res) => {
    console.log("get User API");

    let userId = parseInt(req.headers.user);

    if (!userId) return res.status(200).send({ statusCode: 500, message: 'Oops! Something went wrong' });

    const user = await User.findOne({ id: userId });

    if (!user) return res.status(200).send({ statusCode: 500, message: 'User does not exist.' });

    if (user.facilityId) {
      const facility = await Facility.findOne({ id: user.facilityId });
      user.selectedFacility = facility ? facility : {};
      user.selectedCompanyId = facility ? facility.companyId : {};
      delete user.facilityId;
    }
    try {
      const book = await Booking.findOne({ userId });
      // console.log(JSON.parse(book.details));
      user.booking = book && book.details ? JSON.parse(book.details) :
        {
          recurring: [], dates: []
        };
    }
    catch (e) {
      console.log(e);
    }
    // let firstPet = await Pet.findOne({ owner: user.id });
    // let firstPet = await Pet.find({
    //   where: { owner: user.id },
    //   limit: 1,
    //   sort: 'createdAt'
    // });
    let firstPet = await Pet.find({owner: user.id}).sort('createdAt').limit(1);

    user.firstPetName = firstPet ? (firstPet.name) : ('');
    console.log(user);
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
      return res.status(200).send({ statusCode: 500, message: 'Oops! Something went wrong' });
    });
  },

  changePassword: async (req, res) => {
    let userId = parseInt(req.headers.user);
    let user = await User.findOne({ id: userId });
    if (user && await bcrypt.compare(req.body.oldPassword, user.password)) {
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      let updatedUser = await User.update({ id: userId }).set({ password: hashPassword }).fetch();
      if (user) {
        return res.status(200).send({ statusCode: 200, data: {}, message: "Password Changed Succssfully" })
      }
      return res.status(500).send({ statusCode: 500, data: {}, message: "Something Went Wrong" });
    }
    return res.status(200).send({ statusCode: 400, data: {}, message: "Old Password Incorrect!" });
  },

  forgotPassword: async (req, res) => {
    if (req.body.email) {
      user = User.findOne({ email: req.body.email });
      if (!user) return res.status(200).send({ statusCode: 200, data: {}, message: "No User Associated with this email" });
      else {
        const hashEmail = await bcrypt.hash(req.body.email, 10);
        let link = `https://devdashboard.wefetchapp.com/reset-password?r=${hashEmail}`;
        await sails.helpers.sendForgotPasswordEmail(req.body.email, link);
        return res.status(200).send({ statusCode: 200, data: {}, message: "Recovery Email sent!" });
      }
    }
  },

  getUserStatus: async (req, res) => {
    //TODO: Check if facility has room to accept a user
    return res.status(200).send({ statusCode: 200, data: { status: true }, message: "User Status" });
  }



};
