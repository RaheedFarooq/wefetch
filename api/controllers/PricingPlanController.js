/**
 * PricingPlanController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    createPlan: async (req, res) => {
        const pricingPlan = await PricingPlan.create({
            name: req.body.name,
            subsciptionMode: req.body.subsciptionMode,
            price: req.body.price,
            usersLimit: req.body.usersLimit
        }).fetch();

        pricingPlan ?
            (
                res.status(200).send({ statusCode: 200, data: {}, message: `Successfully created plan.` })
            ) : (
                res.status(500).send({ statusCode: 500, data: {}, message: `Failed to create plan.` })
            );
    }
    // Monthly plans
    // {
    //     "name": "basic, pro, premium, enterprise"
    //     "subscriptionMode": "monthly or anually",
    //     "price": if monthly [49, 59, 69, 79] or if annually [490, 590, 690, 790]
    //     "usersLimit": 100, 200, 300, unlimited/null
    // }

};

