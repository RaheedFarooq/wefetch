/**
 * PetController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    createPet: async (req, res) => {
        const pet = await Pet.create({
            owner: req.headers.user,
            name: req.body.name
        }).fetch();

        pet ?
            (
                res.status(200).send({ statusCode: 200, data: {}, message: 'Successfully created pet' })
            ) : (
                res.status(200).send({ statusCode: 500, data: {}, message: 'Failed to create pet' })
            )
    },

    getPet: async (req, res) => {
        const pets = await Pet.find({
            owner: req.headers.user
        });

        pets ?
            (
                res.status(200).send({ statusCode: 200, data: { pets }, message: 'Successfully fetched pets' })
            ) : (
                res.status(200).send({ statusCode: 500, data: {}, message: 'Failed to fetch pets' })
            )
    },

    updatePet: async (req, res) => {
        const pet = await Pet.update({
            id: req.body.id
        }).set({
            name: req.body.name
        }).fetch();

        pet ?
            (
                res.status(200).send({ statusCode: 200, data: {}, message: 'Successfully updated pet' })
            ) : (
                res.status(500).send({ statusCode: 500, data: {}, message: 'Failed to update pet' })
            )
    },

    deletePet: async (req, res) => {
        const pet = await Pet.destroyOne({
            id: req.params.id
        });

        pet ?
        (
            res.status(200).send({ statusCode: 200, data: {}, message: 'Successfully deleted pet' })
        ) : (
            res.status(500).send({ statusCode: 500, data: {}, message: 'Failed to delete pet' })
        )
    }

};

