/**
 * PetController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    createPet: async (req, res) => {
        console.log('USER_ID', req.headers.user)
        const pet = await Pet.create({
            owner: req.headers.user,
            name: req.body.name
        }).fetch();

        pet ? 
            (
                res.status(200).send({ statusCode: '200', data: {pet}, message: 'Successfully created pet' })
            ) : (
                res.status(500).send({ statusCode: '500', data: null, message: 'Failed to create pet' })
            )
    },

    getPet: async (req, res) => {

    },

    patchPet: async (req, res) => {

    },

    deletePet: async (req, res) => {

    }

};

