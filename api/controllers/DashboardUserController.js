const bcrypt = require('bcrypt');

/**
 * DashboardUserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    signup: async (req, res) => {
        const emailExists = await DashboardUser.findOne({
            email: req.body.email
        });

        if (!emailExists) {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            const company = await Company.create({
                name: req.body.companyName
            }).fetch();
            const dashboardUser = await DashboardUser.create({
                fullName: req.body.fullName,
                email: req.body.email,
                password: hashedPassword,
                companyId: company.id,
                roleId: 200
            }).fetch();
    
    
            dashboardUser ?
                (
                    res.status(200).send({ statusCode: 200, data: {}, message: `Successfully created dashboard user` })
                ) : (
                    res.status(500).send({ statusCode: 500, data: {}, message: `Failed to create dashboard user` })
                );
        } else {
            return res.status(400).send({ statusCode: 400, data: {}, message: `Email already exists.` })
        }
    },

    login: async (req, res) => {
        const dashboardUser = await DashboardUser.findOne({
            email: req.body.email
        });

        if (!dashboardUser) {
            return res.status(400).send({ statusCode: 400, data: dashboardUser, message: `Email doesn't exist.` });
        } else {
            if (await bcrypt.compare(req.body.password, dashboardUser.password)) {
                const role = await Role.findOne({
                    id: dashboardUser.roleId
                });
                const permissions = role.roleType === 'admin' ?
                    (
                        ['/dashboard', '/companies', '/pricing-plans', '/security']
                    ) : (
                        ['/dashboard', '/facilities', '/users', '/pricing-plans', '/security']
                    );
                const dataObj = {
                    id: dashboardUser.id,
                    fullName: dashboardUser.fullName,
                    email: dashboardUser.email,
                    companyId: dashboardUser.companyId,
                    role: role.roleType,
                    permissions: permissions
                };

                return res.status(200).send({ statusCode: 200, data: dataObj, message: `Successfully logged in.` });
            } else {
                return res.status(500).send({ statusCode: 500, data: {}, message: `Failed to login, password is incorrect.` });
            }
        }
    },

    updatePassword: async (req, res) => {
        const dashboardUser = await DashboardUser.findOne({
            id: req.body.id
        });

        if (!dashboardUser) {
            return res.status(400).send({ statusCode: 400, data: {}, message: `Dashboard user doesn't exist` });
        } else {
            if (await bcrypt.compare(req.body.currentPassword, dashboardUser.password)) {
                const salt = await bcrypt.genSalt();
                const hashedPassword = await bcrypt.hash(req.body.newPassword, salt);
                const updatedDashboardUser = await DashboardUser.updateOne({
                    id: dashboardUser.id
                }).set({
                    password: hashedPassword
                });

                updatedDashboardUser ?
                    (
                        res.status(200).send({ statusCode: 200, data: {}, message: `Successfully updated password.` })
                    ) : (
                        res.status(500).send({ statusCode: 500, data: {}, message: `Failed to update password.` })
                    );
            } else {
                return res.status(400).send({ statusCode: 400, data: {}, message: `Current password is incorrect` });
            }
        }
    },

    createAdmin: async (req, res) => {
        const emailExists = await DashboardUser.findOne({
            email: req.body.email
        });

        if (!emailExists) {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            const dashboardAdmin = await DashboardUser.create({
                fullName: req.body.fullName,
                email: req.body.email,
                password: hashedPassword,
                roleId: 100
            }).fetch();

            dashboardAdmin ?
                (
                    res.status(200).send({ statusCode: 200, data: {}, message: `Successfully created admin.` })
                ) : (
                    res.status(500).send({ statusCode: 200, data: {}, message: `Failed to create admin.` })
                );
        } else {
            return res.status(400).send({ statusCode: 400, data: {}, message: `Email already exists.` })
        }
    }
    // Admin creation body 
    // {
    //   "fullName": "",
    //   "email": "",
    //   "password": ""
    // } 

};

