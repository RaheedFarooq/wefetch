/**
 * RoleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    createRole: async (req, res) => {
        const role = await Role.create({
            id: req.body.id,
            roleType: req.body.roleType
        }).fetch();

        role ?
            (
                res.status(200).send({ statusCode: 200, data: role, message: 'Successfully created role' })
            ) : (
                res.status(500).send({ statusCode: 500, data: {}, message: 'Failed to create role' })
            )
    }
    // Role creation body 
    // {
    //   "roleType": "admin or client"
    // } 

};

